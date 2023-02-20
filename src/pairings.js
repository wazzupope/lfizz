import {createHeader, createNav} from './home';

function createPairings() {
  const pairings = document.createElement('div');
  pairings.textContent = "Pairings";

  return pairings;
};

function loadPairings() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createPairings());
};

export {
  createPairings,
  loadPairings
};