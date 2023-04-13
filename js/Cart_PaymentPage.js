// let disAdd = document.getElementById("displayAddress");
let totalPrice;

let dataArray = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayCartItems(){
    totalPrice = 0;
    document.getElementById("cartBox").textContent = "";

    dataArray.map(function(elem,index){
     let name = document.createElement("p");
     name.textContent = elem.name;

     let quantitydiv = document.createElement("div");
     quantitydiv.setAttribute("class","quantiyDiv")

     let minusbtn = document.createElement("button");
     minusbtn.textContent= "-";

     minusbtn.addEventListener("click", function(){
        minusbtnFun(elem.i,index);
     }) 

     let quntityNum = document.createElement("p");
     quntityNum.textContent = elem.i;

     let addbtn = document.createElement("button");
     addbtn.textContent="+";

     addbtn.addEventListener("click",function(){
        addbtnFun(elem.i,index);
     })

     quantitydiv.append(minusbtn,quntityNum,addbtn );

     let price = document.createElement("p");
     price.textContent = "₹"+(elem.price*elem.i).toFixed(2);

     totalPrice=totalPrice+(elem.price*elem.i);

     let itemDisplayDiv = document.createElement("div");
     document.getElementById("cartBox").append(name,quantitydiv,price)

    //  document.getElementById("cartBox").append(itemDisplayDiv) ;
    })


    let toPayDiv = document.createElement("div");

     let toPay = document.createElement("h3");
     toPay.textContent="To Pay"
    
     let toPayAmmount = document.createElement("p");
     toPayAmmount.textContent = totalPrice.toFixed(2); 
     console.log(totalPrice);

     toPayDiv.append(toPay,toPayAmmount);

     document.getElementById("cartBox").append(toPayDiv);
}



displayCartItems();


function minusbtnFun(item,index){
    if(item>1){
        item--;
        dataArray[index].i=item;
    }
    else{
        dataArray.splice(index,1);
    }
    console.log("Yes")
    localStorage.setItem("cartItems",JSON.stringify(dataArray));
    displayCartItems();
}

function addbtnFun(item,index){
    console.log("No")
    item++;
    dataArray[index].i=item;
    localStorage.setItem("cartItems",JSON.stringify(dataArray));
    displayCartItems();
}