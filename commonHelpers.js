import"./assets/styles-4df50263.js";import{S as p}from"./assets/vendor-c9def49e.js";const i=[{preview:"../img/customer_340.jpg",original:"../img/customer_1280.jpg",description:"Це Дмитро. Він девелопер. За два роки роботи 24/7 втратив спортивну форму. І зрозумів: щось треба робити"},{preview:"../img/shop_340.jpg",original:"../img/shop_1280.jpg",description:"Дмитро побіжав до спортивного магазину."},{preview:"../img/equipment_340.jpg",original:"../img/equipment_1280.jpg",description:"Накупив вселякого приладдя. І почав активно займатися"},{preview:"../img/help_340.jpg",original:"../img/help_1280.jpg",description:"Але щось поганенько виходить без професійних підказок. Дмитру потрібна допомога!"}],s=document.querySelector(".customer");function m(e){return e.map(({preview:r,original:t,description:o})=>`<li class="customer_items">
  <a class="customer_link" href="${t}">
    <img
      class="customer_img"
      src="${r}"
      alt="${o}"
    />
  </a>
</li>`).join("")}console.log(i);s.insertAdjacentHTML("afterbegin",m(i));new p(".customer a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
