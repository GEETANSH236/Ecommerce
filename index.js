let bar = document.getElementById("bar");
const nav = document.querySelector(".right ul");
let close = document.getElementById('close')
if (bar) {
    bar.onclick = () => {
        nav.classList.add("active");
    };
}
if (close) {
    close.onclick = () => {
        nav.classList.remove("active");
    }
}
let mainImg = document.getElementById("MainImg");
let products = document.getElementsByClassName("pro");
for (let i = 0; i < products.length; i++) {
  products[i].onclick = () => {
    let img = products[i].querySelector("img");
    if (img) {
      localStorage.setItem("selectedImage", img.src);
    }
    window.location.href = "./product.html";
  };
}

