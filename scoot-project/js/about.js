const questions = document.querySelectorAll('.question img'); // Select all buttons with class "question"

console.log(questions);
questions.forEach(element =>{

    element.addEventListener('click', function(){

        //console.log(this.src);
        
    })
})
/**var i;

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
