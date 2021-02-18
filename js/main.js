//mobile menu
function openmenu(){
    document.getElementById("mobileNav").style.width="100%";
};
function closenav(){
    document.getElementById("mobileNav").style.width="0%";
};
// sticky menu
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});