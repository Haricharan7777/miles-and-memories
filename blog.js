const blogPosts = [
    {
        traveler: "Rohit Shetty",
        state: "Rajasthan",
        place: "Jaipur",
        famousPlaces: "Hawa Mahal, Amer Fort, City Palace, Jantar Mantar",
        experience: "Jaipur, the Pink City, amazed me with its royal palaces and vibrant culture. The intricate architecture of Amer Fort was breathtaking, and a sunset view from Nahargarh Fort was unforgettable.",
        famousFood: "Dal Baati Churma, Laal Maas, Ghewar",
        bestStay: "Rambagh Palace",
        avgCost: "₹3,500 per day",
        image: "https://www.holidify.com/images/bgImages/JAIPUR.jpg"
    },
    {
        traveler: "Neha Verma",
        state: "Goa",
        place: "North Goa",
        famousPlaces: "Baga Beach, Aguada Fort, Anjuna Beach, Chapora Fort",
        experience: "Goa was an incredible escape into tropical paradise. Baga Beach was lively with its shacks, music, and water sports, while Old Goa's churches took me back in time.",
        famousFood: "Prawn Balchão, Goan Fish Curry, Bebinca",
        bestStay: "Taj Fort Aguada Resort",
        avgCost: "₹4,500 per day",
        image: "https://assets.serenity.co.uk/38000-38999/38649/720x480.jpg"
    },
    {
        traveler: "Amit Mehta",
        state: "Himachal Pradesh",
        place: "Manali",
        famousPlaces: "Solang Valley, Rohtang Pass, Hadimba Temple, Old Manali",
        experience: "Manali was a dream come true. Rohtang Pass offered mesmerizing snow views, and the cafes in Old Manali served some of the best Himalayan cuisine.",
        famousFood: "Siddu, Madra, Thukpa",
        bestStay: "Span Resort & Spa",
        avgCost: "₹2,500 per day",
        image: "https://www.holidify.com/images/bgImages/MANALI.jpg"
    },
    {
        traveler: "Priya Iyer",
        state: "Tamil Nadu",
        place: "Ooty",
        famousPlaces: "Ooty Lake, Doddabetta Peak, Tea Gardens, Botanical Garden",
        experience: "The cool breeze, lush green tea plantations, and the charming toy train made my Ooty trip magical. The sunset at Doddabetta Peak was stunning.",
        famousFood: "Filter Coffee, Ooty Varkey, Chicken Chettinad",
        bestStay: "Savoy - IHCL SeleQtions",
        avgCost: "₹3,000 per day",
        image: "https://www.holidify.com/images/bgImages/OOTY.jpg"
    },
    {
        traveler: "Arjun Das",
        state: "Kerala",
        place: "Munnar",
        famousPlaces: "Tea Gardens, Mattupetty Dam, Eravikulam National Park",
        experience: "Munnar’s scenic tea estates and misty mountains were breathtaking. A boat ride in Mattupetty Dam and a wildlife tour in Eravikulam National Park were the highlights.",
        famousFood: "Appam with Stew, Malabar Parotta, Puttu & Kadala Curry",
        bestStay: "The Fog Munnar",
        avgCost: "₹3,200 per day",
        image: "https://www.sotc.in/blog/wp-content/uploads/2023/09/munnar-tea-garden.jpg"
    }
];

const blogContainer = document.getElementById("blog-container");

// Generate blog posts dynamically
blogPosts.forEach(post => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    blogDiv.innerHTML = `
        <img src="${post.image}" alt="${post.place}">
        <h3>${post.place}, ${post.state}</h3>
        <p><b>Traveler:</b> ${post.traveler}</p>
        <p><b>Famous Places:</b> ${post.famousPlaces}</p>
        <p><b>Experience:</b> ${post.experience}</p>
        <p><b>Famous Food:</b> ${post.famousFood}</p>
        <p><b>Best Stay:</b> ${post.bestStay}</p>
        <p><b>Average Cost:</b> ${post.avgCost}</p>
        <p class="author">- ${post.traveler}</p>
    `;
console.log(blogDiv)
    blogContainer.appendChild(blogDiv);
});
