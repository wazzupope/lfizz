import {createHeader, createNav, createMain, loadHome} from './home.js';
import {createRule, loadRules} from './rules.js';
import {createHistory, loadHistory} from './history.js';
import {createPairings, loadPairings} from './pairings.js';
import {createStandings, loadStandings} from './standings.js';

loadHome();

rulesBox.addEventListener('click', loadRules);
historyBox.addEventListener('click', loadHistory);
pairingsBox.addEventListener('click', loadPairings);
standingsBox.addEventListener('click', loadStandings);