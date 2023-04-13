// let disAdd = document.getElementById("displayAddress");
let totalPrice;
let totalBill;

let dataArray = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayCartItems(){
    totalPrice = 0;
    document.getElementById("cartBox").textContent = "";

    dataArray.map(function(elem,index){
    
        let buyedItems = document.createElement("div");
        buyedItems.setAttribute("class","buyedItems")
    
        let name = document.createElement("p");
        name.textContent = elem.name;
        name.setAttribute("class","buyedItemsNames")

        let quantitydiv = document.createElement("div");
        quantitydiv.setAttribute("class","quantiyDiv")

        let minusbtn = document.createElement("button");
        minusbtn.textContent= "-";

        minusbtn.addEventListener("click", function(){
            minusbtnFun(elem.i,index);
        }) 

        let quntityNum = document.createElement("p");
        quntityNum.textContent = elem.i;
        quntityNum.setAttribute("class","itemsQuantity")

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
        buyedItems.append(name,quantitydiv,price)
        document.getElementById("cartBox").append(buyedItems);

    //  document.getElementById("cartBox").append(itemDisplayDiv) ;
    })

    // ------------------bill details -------------------

    let billDetails = document.createElement("h4");
    billDetails.textContent = "Bill Details" 

    let itemsTotalDiv = document.createElement("div");
    itemsTotalDiv.setAttribute("class","itemsTotalClass")

    let itemsTotal = document.createElement("p");
    itemsTotal.textContent = "Items Total";

    let itemsTotalNum = document.createElement("p");
    itemsTotalNum.textContent =  totalPrice.toFixed(2); 

    itemsTotalDiv.append(itemsTotal,itemsTotalNum);

    // ------------------Govt Charges--------------------

    let govtChargesDiv = document.createElement("div");
    govtChargesDiv.setAttribute("class","govtChargesClass");

    let govtCharges = document.createElement("p");
    govtCharges.textContent = "Govt Taxes & Other Charge";

    let govtChargesNum = document.createElement("p");
    let aftertax = (18*totalPrice)%100;
    totalBill= aftertax+totalPrice  ; 

    govtChargesNum.textContent =aftertax.toFixed(2);
    govtChargesDiv.append(govtCharges,govtChargesNum);

    // ---------------------------------------------------

    let hrline = document.createElement("hr");
    hrline.setAttribute("class","hrclass")

    let toPayDiv = document.createElement("div");
    toPayDiv.setAttribute("class","toPayClass")

     let toPay = document.createElement("h3");
     toPay.textContent="To Pay";
    
     let toPayAmmount = document.createElement("h3");
     toPayAmmount.textContent =  totalBill.toFixed(2); 
    //  console.log(totalPrice);

     toPayDiv.append(toPay,toPayAmmount);

     document.getElementById("cartBox").append(billDetails,itemsTotalDiv,govtChargesDiv,hrline,toPayDiv);
     document.getElementById("displayAmmount").textContent="  ₹"+ totalBill.toFixed(2);
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
    localStorage.setItem("cartItems",JSON.stringify(dataArray));
    displayCartItems();
}

function addbtnFun(item,index){
    item++;
    dataArray[index].i=item;
    localStorage.setItem("cartItems",JSON.stringify(dataArray));
    displayCartItems();
}



// -------------Card Information taking -----------------

document.getElementById("payBtn").addEventListener("click",cardDetailsFun)

function cardDetailsFun(){
    let cardNum = document.getElementById("card_number").value;
    let validThrough = document.getElementById("mmyy").value;
    let cvv = document.getElementById("cvv").value;
    console.log(cardNum)


    if(cardNum == 1234123412341234){
        console.log(cardNum)
        if(validThrough == "05/23"){
            if(cvv == 123){
                console.log("Bank Account Verified")
            }
        }
    }
}