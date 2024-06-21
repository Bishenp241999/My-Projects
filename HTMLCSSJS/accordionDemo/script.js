// USE OF EVENT DELEGATION 
const parentEl = document.querySelector(".accordion");
parentEl.addEventListener("click", function (e) {
  const clicked = e.target.closest('.item');
  console.log(clicked);

  clicked.classList.toggle('open');
  
});