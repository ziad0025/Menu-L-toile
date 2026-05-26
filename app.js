const menuItems = [
    // --- Appetizers ---
    { category: 'Appetizers', name: 'Creamy Mushroom Soup', ingredients: 'Creamy mushroom soup, fresh herbs, drizzle of truffle oil.', price: '$12.00', image: 'Data use/1 (2).jpg' },
    { category: 'Appetizers', name: 'Burrata Salad', ingredients: 'Fresh burrata cheese, seasonal figs, balsamic glaze, wild arugula.', price: '$15.00', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600' },
    { category: 'Appetizers', name: 'Garlic Butter Shrimp', ingredients: 'Pan-seared shrimp, garlic butter sauce, fresh parsley, lemon.', price: '$18.00', image: 'Data use/3.jpg' },
    
    // --- Main Dishes ---
    { category: 'Main Dishes', name: 'Ribeye Steak', ingredients: 'Premium ribeye steak, creamy mashed potatoes, rich demi-glace.', price: '$32.00', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600' },
    { category: 'Main Dishes', name: 'Truffle Fettuccine', ingredients: 'Fresh fettuccine, wild mushroom sauce, parmesan cheese, truffle oil.', price: '$24.00', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600' },
    { category: 'Main Dishes', name: 'Herb Roasted Chicken', ingredients: 'Tender roasted chicken, seasonal garden vegetables, lemon-herb jus.', price: '$26.00', image: 'Data use/6.jpg' },
    { category: 'Main Dishes', name: 'Pan-Seared Salmon', ingredients: 'Fresh salmon fillet, asparagus spears, lemon-dill cream sauce.', price: '$28.00', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600' },
    
    // --- Desserts & Coffee ---
    { category: 'Desserts', name: 'Chocolate Fondant', ingredients: 'Warm molten chocolate cake, dark chocolate ganache, vanilla ice cream.', price: '$14.00', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600' },
    { category: 'Desserts', name: 'Affogato Special', ingredients: 'Rich espresso shot, creamy vanilla ice cream, toasted roasted nuts.', price: '$9.00', image: 'Data use/9.jpg' }
];


const container = document.getElementById('menu-container');
const buttons = document.querySelectorAll('button[data-category]');


function displayMenu(category = 'All') {
    container.innerHTML = ''; 
    const filtered = category === 'All' ? menuItems : menuItems.filter(item => item.category === category);
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-stone-900/40 rounded-2xl backdrop-blur-sm p-6 border border-stone-800/50 flex flex-col justify-between group";
        card.innerHTML = `
            <div class="overflow-hidden rounded-xl h-64 bg-stone-950" data-aos="zoom-in">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            </div>
            <div class="mt-6 flex flex-col gap-2"data-aos="zoom-in">
                <h3 class="text-xl font-serif font-bold text-white">${item.name}</h3>
                <p class="text-stone-400 text-sm leading-relaxed">${item.ingredients}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-amber-400 font-bold text-lg">${item.price}</span>
                    <button onclick="orderViaWhatsApp('${item.name}', '${item.price}')" 
                            class="text-xs text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full hover:bg-amber-500 hover:text-black transition duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    AOS.refresh(); 
}


function orderViaWhatsApp(dishName, price) {
    const phoneNumber = "01152664718"; 
    const message = `Hello, I would like to order: ${dishName} - Price: ${price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
        buttons.forEach(b => b.classList.remove('bg-amber-500', 'text-black'));
        e.target.classList.add('bg-amber-500', 'text-black');
        
        displayMenu(e.target.getAttribute('data-category'));
    });
});

displayMenu();

AOS.init({
    duration: 2000,
    once: true
});
