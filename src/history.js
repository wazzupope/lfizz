function createHistory() {
  const history = document.createElement('div');
  history.textContent = "History";

  return history;
};

function loadHistory() {
  const main = document.getElementById("main");

  while (main.lastChild) {
    main.lastChild.remove();
  }

  main.appendChild(createHistory());
};

export default loadHistory;