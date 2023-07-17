const listItem = document.querySelectorAll(".header .list .item");

listItem.forEach((item) => {
    item.addEventListener("click", function () {
        const itemActive = document.querySelector(".header .list .item.active");
        itemActive.classList.remove("active");
        item.classList.add("active");
    });
});

const btnMenu = document.querySelector(".header .mobile");
const sectionHeader = document.querySelector(".header");

btnMenu.addEventListener("click", function () {
    const divHeaderMobileWrap = document.querySelector(
        ".header .header-mobile-wrap"
    );
    const heightHeader = divHeaderMobileWrap.offsetHeight + 64 + "px";
    sectionHeader.style.height = heightHeader;
    sectionHeader.classList.toggle("active");
    divHeaderMobileWrap.classList.toggle("active");
    // Đặt lại "height" thành giá trị ban đầu khi loại bỏ class "active"
    if (!sectionHeader.classList.contains("active")) {
        sectionHeader.style.removeProperty("height");
    }
});

window.addEventListener("resize", function () {
    if (this.innerWidth >= 651) {
        sectionHeader.style.removeProperty("height");
        sectionHeader.classList.remove("active");
    }
});
