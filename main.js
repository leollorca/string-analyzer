const analyzeButton = document.querySelector("#analyzeButton");
const analyzeInput = document.querySelector("#analyzeInput");
const vowelsArray = ["a", "e", "i", "o", "u", "y"];

analyzeButton.addEventListener("click", analyze);

function analyze() {
  const inputValue = analyzeInput.value;
  const resultBox = document.querySelector("#result");
  if (!inputValue) {
    resultBox.innerHTML = "Veuillez remplir le champs ci-dessus narvalo.";
    return;
  }
  const inputValueLength = inputValue.length;
  const wordNumber = inputValue.split(" ").length;
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (const letter of inputValue) {
    if (vowelsArray.includes(letter)) {
      vowelsCount++;
    } else {
      consonantsCount++;
      if (letter === " ") {
        consonantsCount--;
      }
    }
  }
  resultBox.innerHTML = null;
  const lengthTag = document.createElement("div");
  const wordTag = document.createElement("div");
  const vowelsTag = document.createElement("div");
  const consonantsTag = document.createElement("div");
  lengthTag.innerHTML = `Nombre de caractère: ${inputValueLength}`;
  wordTag.innerHTML = `Nombre de mot: ${wordNumber}`;
  vowelsTag.innerHTML = `Nombre de voyelle: ${vowelsCount}`;
  consonantsTag.innerHTML = `Nombre de consonne: ${consonantsCount}`;
  resultBox.appendChild(lengthTag);
  resultBox.appendChild(wordTag);
  resultBox.appendChild(vowelsTag);
  resultBox.appendChild(consonantsTag);
}
