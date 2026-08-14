const containerEl = document.querySelector(".container");

const careers = ["programador", "Freelancer", "Professor", "Youtuber"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  // Escreve o texto digitando letra por letra
  containerEl.innerHTML = `<h1>Eu sou ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  // Quando terminar de digitar a palavra atual, passa para a próxima
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  // Quando chegar no final da lista de profissões, volta para a primeira (índice 0)
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  // Chame a função novamente a cada 400ms
  setTimeout(updateText, 400);
}