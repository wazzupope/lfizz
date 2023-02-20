// do a true leaderboard, sortable, with gross score, net score, 9 hole scores broken down by round and front/back, # of snowmen, # of birdies
// modify view for mobile so that you can scroll right to see sortable categories, when pushing sort on one, it doesn't scroll back to the left

function createStandings() {
  const standings = document.createElement('div');
  standings.textContent = "Standings";

  return standings;
};

function loadStandings() {
  const main = document.getElementById("main");

  while (main.lastChild) {
    main.lastChild.remove();
  }

  main.appendChild(createStandings());
};

export default loadStandings;