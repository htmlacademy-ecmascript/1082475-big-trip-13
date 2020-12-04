import {createElement, render, RenderPosition} from '../utils';
import PointHeaderEditView from './point-header-edit';
import AvailableOfferView from './available-offers';
import PointDescriptionView from './point-description';
import PointPhotosView from './point-photos';

export default class PointEditContainer {
  constructor(point) {
    this._element = null;
    this._point = point;
    this._editForm = null;
    this._headerEditContainer = null;
    this._pointEditAvailableOffersContainer = null;
    this._availableOffer = null;
    this._descriptionContainer = null;
    this._description = null;
    this._photos = null;
  }

  createPointEditContainerTemplate() {
    return `
    <form class="event event--edit" action="#" method="post">
      <header class="event__header"></header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers"></div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>

        </section>
      </section>
    </form>
  `;
  }

  getTemplate() {
    return this.createPointEditContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

      this._editForm = this._element.querySelector(`.event--edit .event__header`);
      this._headerEditContainer = new PointHeaderEditView(this._point).getElement();
      render(this._editForm, this._headerEditContainer, RenderPosition.BEFOREEND);

      this._pointEditAvailableOffersContainer = this._element.querySelector(`.event__available-offers`);
      this._availableOffer = new AvailableOfferView(this._point).getElement();
      render(this._pointEditAvailableOffersContainer, this._availableOffer, RenderPosition.BEFOREEND);

      this._descriptionContainer = this._element.querySelector(`.event__section--destination`);
      this._description = new PointDescriptionView(this._point).getElement();
      render(this._descriptionContainer, this._description, RenderPosition.BEFOREEND);

      this._photos = new PointPhotosView(this._point).getElement();
      render(this._descriptionContainer, this._photos, RenderPosition.BEFOREEND);
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
