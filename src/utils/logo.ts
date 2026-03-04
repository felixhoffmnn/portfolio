const createLogo = (name: string) =>
  name
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export { createLogo };
