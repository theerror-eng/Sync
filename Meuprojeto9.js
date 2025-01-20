    let btn=document.querySelector(".menu")
    let nav=document.querySelector("nav")
    let topo=document.querySelector(".topo")
    btn.addEventListener("click",()=>{
 
        nav.classList.toggle("active")
        topo.classList.toggle("active")
    })





let op = document.querySelectorAll(".op");
let opcontent = document.querySelectorAll(".opcontent");

op.forEach((o, indice) => {
  o.addEventListener("click", () => {
    if (!o.classList.contains("active")) {
      op.forEach(outros => {
        outros.classList.remove("active");
      });
      opcontent.forEach(all => {
        all.classList.remove("show");
      });
      o.classList.add("active");
      opcontent[indice].classList.add("show");
    }
  });
});
