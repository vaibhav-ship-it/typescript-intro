class Queue<T> {
    private data : T[] = [];

    add(item : T)   {
        this.data.push(item);
    }

    remove()    {
        this.data.shift();
    }
}

let nameQueue = new Queue<string>();
nameQueue.add('Vaibhav');
nameQueue.add('Kumar');

let numberQueue = new Queue<number>();
numberQueue.add(5);
numberQueue.add(10);

