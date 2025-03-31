 function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); 
 }

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
