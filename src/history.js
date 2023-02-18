import {createHeader, createNav} from './home';

function createHistory() {
  const history = document.createElement('div');
  history.textContent = "History";
};

function loadHistory() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createHistory());
};

export {
  createHistory,
  loadHistory
};