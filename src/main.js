import InfoView from './view/info';
import ControlsView from './view/controls';
import NewEventButtonView from './view/new-event-button';

import {generatePoint} from './mock/point';
import {generateInfo} from './mock/info';
import {generateTab} from './mock/tabs';
import {generateFilter} from './mock/filter';
import {generateSorting} from './mock/sorting';

import TripPresenter from './presenter/trip';
import {render, RenderPosition} from './utils/render';

const pointsCount = 20;

const points = new Array(pointsCount).fill().map(generatePoint);
const info = generateInfo();
const tabs = generateTab();
const filters = generateFilter();
const sorting = generateSorting();

// header
const headerContainer = document.querySelector(`.page-header`);
const tripContainer = headerContainer.querySelector(`.trip-main`);
tripContainer.innerHTML = ``;

// main
const mainContainer = document.querySelector(`.page-main`);
const pointsContainer = mainContainer.querySelector(`.trip-events`);

// tabs
render(tripContainer, new InfoView(info), RenderPosition.BEFOREEND);
render(tripContainer, new ControlsView(tabs, filters), RenderPosition.BEFOREEND);
render(tripContainer, new NewEventButtonView(), RenderPosition.BEFOREEND);

// trip
const tripPresenter = new TripPresenter(pointsContainer, sorting);
tripPresenter.init(points);