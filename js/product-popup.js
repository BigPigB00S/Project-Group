// Product details data
const productDetails = {
    'Laneige': {
        description: 'Korean skincare brand known for its innovative water-based technology and hydrating products.',
        products: ['Cleansing Gel', 'Cleansing Foam', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 10.00 - USD 18.00',
        image: '../imgs/2. Laneige/2. Laneige/set.jpg'
    },
    'Innisfree': {
        description: 'Natural Korean beauty brand that harnesses the power of organic ingredients from Jeju Island.',
        products: ['Cleansing Oil', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 12.00 - USD 18.00',
        image: '../imgs/3. Innisfree/3. Innisfree/set.jpg'
    },
    'Etude': {
        description: 'Playful Korean beauty brand offering high-quality makeup and skincare at affordable prices.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 14.00 - USD 19.00',
        image: '../imgs/4. Etude/4. Etude/set.jpg'
    },
    'Corsx': {
        description: 'Minimalist skincare brand focused on effective ingredients and simple formulations.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner', 'Essence', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 13.00 - USD 20.00',
        image: '../imgs/5.COSRX/5.COSRX/set.webp'
    },
    'Rice': {
        description: 'Skincare line utilizing the brightening and nourishing properties of rice extracts.',
        products: ['Cleansing Oil', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 11.00 - USD 15.00',
        image: '../imgs/6/6/set.jpg'
    },
    'Sulwhasoo': {
        description: 'Luxury Korean skincare brand combining traditional herbs with modern technology.',
        products: ['Cleansing Oil', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 13.00 - USD 22.00',
        image: '../imgs/1/1/set.jpg'
    },
    'Missha': {
        description: 'Korean beauty brand offering innovative skincare solutions at reasonable prices.',
        products: ['Cleanser', 'Foam Cleanser', 'Ampoule', 'Essence', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 15.00 - USD 27.00',
        image: '../imgs/7/7/set.jpg'
    },
    'IOPE': {
        description: 'High-end Korean skincare brand known for its anti-aging and brightening products.',
        products: ['Cleanser', 'Foam Cleanser', 'Essence', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 15.00 - USD 20.00',
        image: '../imgs/8/8/set.avif'
    },
    'zero': {
        description: 'Innovative skincare brand specializing in effective cleansing and moisturizing products.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner', 'Essence', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 15.00 - USD 25.00',
        image: '../imgs/9/9/set.jpg'
    },
    'Neogen': {
        description: 'Modern skincare brand combining natural ingredients with dermatological science.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner Pads', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 15.00 - USD 22.00',
        image: '../imgs/10/10/set.webp'
    },
    'Ordinary': {
        description: 'Clinical formulations with integrity, focused on single-ingredient solutions.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 13.00 - USD 20.00',
        image: '../imgs/11/11/set.webp'
    },
    'Klavuu': {
        description: 'Marine-based skincare brand utilizing pearl extracts and ocean ingredients.',
        products: ['Cleanser', 'Foam Cleanser', 'Toner', 'Serum', 'Moisturizer', 'Sunscreen'],
        priceRange: 'USD 15.00 - USD 20.00',
        image: '../imgs/12/12/set.jpg'
    },
    'Dior': {
        description: 'Luxury beauty brand offering high-end makeup and skincare products.',
        products: ['Primer', 'Foundation', 'Eyeshadow', 'Mascara', 'Lipstick', 'Powder'],
        priceRange: 'USD 10.00 - USD 18.00',
        image: '../imgs/makeup/dior/set.jpg'
    },
    'Clarins': {
        description: 'Premium skincare and makeup brand using plant-based ingredients.',
        products: ['Primer', 'Foundation', 'Eyeshadow', 'Mascara', 'Lipstick', 'Powder'],
        priceRange: 'USD 10.00 - USD 17.00',
        image: '../imgs/makeup/clarin/set.jpg'
    },
    'YSL': {
        description: 'Luxury fashion house known for its high-end makeup and beauty products.',
        products: ['Primer', 'Foundation', 'Eyeshadow', 'Mascara', 'Lipstick', 'Powder'],
        priceRange: 'USD 10.00 - USD 18.00',
        image: '../imgs/makeup/ysl/set.jpg'
    },
    'Maybeline': {
        description: 'Popular drugstore makeup brand offering quality products at affordable prices.',
        products: ['Primer', 'Foundation', 'Eyeshadow', 'Mascara', 'Lipstick', 'Powder'],
        priceRange: 'USD 10.00 - USD 17.00',
        image: '../imgs/makeup/maybeline/set.jpg'
    }
};

// Add click event listeners to all product cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', showProductPopup);
});

// Function to show product popup
function showProductPopup(event) {
    const card = event.currentTarget;
    const brandName = card.querySelector('.display-5').textContent;
    const details = productDetails[brandName];

    if (!details) return;

    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'product-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;

    // Create popup content
    popup.innerHTML = `
        <div class="popup-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h2 style="margin: 0;">${brandName}</h2>
            <button class="close-popup" style="background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
        </div>
        <div class="popup-content" style="display: flex; gap: 20px;">
            <div class="popup-image" style="flex: 1;">
                <img src="${details.image}" alt="${brandName}" style="width: 100%; border-radius: 5px;">
            </div>
            <div class="popup-details" style="flex: 1;">
                <h4>Description</h4>
                <p>${details.description}</p>
                <h4>Products</h4>
                <ul style="padding-left: 20px;">
                    ${details.products.map(product => `<li>${product}</li>`).join('')}
                </ul>
                <h4>Price Range</h4>
                <p>${details.priceRange}</p>
                <a href="${brandName === 'Dior' || brandName === 'Clarins' || brandName === 'YSL' || brandName === 'Maybeline' ? 'makeup.html' : 'skincare.html'}" 
                   class="btn btn-danger">View All Products</a>
            </div>
        </div>
    `;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    // Add close functionality
    function closePopup() {
        popup.remove();
        overlay.remove();
    }

    overlay.addEventListener('click', closePopup);
    popup.querySelector('.close-popup').addEventListener('click', closePopup);

    // Add to document
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
}

// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.style.cursor = 'pointer';
    card.style.transition = 'transform 0.3s ease';
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
}); 