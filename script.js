function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

const revealItems = document.querySelectorAll(".section, .hero-card, .hero-text");

revealItems.forEach((item) => item.classList.add("reveal"));

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda sudah terkirim ke ReWear Studio.");
});

let cart = [];

function toggleCart(){

document.getElementById("cartSidebar").classList.toggle("open");

}

function addToCart(name,price){

cart.push({
name,
price
});

updateCart();

}

function updateCart(){

const container=document.getElementById("cartItems");

const total=document.getElementById("cartTotal");

const count=document.getElementById("cartCount");

container.innerHTML="";

let totalHarga=0;

cart.forEach((item,index)=>{

totalHarga+=item.price;

container.innerHTML+=`

<div class="cart-item">

<div>

<strong>${item.name}</strong>

<br>

Rp${item.price.toLocaleString('id-ID')}

</div>

<button onclick="removeItem(${index})">

❌

</button>

</div>

`;

});

if(cart.length===0){

container.innerHTML="<p class='empty-cart'>Keranjang masih kosong.</p>";

}

count.innerHTML=cart.length;

total.innerHTML="Rp"+totalHarga.toLocaleString('id-ID');

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}
