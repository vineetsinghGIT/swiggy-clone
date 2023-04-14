const min = 1,
    max = 5;
const random = () => (Math.random() * (max - min) + min).toFixed(1);

const southData = [
    {
        name: "Shree Kunj Restaurant",
        rating: 4.0,
        average_cost: 250,
        average_time: 31,
        cuisines: ["Biryani", " Sweets", " South Indian", " North Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r4rpaumlk63gytmpnsnw",
        veg: true,

    },
    {

        name: "UBQ by Barbeque Nation",
        rating: 3.8,
        average_cost: 800,
        average_time: 40,
        cuisines: [
            "North Indian",
            "South Indian",
            " Biryani",
            " Mughlai",
            " Seafood",
            " Kebabs",
            " Desserts",
        ],
        img_url:
            "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/h/n/p95-16444959626205045ab0b43.jpg?tr=tr:n-large",
        veg: true,

    },
    {

        name: "SPICY STREET KITCHEN 2",
        rating: random(),
        average_cost: 199,
        average_time: 51,
        cuisines: ["Thalis", "North-Indian", "South-Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/olthzs45ypqiklhsjuj6",
        veg: false,

    },
    {

        name: "Wow!Momo",
        rating: 4.4,
        average_cost: 300,
        average_time: 38,
        cuisines: [
            "Tibetian",
            " Healthy Food",
            " Asian",
            " Chinese",
            " Snacks",
            " Continental",
            " Desserts",
            " Beverages",
        ],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zurdhcf2tlomumvcwyue",
        veg: true,

    },
    {

        name: "GOLDEN ORCHID",
        rating: 3.6,
        average_cost: 300,
        average_time: 40,
        cuisines: ["Chinese", " Combo", " North Indian", " South Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jxznfakqwptqhdajfwab",
        veg: true,

    },
    {

        name: "Maggie Point",
        rating: random(),
        average_cost: 150,
        average_time: 34,
        cuisines: ["Snacks", " Fast Food", " Beverages"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mdqstgelcldmfvivhsgr",
        veg: true,

    },
    {

        name: "ANJANAS KITCHEN",
        rating: 4.4,
        average_cost: 200,
        average_time: 33,
        cuisines: ["South Indian", "Sweets"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lnfok0c5kjcogyr1wvlk",
        veg: true,

    },
    {

        name: "OFO FOODS",
        rating: random(),
        average_cost: 400,
        average_time: 35,
        cuisines: ["Chinese", " Biryani", " Indian", " Arabian", " Continental"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r9rem5rfwt1tgnwy6t6v",
        veg: true,

    },

    {

        name: "Hotel Tarini cottage",
        rating: 3.9,
        average_cost: 200,
        average_time: 38,
        cuisines: [
            " North Indian",
            "South Indian",
            " Chinese",
            " Fast Food",
            " Seafood",
            " Thalis",
            " Combo",
        ],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ktzvvqnosehdyxcjtoi7",
        veg: true,

    },
    {

        name: "BIRYANISTIC",
        rating: random(),
        average_cost: 280,
        average_time: 33,
        cuisines: ["Biryani", " Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/w7kzwixqu569q3cpi6nx",
        veg: true,

    },
    {

        name: "M/S Burger Point",
        rating: random(),
        average_cost: 200,
        average_time: 34,
        cuisines: ["Fast Food", " Snacks", " Biryani", " Pastas"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p6qnpfvjjadtuvmyzv6i",
        veg: true,

    },
    {

        name: "The Spice Valley",
        rating: random(),
        average_cost: 400,
        average_time: 45,
        cuisines: ["South Indian", " Chinese", " Mughlai"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yyyz7nekuytdast4a5wa",
        veg: true,

    },
    {

        name: "The Pakwan Restaurant",
        rating: random(),
        average_cost: 200,
        average_time: 33,
        cuisines: ["South Indian", " Chinese", " Biryani"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fnnzqxu07dev7zwvnenk",
        veg: true,

    },
    {

        name: "Shann's Shack",
        rating: random(),
        average_cost: 150,
        average_time: 44,
        cuisines: [
            "South Indian",
            " Indian",
            " Chinese",
            " Snacks",
            " Combo",
            " Beverages",
        ],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ksiwwtcs3zysunny8cki",
        veg: true,

    },
    {

        name: "Subway",
        rating: 4.3,
        average_cost: 350,
        average_time: 41,
        cuisines: ["Healthy Food", " Salads", " Snacks", " Desserts", " Beverages"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sdipu3xigqafezlopx03",
        veg: true,
    },

]

let displayData = (northdata) => {
    let mainDiv = document.getElementById("main-container");
    mainDiv.innerHTML = "";

    northdata.forEach(data => {

        let image = document.createElement("img");
        image.src = data.img_url;
        image.alt = "Image";

        let name = document.createElement("h4");
        name.textContent = data.name;

        let cusDiv = document.createElement("div");
        cusDiv.textContent = data.cuisines;
        cusDiv.classList.add("cush-container")
        cusDiv.style.boxShadow = "none";
        cusDiv.style.border = "none";

        let rating = document.createElement("span");
        rating.textContent = " ★ " + data.rating;
        rating.classList.add("rating-container");
        rating.style.color = "white";
        if (data.rating < 2.5) {
            rating.classList.add("rating-container-org");
        }

        let avgcost = document.createElement("p");
        avgcost.textContent = "•  " + " ₹ " + data.average_cost + " FOR TWO";
        avgcost.classList.add("avgcost-container")

        let avgtime = document.createElement("p");
        avgtime.textContent = "• " + data.average_time + " min";
        avgtime.classList.add("avgtime-container")

        let newdiv = document.createElement("div");
        // let div = document.createElement("div");


        newdiv.append(image, name, cusDiv, rating, avgtime, avgcost);

        mainDiv.appendChild(newdiv);

        newdiv.addEventListener("click", function () {
            nextPage(data);
        })

    })

}
displayData(southData);

let restLocalData = [];
function nextPage(cafeData) {
    restLocalData.push(cafeData);
    localStorage.setItem("restaurant-Data", JSON.stringify(restLocalData));
    window.location = "../html/productdetail.html";
}

let restNum = document.getElementById("rest-number");
restNum.textContent = southData.length + " restaurants";


document.getElementById("btn-rel").addEventListener("click", relevance)

function relevance() {
    document.location.reload();
    restNum.textContent = southData.length + " restaurants";
}

document.getElementById("btn-lowtohigh").addEventListener("click", lowtohigh)

function lowtohigh() {

    let lowtohighArr = southData.sort((a, b) => {
        return parseInt(a.average_cost) - parseInt(b.average_cost);
    })

    displayData(lowtohighArr);
    restNum.textContent = southData.length + " restaurants";
}

document.getElementById("btn-hightolow").addEventListener("click", hightolow)

function hightolow() {

    let hightolowArr = southData.sort((a, b) => {
        return parseInt(b.average_cost) - parseInt(a.average_cost);
    })
    displayData(hightolowArr);
    restNum.textContent = southData.length + " restaurants";
}

document.getElementById("btn-deliverytime").addEventListener("click", deliveryTime)

function deliveryTime() {

    let deliveryArr = southData.sort((a, b) => {
        return parseInt(a.average_time) - parseInt(b.average_time);
    })

    displayData(deliveryArr);
    restNum.textContent = southData.length + " restaurants";
}

document.getElementById("btn-rating").addEventListener("change", ratingFilter)

function ratingFilter() {

    let changeValue = document.getElementById("btn-rating").value;
    if (changeValue == "5-4") {
        let changeArr = southData.filter((ratingdata) => {
            return (ratingdata.rating <= 5 && ratingdata.rating >= 4)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "4-3") {
        let changeArr = southData.filter((ratingdata) => {
            return (ratingdata.rating <= 3.9 && ratingdata.rating >= 3)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "3-2") {
        let changeArr = southData.filter((ratingdata) => {
            return (ratingdata.rating <= 2.9 && ratingdata.rating >= 2)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "2-1") {
        let changeArr = southData.filter((ratingdata) => {
            return (ratingdata.rating <= 1.9 && ratingdata.rating >= 1)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "0-1") {
        let changeArr = southData.filter((ratingdata) => {
            return (ratingdata.rating <= 0.9 && ratingdata.rating >= 0)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "") {
        displayData(southData);
        restNum.textContent = southData.length + " restaurants";
    }


}