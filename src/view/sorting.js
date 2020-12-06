import {createElement, render, RenderPosition} from '../utils';
import SortingElementView from './sorting-element';

const createSortingContainerTemplate = () => {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get"></form>`;
};

export default class Sorting {
  constructor(sorting) {
    this._element = null;
    this._sorting = sorting;
  }

  getTemplate() {
    return createSortingContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      let fragment = document.createDocumentFragment();
      for (const sort of this._sorting) {
        fragment.appendChild(new SortingElementView(sort).getElement());
      }

      render(this._element, fragment, RenderPosition.BEFOREEND);
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
