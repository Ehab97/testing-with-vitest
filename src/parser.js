import { add } from "./math.js";
import { cleanNumbers } from "./util/numbers.js";

export function extractNumbers(formData) {
  const num1Input = formData.get("num1");
  const num2Input = formData.get("num2");

  return [num1Input, num2Input];
}

export function extractEnteredNumberValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}

export function calculateResult(numberInputs) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberInputs);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
