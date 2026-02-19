class LRUCache {
	#cache = new Map<number, number>();
	#capacity: number = 0;

	constructor(capacity: number) {
		this.#capacity = capacity;
	}

	get(key: number): number {
		const value = this.#cache.get(key);
		if (value != undefined) {
			this.#updateCacheTimeline(key, value!);
			return value!;
		}
		return -1;
	}

	put(key: number, value: number): void {
		if (this.#capacity === 0) return;
		if (this.#cache.has(key)) {
			this.#updateCacheTimeline(key, value);
			return;
		}
		if (this.#cache.size === this.#capacity) {
			this.#deleteUnusedValue();
		}
		this.#cache.set(key, value);
	}

	#updateCacheTimeline(key: number, value: number): void {
		this.#cache.delete(key);
		this.#cache.set(key, value);
	}

	#deleteUnusedValue(): void {
		const oldestKey = this.#cache.keys().next().value;
		this.#cache.delete(oldestKey!);
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//**   96 ms / 108 mb */
