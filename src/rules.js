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

  return rules;
};

function loadRules() {
  const main = document.getElementById("main");

  while (main.lastChild) {
    main.lastChild.remove();
  }

  main.appendChild(createRules());
};

export {
  loadRules;
};