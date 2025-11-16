document.addEventListener("DOMContentLoaded", () => {
  // BURGER MENU
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".nav__list");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("show");
    menu.classList.toggle("show");
  });
  // NAVIGATION

  const currentPath = window.location.pathname
    .replace(/\.html$/, "")
    .replace(/^\//, "");

  const title = document.querySelector("title");
  const pageTitleMap = {
    index: "ТОВ «КАМПСІС ЛІГАЛ»",
    "about-company": "",
    contacts: "",
    documents: "",
    loani: "",
    "ukr-kredit-finance": "",
    "kachay-groshi": "",
    "avans-kredit": "",
    "eapb-fp": "",
    miloan: "",
  };

  title.textContent = pageTitleMap[currentPath] || title.textContent;

  document.querySelectorAll(".nav__link").forEach((link) => {
    const href = link
      .getAttribute("href")
      .replace(/\.html$/, "")
      .replace(/^\//, "");
    if (currentPath === href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if (typeof window.renderDocumentsPage === "function") {
    window.renderDocumentsPage();
  }

});
