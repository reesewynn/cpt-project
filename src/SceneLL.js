class Node {
    constructor(data) {
        this.scene = data;
        this.next = null;
    }

    setNext(upNext) {
        this.next = upNext;
    }

    getNext() {
        return this.next;
    }
}

class SceneLL {
    constructor(data) {
        this.head = null;
        this.tail = null;
    }

    pushNext(upNext) {
        if(this.head == null) {
            this.head = new Node(upNext);
        }
        else {
            let x = new Node(upNext);
            x.setNext(this.head.getNext());
            this.head.setNext(x);
        }
    }

    pushLast(upNext) {
        if(this.head == null) {
            this.head = new Node(upNext);
        }
        else {
            let x = new Node(upNext);
            if(this.tail == null) {
                this.tail = this.head;
            }
            this.tail.setNext(x);
            this.tail = x;
        }
    }

    pop() {
        if(this.head != null) {
            let x = this.head;
            this.head = this.head.getNext();
            if(this.head == null) {
                this.tail = null;
            }
            return x;
        }
        else {
            return null;
        }
    }

    getText() {
        if (this.head != null) {
            return this.head.scene.text;
        }
        else {
            return "";
        }
    }

    getBtns() {
        if (this.head != null) {
            return this.head.scene.btns;
        }
        else {
            return [];
        }
    }
}

export default SceneLL;