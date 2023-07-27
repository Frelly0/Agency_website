const menu = [
  {
    id: 1,
    title: "Design",
    img: `<i class="fas fa-server fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
  {
    id: 2,
    title: "Development",
    img: `<i class="fas fa-upload fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
  {
    id: 3,
    title: "SEO",
    img: `<i class="fas fa-laptop-code fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
  {
    id: 4,
    title: "Marketing",
    img: `<i class="fas fa-network-wired fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
  {
    id: 5,
    title: "App Development",
    img: `<i class="fas fa-power-off fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
  {
    id: 6,
    title: "Error Fixing",
    img: `<i class="fas fa-database fa-3x"></i>`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odit ex 
    minima explicabo deserunt facere quis accusantium saepe rem ducimus.`,
  },
];

const service = document.querySelector('.services');
// console.log(service);/

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
});
  
function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
  
      return `
      <div class="service">
      <div class="icon">
          ${item.img}
      </div>
      <h2>${item.title}</h2>
      ${item.desc}
  </div>`;
    });
  displayMenu = displayMenu.join("");
  
  service.innerHTML = displayMenu;
}





const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});
