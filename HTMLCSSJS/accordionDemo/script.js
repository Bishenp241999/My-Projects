// // USE OF EVENT DELEGATION 
// const container = document.querySelector(".accordion");
// container.addEventListener("click", function (e) {
//   const clicked = e.target.closest('.item').querySelector('.hidden-box');
//   console.log(clicked);
// });

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click',function(e){
    const item = icon.parentNode;
    item.classList.toggle('open')
    console.log(item);
  })
})