class MyNode {
	key: number;
	value: number;
	freq: number = 1;

	prev: MyNode | null = null;
	next: MyNode | null = null;

	constructor(key: number, value: number) {
		this.key = key;
		this.value = value;
	}
}
class MyDoublyLinkedList {
	head: MyNode;
	tail: MyNode;
	size: number = 0;

	constructor() {
		this.head = new MyNode(0, 0);
		this.tail = new MyNode(0, 0);

		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	add(node: MyNode) {
		node.prev = this.tail.prev;
		node.next = this.tail;

		this.tail.prev!.next = node;
		this.tail.prev = node;

		this.size++;
	}

	remove(node: MyNode) {
		node.prev!.next = node.next;
		node.next!.prev = node.prev;

		node.prev = null;
		node.next = null;

		this.size--;
	}

	removeFirst(): MyNode | null {
		if (this.size === 0) return null;

		const first = this.head.next!;
		this.remove(first);
		return first;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}
}

class LFUCache {
	#cache = new Map<number, MyNode>();
	#capacity: number = 0;
	#minScore = 1;
	#cacheScore = new Map<number, MyDoublyLinkedList>();

	constructor(capacity: number) {
		this.#capacity = capacity;
	}

	get(key: number): number {
		const value = this.#cache.get(key);
		if (value != undefined) {
			this.#updateCacheTimeline(value);
			return value.value;
		}
		return -1;
	}

	put(key: number, value: number): void {
		if (this.#capacity === 0) return;
		if (this.#cache.has(key)) {
			const node = this.#cache.get(key);
			node!.value = value;
			this.#cache.set(key, node!);
			this.#updateCacheTimeline(node!);
			return;
		}
		if (this.#cache.size === this.#capacity) {
			this.#deleteUnusedValue();
		}
		const newNode = new MyNode(key, value);
		this.#minScore = 1;
		this.#cache.set(key, newNode);
		let list = this.#cacheScore.get(1);
		if (!list) {
			list = new MyDoublyLinkedList();
			this.#cacheScore.set(1, list);
		}
		list.add(newNode);
		this.#minScore = 1;
	}

	#updateCacheTimeline(node: MyNode): void {
		const currentFreqList = this.#cacheScore.get(node.freq);
		if (currentFreqList != undefined) {
			currentFreqList?.remove(node);
			if (currentFreqList.isEmpty() && this.#minScore === node.freq) {
				this.#minScore++;
			}
			node.freq++;
			const newFreqList = this.#cacheScore.get(node.freq);
			if (newFreqList != undefined) {
				newFreqList.add(node);
			} else {
				const newList = new MyDoublyLinkedList();
				newList.add(node);
				this.#cacheScore.set(node.freq, newList);
			}
		} else {
			const newList = new MyDoublyLinkedList();
			newList.add(node);
			this.#cacheScore.set(this.#minScore, newList);
		}
	}

	#deleteUnusedValue(): void {
		const list = this.#cacheScore.get(this.#minScore);
		if (!list) return;

		const node = list.removeFirst();
		if (!node) return;

		this.#cache.delete(node.key);
	}
}

/**
Runtime 114ms O(1) / memory 111 mb O(capacity)
 */
