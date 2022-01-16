var head; 
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

 function printList()
{
    var n = head;
    while (n != null) {
        console.log(n.data + " ");
        n = n.next;
    }
}

   var head = new Node(9);
    var second = new Node(8);
    var third = new Node(7);
    var forth = new Node(6);
    var fifth = new Node(5);

    head.next = second;
    second.next = third;
    third.next = forth;
    forth.next = fifth;
    printList();