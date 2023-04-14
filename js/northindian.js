const min = 1,
    max = 5;
const random = () => (Math.random() * (max - min) + min).toFixed(1);

const northdata = [
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
        img_url: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/h/n/p95-16444959626205045ab0b43.jpg?tr=tr:n-large",
        veg: true,

    },
    {

        name: "Wow!Momo",
        rating: 4.4,
        average_cost: 340,
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

        name: "House of Biryani",
        rating: 3.9,
        average_cost: 250,
        average_time: 26,
        cuisines: ["Indian", " Chinese"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z3gvpb8x9yqdeg9eqnrq",
        veg: false,
    },
    {

        name: "Chapan Bhog",
        rating: 4.4,
        average_cost: 150,
        average_time: 27,
        cuisines: ["Sweets", " Indian", " Desserts"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x6x1srh1d4mlnyppoyvw",
        veg: true,
    },
    {

        name: "KFC",
        rating: 4.0,
        average_cost: 400,
        average_time: 30,
        cuisines: [" Snacks", " Biryani"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ybzcozzgs8ygvvnyvtss",
        veg: false,

    },
    {

        name: "DHABA",
        rating: random(),
        average_cost: 280,
        average_time: 40,
        cuisines: ["Fast-Food", "Tandoor"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kavg1wqcleu6on4ocyjj",
        veg: false,

    },
    {

        name: "BREW EXPRESZ",
        rating: 4.0,
        average_cost: 300,
        average_time: 30,
        cuisines: ["Pizzas", " Pastas", " Beverages"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/havcrzaqwr95js0pukgg",
        veg: true,

    },
    {

        name: "DALCHA BIRYANI",
        rating: random(),
        average_cost: 370,
        average_time: 42,
        cuisines: ["Biryani", " Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/au3vo79n0hnizr99vooo",
        veg: false,

    },
    {

        name: "BIRYANIWALA",
        rating: 4.0,
        average_cost: 249,
        average_time: 49,
        cuisines: ["Biryani"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ln09qpbv5knurxoioxoi",
        veg: false,
    },
    {

        name: "SECRET KITCHEN",
        rating: random(),
        average_cost: 310,
        average_time: 57,
        cuisines: ["Indian", " Chinese", " Tandoor"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hcsq6eq3wyik9rdjpbsf",
        veg: true,

    },
    {

        name: "SPICY STREET KITCHEN 2",
        rating: random(),
        average_cost: 199,
        average_time: 51,
        cuisines: ["Thalis", "North-Indian", "South Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/olthzs45ypqiklhsjuj6",
        veg: false,

    },
    {

        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        rating: 4.6,
        average_cost: 370,
        average_time: 29,
        cuisines: ["Ice Cream", " Desserts"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/th3if6gbjtjfo5rd2yyp",
        veg: true,

    },
    {

        name: "SAYHALLO KANCHAN",
        rating: random(),
        average_cost: 600,
        average_time: 44,
        cuisines: ["North Indian", " Chinese", " Biryani"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ewimu4t8ze5iw1axtxuq",
        veg: false,

    },
    {

        name: "The Gourmet By Swosti Premium",
        rating: random(),
        average_cost: 900,
        average_time: 35,
        cuisines: ["Chinese", " Biryani", " Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ffywbirr8dspkxsik6e4",
        veg: false,

    },
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

        name: "GOLDEN ORCHID",
        rating: random(),
        average_cost: 300,
        average_time: 40,
        cuisines: ["Chinese", " Combo", " North Indian", " South Indian"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jxznfakqwptqhdajfwab",
        veg: true,

    },
    {

        name: "Afiya Delight The Restaurant",
        rating: 3.6,
        average_cost: 480,
        average_time: 35,
        cuisines: ["Indian", " Chinese", " Tandoor"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/be3tlqcpiydcdenul5aw",
        veg: true,

    },
    {

        name: "Eat street jaydev vihar",
        rating: 3.8,
        average_cost: 300,
        average_time: 35,
        cuisines: ["Biryani", " Chinese", " Indian", " Tandoor"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dlgp9ahpetxfz314lqas",
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

        name: "SRI RADHE RADHE PURE VEG RESTAURANT",
        rating: random(),
        average_cost: 300,
        average_time: 39,
        cuisines: ["North Indian", " Chinese", " Snacks"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tdqph29hdvphaggtmtsl",
        veg: true,

    },
    {

        name: "OFO FOODS",
        rating: random(),
        average_cost: 430,
        average_time: 35,
        cuisines: ["Chinese", " Biryani", " Indian", " Arabian", " Continental"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/r9rem5rfwt1tgnwy6t6v",
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

        name: "The Tandoori Night",
        rating: random(),
        average_cost: 200,
        average_time: 35,
        cuisines: ["North Indian", " Chinese", " Tandoor"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ahzkdl6y5omda4f0qngv",
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

        newdiv.append(image, name, cusDiv, rating, avgtime, avgcost);

        mainDiv.appendChild(newdiv);

        newdiv.addEventListener("click", function () {
            nextPage(data);
        })

    })

}
displayData(northdata);

let restLocalData = [];
function nextPage(cafeData) {
    restLocalData.push(cafeData);
    localStorage.setItem("restaurant-Data", JSON.stringify(restLocalData));
    window.location = "../html/southindian.html";
}


let restNum = document.getElementById("rest-number");
restNum.textContent = northdata.length + " restaurants";

document.getElementById("btn-rel").addEventListener("click", relevance)

function relevance() {

    document.location.reload();
    restNum.textContent = northdata.length + " restaurants";
}

document.getElementById("btn-lowtohigh").addEventListener("click", lowtohigh)

function lowtohigh() {

    let lowtohighArr = northdata.sort((a, b) => {
        return parseInt(a.average_cost) - parseInt(b.average_cost);
    })

    displayData(lowtohighArr);
    restNum.textContent = northdata.length + " restaurants";
}

document.getElementById("btn-hightolow").addEventListener("click", hightolow)

function hightolow() {

    let hightolowArr = northdata.sort((a, b) => {
        return parseInt(b.average_cost) - parseInt(a.average_cost);
    })
    displayData(hightolowArr);
    restNum.textContent = northdata.length + " restaurants";
}

document.getElementById("btn-deliverytime").addEventListener("click", deliveryTime)

function deliveryTime() {

    let deliveryArr = northdata.sort((a, b) => {
        return parseInt(a.average_time) - parseInt(b.average_time);
    })

    displayData(deliveryArr);
    restNum.textContent = northdata.length + " restaurants";
}

document.getElementById("btn-rating").addEventListener("change", ratingFilter)

function ratingFilter() {
    let changeValue = document.getElementById("btn-rating").value;
    if (changeValue == "5-4") {
        let changeArr = northdata.filter((ratingdata) => {
            return (ratingdata.rating <= 5 && ratingdata.rating >= 4)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "4-3") {
        let changeArr = northdata.filter((ratingdata) => {
            return (ratingdata.rating <= 3.9 && ratingdata.rating >= 3)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "3-2") {
        let changeArr = northdata.filter((ratingdata) => {
            return (ratingdata.rating <= 2.9 && ratingdata.rating >= 2)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "2-1") {
        let changeArr = northdata.filter((ratingdata) => {
            return (ratingdata.rating <= 1.9 && ratingdata.rating >= 1)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "0-1") {
        let changeArr = northdata.filter((ratingdata) => {
            return (ratingdata.rating <= 0.9 && ratingdata.rating >= 0)
        })
        displayData(changeArr);
        restNum.textContent = changeArr.length + " restaurants";
    }
    if (changeValue == "") {
        displayData(northdata);
        restNum.textContent = northdata.length + " restaurants";
    }

}
