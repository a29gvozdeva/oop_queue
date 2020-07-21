class QueueIterator {
	constructor(queue) {
		this._queue = queue;
		this._start = 0;
	}

	next() {
		if (this._start >= this._queue.size) {
			return {
				value: undefined,
				done: true,
			}
		}
		return {
			value: this._queue[this._start],
			done: this._start++ === this._queue.size,
		}
	}
}

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue (element) {
		this.items.push(element);
		return this.items.length;
	}

	dequeue () {
		return this.items.shift();
	}

	front () {
		return this.items[0];
	}

	get isEmpty () {
		return (this.items.length === 0);
	}


	get size () {
		return this.items.length;
	}

	[Symbol.Iterator] () {
		return new QueueIterator();

	}
}


class QElement {
	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.items = [];
	}

	enqueue(element, priority) {
		const qElement = new QElement(element, priority);
		let contain = false;

		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority > qElement.priority) {
				this.items.splice(i, 0, qElement);
				contain = true;
				break;
			}
		}
		if (!contain) {
			this.items.push(qElement);
		}
		return this.items.length;
	}

	dequeue() {
		if (this.isEmpty)
			return "Underflow";
		return this.items.shift();
		}

	get isEmpty () {
		return (this.items.length === 0);
	}

	front() {
		if (this.isEmpty)
			return "No elements in Queue";
		return this.items[0];
	}

	get size () {
		return this.items.length;
	}
}
