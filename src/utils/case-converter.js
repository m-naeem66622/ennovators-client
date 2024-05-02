// Convert title case to kebab case
export function toKebabCase(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

// Convert kebab case to title case
export function toTitleCase(str = "") {
  return str
    .split(str.includes("-") ? "-" : " ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function formatPhoneNumber(phoneNumber) {
  let concatenatedNumber = phoneNumber.dialCode + phoneNumber.number;

  let count = 0;
  const formattedNumber = phoneNumber.format
    .split("")
    .map((char) => {
      if (char === ".") {
        return concatenatedNumber[count++];
      }
      return char;
    })
    .join("");

  return formattedNumber;
}
