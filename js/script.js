const tabsBtns = document.querySelectorAll(".tabs__btns-item");
const tabsContentItems = document.querySelectorAll(".tabs__content-item");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tabTarget = e.currentTarget;
    const activeContent = tabTarget.dataset.btn; // data-btn="content-1"

    tabsBtns.forEach((item) => {
      item.classList.remove("tabs__btns-item_active");
    });

    tabTarget.classList.add("tabs__btns-item_active");

    tabsContentItems.forEach((content) => {
      content.classList.remove("tabs__content-item_active");
    });

    document
      .querySelector(`#${activeContent}`)
      .classList.add("tabs__content-item_active");
  });
});

const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  console.log(1);
  menuList.classList.toggle("menu__list_active");
  document.body.classList.toggle("no-scroll");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
