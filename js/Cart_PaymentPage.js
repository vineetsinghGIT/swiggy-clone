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

    let promoDiv = document.createElement("div");
    promoDiv.setAttribute("id","promoDiv");
    let input = document.createElement("input");
    input.placeholder = "Enter Coupon Code";
    input.setAttribute("id","promoInput");
    let promoBtn = document.createElement("button");
    promoBtn.innerText = "APPLY";
    promoBtn.addEventListener("click",promoValue);

    promoDiv.append(input,promoBtn);

    let billDetails = document.createElement("h4");
    billDetails.textContent = "Bill Details" 

    let itemsTotalDiv = document.createElement("div");
    itemsTotalDiv.setAttribute("class","itemsTotalClass")

    let itemsTotal = document.createElement("p");
    itemsTotal.textContent = "Items Total";

    let itemsTotalNum = document.createElement("p");
    itemsTotalNum.setAttribute("id","itemsTotalNum");
    itemsTotalNum.textContent =  totalPrice.toFixed(2); 

    itemsTotalDiv.append(itemsTotal,itemsTotalNum);

    // ------------------Govt Charges--------------------

    let govtChargesDiv = document.createElement("div");
    govtChargesDiv.setAttribute("class","govtChargesClass");

    let govtCharges = document.createElement("p");
    govtCharges.textContent = "Govt Taxes & Other Charge";

    let govtChargesNum = document.createElement("p");
    govtChargesNum.setAttribute("id","govtChargesNum");
    let aftertax = (18*totalPrice)%100;
    totalBill= aftertax+totalPrice; 

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
     toPayAmmount.setAttribute("id","toPayAmmount");
     toPayAmmount.textContent =  totalBill.toFixed(2); 
    //  console.log(totalPrice);

     toPayDiv.append(toPay,toPayAmmount);

     document.getElementById("cartBox").append(promoDiv, billDetails,itemsTotalDiv,govtChargesDiv,hrline,toPayDiv);
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
            else{
                alert("Wrong CVV");
            }
        }
        else{
            alert("Wrong Expiry Month")
        }
    }
// <<<<<<< HEAD
    else{
        alert("Wrong Card Number")
    }
}

// ----------------------- Address Form----------------// 


document.getElementById("addNewAddress").addEventListener("click",displayAdress);

function displayAdress(){
    document.getElementById("adressDetailForm").style.display= "block";
    document.getElementById("displayAddressDiv").style.display="none";
}


// --------------------- Address Save button -----------------

document.getElementById("addreeSaveBtn").addEventListener("click",addressSaveFun)

let addressArray = JSON.parse(localStorage.getItem("addressLS")) || [];


function addressSaveFun(){

    let houseNo = document.getElementById("house").value;
    let area = document.getElementById("area").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("city").value;

    for(let i=0; i < addressArray.length; i++){
        if(addressArray[i].houseNo == houseNo && addressArray[i].area == area && addressArray[i].landmark == landmark && addressArray[i].city == city){
            return alert("This address already exsists");
        }
    }
    

    let addressObj = {
        houseNo: houseNo,
        area: area,
        landmark: landmark,
        city: city,    
    }

    addressArray.push(addressObj);
    localStorage.setItem("addressLS",JSON.stringify(addressArray));
    document.getElementById("adressDetailForm").style.display= "none";
    document.getElementById("displayAddressDiv").style.display="block";

    // addressArray.map(function(elem){
    //     let diplaySavedAddress = document.createElement("div");
    //     diplaySavedAddress.setAttribute("class","savedAddress")

    //     let firstDiv = document.createElement("div");
    //     let secondDiv = document.createElement("div");

    //     let deliveryAddress = document.createElement("h4");
    //     deliveryAddress.textContent = "Delivery Address";

    //     let fullAddress = document.createElement("p");
    //     fullAddress.textContent = elem.houseNo+" "+elem.area+" "+elem.landmark+" "+elem.city;

    //     let deliverBtn = document.createElement("button");
    //     deliverBtn.textContent = "Deliver Here";

    //     secondDiv.append(deliveryAddress, fullAddress, deliverBtn);

    //     firstDiv.append(secondDiv);
    //     diplaySavedAddress.append(firstDiv);

    //     document.getElementById("displayAddressDiv").append(diplaySavedAddress);
    // })

    houseNo.textContent = "";
    area.textContent = "";
    landmark.textContent = "";
    city.textContent = "";


}

// Promo Input function -----------------------

function promoValue(){
        console.log("Hiii");
    let Promovalue = document.getElementById("promoInput").value;
    let totalvalue;
    let aftertax ;
    if (Promovalue == "YOO10"){
        console.log(totalPrice);
        totalvalue = (totalPrice - totalPrice*10/100).toFixed(2);
        aftertax = ((18*totalvalue)%100).toFixed(2);
        document.getElementById("itemsTotalNum").innerText = totalvalue;
    document.getElementById("govtChargesNum").innerText = aftertax;
    finaltotalPromo = (Math.floor(totalvalue) +Math.floor(aftertax)).toFixed(2);
    document.getElementById("toPayAmmount").innerText = finaltotalPromo;
    document.getElementById("displayAmmount").textContent="  ₹"+ finaltotalPromo;
    }
    else{
        alert("Please Check the Coupon Code");
    }
    // document.getElementById("" 
// >>>>>>> 3a1fa0881cc4b7ac9e7554be0fd4a0e0d8782bba
}