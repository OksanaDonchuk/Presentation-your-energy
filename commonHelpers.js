import"./assets/styles-4df50263.js";import{S as n}from"./assets/vendor-c9def49e.js";const o="/Presentation-your-energy/assets/customer_340-c5104b93.jpg",a="/Presentation-your-energy/assets/customer_1280-776e3c55.jpg",c="/Presentation-your-energy/assets/shop_340-67e7963e.jpg",l="/Presentation-your-energy/assets/shop_1280-76c0aa30.jpg",p="/Presentation-your-energy/assets/equipment_340-eace790b.jpg",g="/Presentation-your-energy/assets/equipment_1280-0e6ba9d9.jpg",u="/Presentation-your-energy/assets/help_340-08d0fe53.jpg",m="/Presentation-your-energy/assets/help_1280-fcc8dc8e.jpg",e=[{preview:o,original:a,description:"Це Дмитро. Він девелопер. За два роки роботи 24/7 втратив спортивну форму. І зрозумів: щось треба робити"},{preview:c,original:l,description:"Дмитро побіжав до спортивного магазину"},{preview:p,original:g,description:"Накупив вселякого приладдя. І почав активно займатися"},{preview:u,original:m,description:"Але щось поганенько виходить без професійних підказок. Дмитру потрібна допомога!"}],y=document.querySelector(".customer");function P(r){return r.map(({preview:s,original:t,description:i})=>`<li class="customer_items">
  <a class="customer_link" href="${t}">
    <img
      class="customer_img"
      src="${s}"
      alt="${i}"
    />
  </a>
</li>`).join("")}console.log(e);y.insertAdjacentHTML("afterbegin",P(e));new n(".customer a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
