import SingleLinkedList from "./SingleLinkedList";

export default class Queue<T = any> {
  private readonly list: SingleLinkedList<T>;

  constructor() {
    this.list = new SingleLinkedList();
  }

  enqueue(value: T): void {
    return this.list.addLast(value);
  }

  dequeue(): T | null {
    return this.list.removeFirst();
  }

  peek(): T | null {
    return this.list.peek();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size;
  }

  print(): void {
    return this.list.print();
  }

  clear(): void {
    this.list.clear();
  }
}
