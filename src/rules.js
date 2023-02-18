import {createHeader, createNav} from './home';

function createRules() {
  const rules = document.createElement('div');
  rules.setAttribute('id', 'rules-div');

  const rulesList = document.createElement('ul');

  const rule1 = document.createElement('li');
  rule1.textContent = "One mulligan per round";

  const rule2 = document.createElement('li');
  rule2.textContent = "Ready golf";

  const rule3 = document.createElement('li');
  rule3.textContent = "Take a provisional";

  const rule4 = document.createElement('li');
  rule4.textContent = "Gimmes are up to group consensus";

  rulesList.appendChild(rule1);
  rulesList.appendChild(rule2);
  rulesList.appendChild(rule3);
  rulesList.appendChild(rule4);
  rules.appendChild(rulesList);
};

function loadRules() {
  const content = document.getElementById("content");

  while (content.lastChild) {
    content.lastChild.remove();
  }

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createRules());
};

export {
  createRules,
  loadRules
};