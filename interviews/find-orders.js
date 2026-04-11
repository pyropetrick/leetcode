/* Есть два сервиса, которые возвращают список активных заявок на кредит,
отсортированные по возрастанию id , id - сквозное для обоих сервисов
необходимо получить список из k последних заявок на кредит
*/
// O(k)
const getDecisions1 = [
	{ id: 1, result: "approved" },
	{ id: 3, result: "waiting" },
	{ id: 15, result: "approved" },
	{ id: 20, result: "approved" },
	{ id: 26, result: "waiting" },
	{ id: 30, result: "approved" },
];

const getDecisions2 = [
	{ id: 2, result: "approved" },
	{ id: 4, result: "waiting" },
	{ id: 14, result: "approved" },
	{ id: 16, result: "approved" },
	{ id: 23, result: "waiting" },
	{ id: 32, result: "approved" },
];


const getLastDecisions = (arr1, arr2, k) => {
	const finalDecisions = [];
	if (k === 0) {
		return finalDecisions;
	}
	while (k > 0) {
		const firstMark = arr1.length;
		const secondMark = arr2.length;
		const lastIdFirst = arr1[firstMark - 1];
		const lastIdSecond = arr2[secondMark - 1];
		if (lastIdFirst.id > lastIdSecond.id) {
			finalDecisions.push(lastIdFirst);
			arr1.pop()
		} else {
			finalDecisions.push(lastIdSecond);
			arr2.pop()
		}
		k--;
	}

	return finalDecisions;
}

console.log(getLastDecisions(getDecisions1, getDecisions2, 5));