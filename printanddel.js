var head;
class Node{
    constructor(val){
        this.data=val;
        this.next = null;
    }
}


function deleteNode(position){
    if(head==null)
    return;
    var temp = head;
    if(position==0){
        head=temp.next;
        return;
    }
    for(i=0;temp!=null&&i<position-1;i++)
        temp=temp.next;
      if(temp==null||temp.next==null)
      return;
      var next = temp.next.next;
      temp.next=next;

}
function printList(){
    var tnode = head;
    while(tnode!=null){
        console.log(tnode.data)
        tnode=tnode.next;
    }
}

   var head = new Node(1);
    var second = new Node(2);
    var third = new Node(3);
    var fourth = new Node(4);
    var fifth = new Node(5);
    var sixth = new Node(6);
    var seventh = new Node(7);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    fifth.next = sixth;
    sixth.next = seventh;
    // printList();

    console.log("original List")

printList();

console.log("Print after Deletion")

deleteNode(0);
deleteNode(1);
deleteNode(0);
printList();
