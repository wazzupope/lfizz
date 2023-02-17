// do a true leaderboard, sortable, with gross score, net score, 9 hole scores broken down by round and front/back, # of snowmen, # of birdies
// modify view for mobile so that you can scroll right to see sortable categories, when pushing sort on one, it doesn't scroll back to the left

function createStandings() {
  const standings = document.createElement('div');
  standings.textContent = "Standings";
};

function loadStandings() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createStandings());
};

export {
  createStandings,
  loadStandings
};