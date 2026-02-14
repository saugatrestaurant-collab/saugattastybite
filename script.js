const menuData = [
    {
        category: "Roasted Items",
        items: [
            { name: "Chicken Roasted", price: "Full 280/- | Half 150/-", desc: "Perfectly roasted chicken with special spices." },
            { name: "Chicken Tikka", price: "Full 140/- | Half 70/-", desc: "Boneless chicken marinated in spices and yogurt." },
            { name: "Chicken Barra Leg", price: "Full 330/- | Half 170/-", desc: "Spicy and tangy chicken leg roast." },
            { name: "Chicken Roasted Creamy", price: "Full 320/- | Half 170/-", desc: "Rich and creamy roasted chicken." }
        ]
    },
    {
        category: "Chicken Curry Items",
        items: [
            { name: "Butter Chicken", price: "Full 450/- | Half 230/- | Qtr 120/-", desc: "Classic creamy tomato-based curry." },
            { name: "Chicken Masala", price: "Full 450/- | Half 230/- | Qtr 120/-", desc: "Spiced chicken curry with thick gravy." },
            { name: "Kadhai Chicken", price: "Full 470/- | Half 240/- | Qtr 130/-", desc: "Chicken cooked with bell peppers and fresh spices." },
            { name: "Chicken Angara", price: "Full 490/- | Half 260/- | Qtr 150/-", desc: "Smoky flavored spicy chicken curry." },
            { name: "Changezi Chicken", price: "Full 490/- | Half 260/- | Qtr 150/-", desc: "Rich and tangy Mughal style chicken." },
            { name: "Chicken Korma", price: "Full 450/- | Half 230/- | Qtr 120/-", desc: "Mild and creamy chicken curry." }
        ]
    },
    {
        category: "Mutton Curry",
        items: [
            { name: "Mutton Korma", price: "Full 550/- | Half 280/- | Qtr 150/-", desc: "Slow-cooked mutton in a rich yogurt gravy." },
            { name: "Mutton Do Pyaza", price: "Full 580/- | Half 300/- | Qtr 160/-", desc: "Mutton cooked with plenty of onions." },
            { name: "Mutton Kadhai", price: "Full 580/- | Half 300/- | Qtr 160/-", desc: "Spicy mutton cooked in a wok." }
        ]
    },
    {
        category: "Chicken Biryani",
        items: [
            { name: "Chicken Biryani", price: "Full 130/- | Half 70/-", desc: "Aromatic basmati rice with spiced chicken." },
            { name: "Extra Pieces", price: "25/- per pc", desc: "Add more chicken to your meal." }
        ]
    },
    {
        category: "Fish Curry",
        items: [
            { name: "Fish Curry", price: "120/- (2 pc) | 65/- (1 pc)", desc: "Traditional style fish curry." },
            { name: "Fish Fry", price: "120/- (4 pc) | 60/- (2 pc)", desc: "Crispy fried fish marinated in spices." }
        ]
    },
    {
        category: "Egg Curry",
        items: [
            { name: "Egg Curry", price: "Full 100/- | Half 50/-", desc: "Hard-boiled eggs in spicy gravy." }
        ]
    },
    {
        category: "Paneer Items",
        items: [
            { name: "Mutter Paneer", price: "120/-", desc: "Paneer and peas in a tomato based sauce." },
            { name: "Sahi Paneer", price: "120/-", desc: "Royal creamy paneer curry." },
            { name: "Kadhai Paneer", price: "120/-", desc: "Paneer cooked with bell peppers and spices." }
        ]
    },
    {
        category: "Kabab Paratha",
        items: [
            { name: "Mutton Kabab", price: "30/- (1 pc) | 50/- (2 pc)", desc: "Minced mutton patties fried to perfection." },
            { name: "Paratha Fry", price: "15/- (1 pc) | 30/- (2 pc)", desc: "Crispy layered flatbread." },
            { name: "Mutton Roll", price: "50/-", desc: "Spicy mutton kabab wrapped in paratha." }
        ]
    },
    {
        category: "Roti & Naan",
        items: [
            { name: "Tandoori Roti", price: "8/-", desc: "Clay oven baked flatbread." },
            { name: "Butter Roti", price: "10/-", desc: "Tandoori roti topped with butter." },
            { name: "Butter Naan", price: "20/-", desc: "Soft leavened bread with butter." },
            { name: "Butter Laccha Naan", price: "15/-", desc: "Layered naan with butter." },
            { name: "Rumali Roti", price: "10/-", desc: "Thin soft handkerchief bread." }
        ]
    },
    {
        category: "Rice",
        items: [
            { name: "Plain Rice", price: "Full 80/- | Half 40/- | Qtr 25/-", desc: "Steamed basmati rice." },
            { name: "Jeera Rice", price: "Full 90/- | Half 45/- | Qtr 30/-", desc: "Rice flavored with cumin seeds." },
            { name: "Butter Jeera Rice", price: "Full 120/- | Half 60/- | Qtr 40/-", desc: "Rice with butter and cumin seeds." }
        ]
    }
];

// Cart State
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuContainer = document.getElementById('menu-container');
    const menuTabsContainer = document.querySelector('.menu-tabs');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // 1. Render Menu Categories (Tabs)
    menuData.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.classList.add('menu-tab');
        if (index === 0) btn.classList.add('active');
        btn.textContent = category.category;
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            document.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
            // Add active class to clicked tab
            btn.classList.add('active');
            // Render items for this category
            renderMenuItems(category.items);
        });
        menuTabsContainer.appendChild(btn);
    });

    // 2. Render Menu Items function
    function renderMenuItems(items) {
        menuContainer.innerHTML = ''; // Clear current items
        menuContainer.style.opacity = '0';

        setTimeout(() => {
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item', 'glass-panel');
                itemDiv.innerHTML = `
                    <div class="menu-item-header">
                        <h4 class="menu-item-name">${item.name}</h4>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-desc">${item.desc}</p>
                    <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">
                        Add to Cart <i class="fas fa-plus"></i>
                    </button>
                `;

                // Add event listener to the new button
                const addBtn = itemDiv.querySelector('.add-to-cart-btn');
                addBtn.addEventListener('click', () => {
                    addToCart(item);
                    // Animation feedback
                    addBtn.innerHTML = 'Added <i class="fas fa-check"></i>';
                    addBtn.style.background = 'var(--primary-color)';
                    addBtn.style.color = '#000';
                    setTimeout(() => {
                        addBtn.innerHTML = 'Add to Cart <i class="fas fa-plus"></i>';
                        addBtn.style.background = 'transparent';
                        addBtn.style.color = 'var(--primary-color)';
                    }, 1500);
                });

                menuContainer.appendChild(itemDiv);
            });
            menuContainer.style.opacity = '1';
        }, 200);
        menuContainer.style.transition = 'opacity 0.3s ease';
    }

    // Initial Render
    if (menuData.length > 0) {
        renderMenuItems(menuData[0].items);
    }

    // 3. Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed navbar
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 5. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // 6. Cart Logic
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-price');
    const cartCountElement = document.getElementById('cart-count');

    // Toggle Cart
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
    }

    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart();
    });

    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Add Item to Cart
    function addToCart(item) {
        // Parse price to get number
        let priceStr = item.price;
        // Handle multiple price options - take the first one (Full price) for simplicity or logic improvement later
        // Example: "Full 280/- | Half 150/-" -> 280
        // Example: "120/- (2 pc)" -> 120
        let price = parseInt(priceStr.match(/\d+/)[0]);

        const existingItem = cart.find(cartItem => cartItem.name === item.name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: item.name,
                price: price,
                originalPriceStr: item.price,
                quantity: 1
            });
        }

        updateCartUI();
    }

    // Remove Item from Cart
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Increase Quantity
    window.increaseQty = function (index) {
        cart[index].quantity++;
        updateCartUI();
    };

    // Decrease Quantity
    window.decreaseQty = function (index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCartUI();
    };

    // Update Cart UI
    function updateCartUI() {
        // Update Count
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalCount;

        // Update Items List
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                totalAmount += item.price * item.quantity;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="cart-qty-btn" onclick="decreaseQty(${index})"><i class="fas fa-minus"></i></button>
                        <span>${item.quantity}</span>
                        <button class="cart-qty-btn" onclick="increaseQty(${index})"><i class="fas fa-plus"></i></button>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        // Update Total
        cartTotalElement.textContent = '₹' + totalAmount;
    }
});
