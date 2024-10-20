



let cart = [];

function addToCart(productName, productPrice, productSize) {
    cart.push({ name: productName, price: productPrice, size: productSize });
    updateCartTotal();
    showConfirmationMessage(`${productName} (Taille: ${productSize}) ajouté au panier`);
}

function updateCartTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('cart-total').textContent = `${total} FCFA`;
    document.getElementById('cart-total-modal').textContent = `${total} FCFA`;
    updateCartItems();
}

function updateCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.size} - ${item.price} FCFA`;
        cartItemsList.appendChild(listItem);
    });
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}



function validateOrder() {
    let message = "Voici ce que j'ai commandé:\n";
    cart.forEach(item => {
        message += `${item.name} (Taille: ${item.size}) - ${item.price} FCFA.\n`; 
    });
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    message += `Total: ${total} FCFA`;

    const whatsappUrl = `https://wa.me/2250565337956?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); 
}


function openOrderForm() {
    const modal = document.getElementById('order-form-modal');
    modal.style.display = 'flex'; 
}



function toggleOrderForm() {
    const modal = document.getElementById('order-form-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none'; 
    } else {
        modal.style.display = 'flex'; 
    }
}

function showConfirmationMessage(message) {
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = message;
    confirmationMessage.style.display = 'block';
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
    }, 2000);
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');

    // Masquer toutes les images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Retirer la classe "active" de tous les points
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Afficher l'image actuelle et activer le point correspondant
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    // Changer automatiquement toutes les 3 secondes
    setTimeout(showSlides, 5000); // 3000ms = 3s
}
