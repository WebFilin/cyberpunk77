var title = document.querySelector(".strip__sity "); setTimeout(function () { title.classList.add("js-activ__title-sity") }, 1E3); var itemsSity = Array.from(document.querySelectorAll(".items")); itemsSity.forEach(function (a) { return a.addEventListener("click", showMenu) }); var menuChange = Array.from(document.querySelectorAll(".menu"));
function showMenu(a) {
   title.classList.remove("js-activ__title-sity"); Array.from(menuChange).forEach(function (b) { b.classList.remove("js-add-triger__menu") }); itemsSity[0].contains(a.target) ? menuChange[0].classList.add("js-add-triger__menu") : itemsSity[1].contains(a.target) ? menuChange[1].classList.add("js-add-triger__menu") : itemsSity[2].contains(a.target) ? menuChange[2].classList.add("js-add-triger__menu") : itemsSity[3].contains(a.target) ? menuChange[3].classList.add("js-add-triger__menu") : itemsSity[4].contains(a.target) ?
      menuChange[4].classList.add("js-add-triger__menu") : itemsSity[5].contains(a.target) ? menuChange[5].classList.add("js-add-triger__menu") : itemsSity[6].contains(a.target) && menuChange[6].classList.add("js-add-triger__menu")
};