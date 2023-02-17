function createHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = "LFizzle Invitational";

  header.appendChild(title);

  return header;
};

function createNav() {
  const nav = document.createElement('nav');

// Rules Nav Icon
  const rulesBox = document.createElement('div');
  rulesBox.setAttribute('id', 'rules-box');
  rulesBox.classList.add("nav-boxes");

  const rulesIcon = document.createElement('div');
  rulesIcon.setAttribute('id', 'rules-icon');
  rulesIcon.classList.add("nav-icons");
  rulesIcon.textContent = "icon";

  const rulesText = document.createElement('span');
  rulesText.setAttribute('id', 'rules-text');
  rulesText.classList.add("nav-text");
  rulesText.textContent = "Rules";

// History Nav Icon
  const historyBox = document.createElement('div');
  historyBox.setAttribute('id', 'history-box');
  historyBox.classList.add("nav-boxes");

  const historyIcon = document.createElement('div');
  historyIcon.setAttribute('id', 'history-icon');
  historyIcon.classList.add("nav-icons");
  historyIcon.textContent = "icon";

  const historyText = document.createElement('span');
  historyText.setAttribute('id', 'history-text');
  historyText.classList.add("nav-text");
  historyText.textContent = "History";

// Pairings Nav Icon
  const pairingsBox = document.createElement('div');
  pairingsBox.setAttribute('id', 'pairings-box');
  pairingsBox.classList.add("nav-boxes");

  const pairingsIcon = document.createElement('div');
  pairingsIcon.setAttribute('id', 'pairings-icon');
  pairingsIcon.classList.add("nav-icons");
  pairingsIcon.textContent = "icon";

  const pairingsText = document.createElement('span');
  pairingsText.setAttribute('id', 'pairings-text');
  pairingsText.classList.add("nav-text");
  pairingsText.textContent = "Pairings";

// Standings Nav Icon
  const standingsBox = document.createElement('div');
  standingsBox.setAttribute('id', 'standings-box');
  standingsBox.classList.add("nav-boxes");

  const standingsIcon = document.createElement('div');
  standingsIcon.setAttribute('id', 'standings-icon');
  standingsIcon.classList.add("nav-icons");
  standingsIcon.textContent = "icon";

  const standingsText = document.createElement('span');
  standingsText.setAttribute('id', 'standings-text');
  standingsText.classList.add("nav-text");
  standingsText.textContent = "Standings";

// Nesting Nav Elements
  rulesBox.appendChild(rulesIcon);
  rulesBox.appendChild(rulesText);
  nav.appendChild(rulesBox);

  historyBox.appendChild(historyIcon);
  historyBox.appendChild(historyText);
  nav.appendChild(historyBox);

  pairingsBox.appendChild(pairingsIcon);
  pairingsBox.appendChild(pairingsText);
  nav.appendChild(pairingsBox);

  standingsBox.appendChild(standingsIcon);
  standingsBox.appendChild(standingsText);
  nav.appendChild(standingsBox);
};

function createMain() {

};

/*
<header>
  <a href="index.html">
    <h1 id="title">LFizzle Invitational</h1>
  </a>
</header>
<nav>
  <a href="rules.html">
    <div id="rules-box" class="nav-boxes">
      <div id="rules-icon" class="nav-icons">icon</div>
      <span id="rules-text" class="nav-text">Rules</span>
    </div>
  </a>
  <a href="history.html">
    <div id="history-box" class="nav-boxes">
      <div id="history-icon" class="nav-icons">icon</div>
      <span id="history-text" class="nav-text">History</span>
    </div>
  </a>
  <a href="pairings.html">
    <div id="pairings-box" class="nav-boxes">
      <div id="pairings-icon" class="nav-icons">icon</div>
      <span id="pairings-text" class="nav-text">Pairings</span>
    </div>
  </a>
  <a href="standings.html">
    <div id="standings-box" class="nav-boxes">
      <div id="standings-icon" class="nav-icons">icon</div>
      <span id="standings-text" class="nav-text">Standings</span>
    </div>
  </a>
</nav>
<main>
  <section id="main-section">
    <h2 id="date">July 1, 2023</h2>
    <h3 id="course">Elk Ridge Golf Course</h3>
    <div class="contact-info">1 Saint Martin's Springs Road</div>
    <div class="contact-info">Carson, WA 98610</div>
    <div class="contact-info">(509) 427-0127</div>
  </section>
</main>
*/