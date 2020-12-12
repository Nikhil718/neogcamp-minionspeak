var textInput = document.getElementById("input-area");                                         
var button = document.querySelector("#btn-translate")
var outputDiv = document.querySelector("#output-area");

var serverURL =  "https://api.funtranslations.com/translate/minion.json"

function getRequiredURL(input){
return serverURL + "?" + "text=" + input;
}
function errorHandler(error) {
    alert("something wrong with server! try again after some time")
}
function clickhandler() {
    var inputValue = textInput.value;
    fetch(getRequiredURL(inputValue))
    .then((response) => response.json())
    .then((json) => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};
button.addEventListener('click' , clickhandler);
 

