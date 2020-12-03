var input = document.getElementById("input-area");
var button = document.querySelector("#btn-translate")



function clickhandler() {
    var inpute = input.value;
    console.log(inpute);
}

button.addEventListener('click' , clickhandler) ;
 