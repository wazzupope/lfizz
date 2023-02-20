import {loadRules} from './rules';
import {loadHistory} from './history';
import {loadPairings} from './pairings';
import {loadStandings} from './standings';

function createHeader() {
  const header = document.createElement('header');

  const title = document.createElement('h1');
  title.setAttribute('id', 'title');
  title.textContent = "LFizzle Invitational";
  title.addEventListener('click', loadHome);

  header.appendChild(title);

  return header;
};

function createNav() {
  const nav = document.createElement('nav');

// Rules Nav Icon
  const rulesBox = document.createElement('div');
  rulesBox.setAttribute('id', 'rules-box');
  rulesBox.classList.add("nav-boxes");
  rulesBox.addEventListener('click', loadRules);

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
  historyBox.addEventListener('click', loadHistory);

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
  pairingsBox.addEventListener('click', loadPairings);

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
  standingsBox.addEventListener('click', loadStandings);

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

  return nav;
};

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const mainSection = document.createElement('section');
  mainSection.setAttribute('id', 'main-section');

  const date = document.createElement('h2');
  date.setAttribute('id', 'date');
  date.textContent = "July 1, 2023";

  const course = document.createElement('h3');
  course.setAttribute('id', 'course');
  course.textContent = "Elk Ridge Golf Course";

  const street = document.createElement('div');
  street.classList.add('contact-info');
  street.textContent = "1 Saint Martin's Springs Road";

  const town = document.createElement('div');
  town.classList.add('contact-info');
  town.textContent = "Carson, WA 98610";

  const phone = document.createElement('div');
  phone.classList.add('contact-info');
  phone.textContent = "(509) 427-0127";

// Nesting Main Elements
  mainSection.appendChild(date);
  mainSection.appendChild(course);
  mainSection.appendChild(street);
  mainSection.appendChild(town);
  mainSection.appendChild(phone);
  main.appendChild(mainSection);

  return main;
};

function loadHome() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
};

export {
  loadHome;
};