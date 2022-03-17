const analyzeButton = document.querySelector('#analyzeButton');
const analyzeInput = document.querySelector('#analyzeInput'); 

analyzeButton.addEventListener('click', analyze);

function analyze(){
    const inputValue = analyzeInput.value;
    const resultBox = document.querySelector('#result');
    if (!inputValue) {
        resultBox.innerHTML = "Veuillez remplir le champs ci-dessus narvalo.";
        return;
    }
    const inputValueLength = inputValue.length;
    const wordNumber = inputValue.split(' ').length;
    resultBox.innerHTML = null;
    const lengthTag = document.createElement("div");
    const wordTag = document.createElement("div");
    lengthTag.innerHTML = `Nombre de caractère: ${inputValueLength}`;
    wordTag.innerHTML = `Nombre de mot: ${wordNumber}`;
    resultBox.appendChild(lengthTag);
    resultBox.appendChild(wordTag);
}