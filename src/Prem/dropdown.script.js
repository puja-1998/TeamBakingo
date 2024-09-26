const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeBtn = document.getElementById("closeBtn");

// Open Sidebar
openSidebarBtn.addEventListener("click", () => {
   sidebar.classList.remove("-translate-x-full");
   overlay.classList.remove("hidden");
});

// Close Sidebar
closeBtn.addEventListener("click", () => {
   sidebar.classList.add("-translate-x-full");
   overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
   sidebar.classList.add("-translate-x-full");
   overlay.classList.add("hidden");
});

// Toggle Accordion (Main Categories with + and −)
function toggleAccordion(id, element) {
   const section = document.getElementById(id);
   section.classList.toggle("hidden");
   element.classList.toggle("border-l-4");
   element.classList.toggle("border-l-[#ff5f5d]");

   const plusIcon = element.querySelector(".icon-plus");
   const minusIcon = element.querySelector(".icon-minus");
   plusIcon.classList.toggle("hidden");
   minusIcon.classList.toggle("hidden");
}

// Toggle Submenu (Subcategories with ↓ and ↑)
function toggleSubmenu(element) {
   const submenu = element.nextElementSibling;
   submenu.classList.toggle("hidden");
}
