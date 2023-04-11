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
        img_url: "https://media-cdn.tripadvisor.com/media/photo-s/08/14/af/6d/barbeque-nation.jpg",
        veg: true,

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

        name: "House of Biryani",
        rating: 3.9,
        average_cost: 200,
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
        rating: 4.1,
        average_cost: 200,
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
        rating: 3.8,
        average_cost: 300,
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
        average_cost: 200,
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
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cubytccah7xpfynim7cn",
        veg: false,

    },
    {

        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        rating: 4.6,
        average_cost: 200,
        average_time: 29,
        cuisines: ["Ice Cream", " Desserts"],
        img_url:
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/th3if6gbjtjfo5rd2yyp",
        veg: true,

    },
    {

        name: "SAYHALLO KANCHAN",
        rating: random(),
        average_cost: 249,
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
        rating: 3.6,
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
        average_cost: 300,
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

        name: "The Tandoori Night",
        rating: 3.4,
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

        let name = document.createElement("h3");
        name.textContent = data.name;

        let cusDiv = document.createElement("div");
        cusDiv.textContent = data.cuisines;

        let rating = document.createElement("p");
        rating.textContent = " ★ " + data.rating;

        let avgcast = document.createElement("p");
        avgcast.textContent = " ₹ " + data.average_cost + " FOR TWO";

        let avgtime = document.createElement("p");
        avgtime.textContent = data.average_time + " min";

        let newdiv = document.createElement("div");
        let div = document.createElement("div");


        newdiv.append(image, name, cusDiv, rating, avgtime, avgcast);

        mainDiv.appendChild(newdiv);

    })

}
displayData(northdata);