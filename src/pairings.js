function createPairings() {
  const pairings = document.createElement('div');
  pairings.textContent = "Pairings";

  return pairings;
};

function loadPairings() {
  const main = document.getElementById("main");

  while (main.lastChild) {
    main.lastChild.remove();
  }

  main.appendChild(createPairings());
};

export {
  loadPairings;
};