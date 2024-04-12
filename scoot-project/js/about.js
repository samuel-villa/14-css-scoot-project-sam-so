document.addEventListener('DOMContentLoaded', function() {
  const allCross = document.querySelectorAll('.visible-pannel img');

  allCross.forEach(element => {
    element.addEventListener('click', function(){
      const togglePanel = this.parentNode.nextElementSibling;

      if (this.src.includes('petiteflecheverslebas')) {
        this.src = '../assets/icons/petiteflecheverslehaut.svg';
        togglePanel.classList.add('show'); // Ajouter la classe "show"
      } else if (this.src.includes('petiteflecheverslehaut')) {
        this.src = '../assets/icons/petiteflecheverslebas.svg';
        togglePanel.classList.remove('show'); // Retirer la classe "show"
      }
    });
  });
});










/**const questions = document.querySelectorAll('.question'); // Select all buttons with class "question"

var i;

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    // Toggle active class on both the button and its parent element
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    // Get the panel element (next sibling)
    var pannel = this.nextElementSibling;

    // Toggle the panel's display property
    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}**/
