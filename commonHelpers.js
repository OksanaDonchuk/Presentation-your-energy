import"./assets/styles-9015ceb6.js";import{S as o}from"./assets/vendor-c9def49e.js";const p=[{preview:"../img/customer_340.jpg",original:"../img/customer_1280.jpg",description:"Дмитро, розробник"},{preview:"../img/shop_340.jpg",original:"../img/shop_1280.jpg",description:"Спортивний магазин"},{preview:"../img/equipment_340.jpg",original:"../img/equipment_1280.jpg",description:"Спортивний інвентар"},{preview:"../img/help_340.jpg",original:"../img/help_1280.jpg",description:"HELP!!!"}],m=document.querySelector(".customer");function s(i){return i.map(({preview:e,original:r,description:t})=>`<li class="customer_items">
  <a class="customer_link" href="${r}">
    <img
      class="customer_img"
      src="${e}"
      alt="${t}"
    />
  </a>
</li>`).join("")}m.insertAdjacentHTML("afterbegin",s(p));new o(".customer a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
