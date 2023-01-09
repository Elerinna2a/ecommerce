// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// search box

// const search = () => {
//   const searchbox = document.getElementById("search-item").value.toUpperCase();
//   const storeitems = document.getElementById("product-list");
//   const product = document.querySelectorAll(".product");
//   const productName = document.getElementsByTagName("h2");

//   for (var i = 0; i < productName.lenght; i++) {
//     let match = product[i].getElementsByTagName("h2")[0];

//     if (match) {
//       let textValue = match.textContent || match.innerHTML;
//       if (textValue.toUpperCase().indexOf(searchbox) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// };
