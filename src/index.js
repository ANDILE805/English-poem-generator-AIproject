function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Zulu poem",
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
