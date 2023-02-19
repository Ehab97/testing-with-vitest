import { extractEnteredNumberValues, calculateResult } from "./src/parser.js";
import { getResult, insertResult } from "./src/output.js";
const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResult(numberInputs);

  const resultText = getResult(result);

  insertResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
