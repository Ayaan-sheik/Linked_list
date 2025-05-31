class Node {
    
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    prepend(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        
    }

    toString() {
        let current = this.head;
        let result = "";
        
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        return result;
    }

    size(){
        let current = this.head;
        let size = 0;
        while(current){
            current = current.next;
            size++;
        }
        console.log(size);
    }

    Head(){
        console.log("The head of this linked list is " + this.head.data);
    }

    Tail(){
        console.log("The tail of this linked list is " + this.tail.data);
    }

    at(index){
        let currentIndex = 0;
        let current = this.head;
        while(currentIndex != index){
            current = current.next;
            currentIndex++;
        }

        console.log("The node at index " + index + " is " + current.data);
    }

    pop(){
        if (!this.head) {
            return console.log(null); // List is empty
        }
        if (this.head === this.tail) {
            const data = this.head.data;
            this.head = null;
            this.tail = null;
            return console.log(data);
        }

        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        const data = this.tail.data;
        current.next = null;
        this.tail = current;
        return console.log(data);
    }

    contains(value){
        let current = this.head;

        while(current){
            if(current.data == value){
                return console.log("!!! " + value +" is Found !!!");
            }
            
            current = current.next;
        }

        console.log(value +" not in Linked List")
    }

    find(value){
        let currentIndex = 0;
        let current = this.head;

        while(current){
            if(current.data == value){
                return currentIndex;
            }
            
            current = current.next;
            currentIndex++;
        }

        return null;
    }
}

/*const list = new LinkedList();
list.append(10);
list.append(5);
list.append(15);
list.prepend(0);
list.prepend(-5);
list.size();
list.Head();
list.Tail();  
list.at(2);

list.toString();

list.pop();
list.toString();

list.contains(5);
list.contains(2);
console.log(list.find(2));

*/

export {Node,LinkedList}
