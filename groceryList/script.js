/*
Create a grocery list application where users can add and remove items from a list. The list should be displayed as a bulleted unordered list
*/

    let goods=[];
    let itemList;
    goods.length=prompt("How many items do you need to buy")
    for(i=0;i<goods.length;i++){
        goods[i]=prompt("Enter the product name");
    }
    items()
    function items(){
    itemList="<ul>";
    for(i=0;i<goods.length;i++){
        itemList+="<li>"+goods[i]+"</li>";
    }
    itemList+="<ul>";
     
    document.getElementById("grocery").innerHTML=itemList;
    }
    function addItems(){
     goods.push(prompt("Enter the product name"));
     items();
    }
    function removeItem(){
        var deleteItem=prompt("What item whould you like to delete?");
        for(i=0;i<goods.length;i++){
        if(deleteItem==goods[i]){
            let index=goods.indexOf(goods[i]);
            goods.splice(index,1);
        }

        }
        items();
    }