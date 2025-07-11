class Node{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null;

    }
}

class linkedListDb{
    constructor(){
        this.head=null;
    }

    insert(key,value){
        const node=new Node(key,value);
        node.next=this.head;
        this.head=node;
    }

    get(key){
        let cur=this.head;
        while(cur){
            if(cur.key==key) return cur.value;
            cur=cur.next;
        }
        return null;
    }

    update(key,newValue){
        let cur=this.head;
        while(cur){
            if(cur.key==key) {
                cur.value=newValue;
            return true;
            }
            cur=cur.next;
        }
        return false;
    }

    delete(key) {
    if (!this.head) return false;

    if (this.head.key == key) {
        this.head = this.head.next;
        return true;
    }

    let prev = this.head;
    let cur = this.head.next;

    while (cur) {
        if (cur.key == key) {
            prev.next = cur.next;
            return true;
        }
        prev = cur;
        cur = cur.next;
    }

    return false;
}


    printAll(){
        let cur=this.head;
        const result=[];
        while(cur){
            result.push({key:cur.key,value:cur.value});
            cur=cur.next;
        }
        return result;
    }

}

module.exports= linkedListDb;
