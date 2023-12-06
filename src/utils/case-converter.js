// Convert title case to kebab case
export function toKebabCase(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

// Convert kebab case to title case
export function toTitleCase(kebabCase) {
  return kebabCase
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
