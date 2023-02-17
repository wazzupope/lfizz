import {createHeader, createNav, createMain, loadHome} from './home.js';
import {createRule, loadRules} from './rules.js';
import {createHistory, loadHistory} from './history.js';
import {createPairings, loadPairings} from './pairings.js';
import {createStandings, loadStandings} from './standings.js';

loadHome();

// Add event listeners for title and nav
const title = document.getElementById('title');
title.addEventListener('click', loadHome);

const rulesBox = document.getElementById('rules-box');
rulesBox.addEventListener('click', loadRules);

const historyBox = document.getElementById('history-box');
historyBox.addEventListener('click', loadHistory);

const pairingsBox = document.getElementById('pairings-box');
pairingsBox.addEventListener('click', loadPairings);

const standingsBox = document.getElementById('standings-box');
standingsBox.addEventListener('click', loadStandings);