import {createElement} from "../utils.js";
import dayjs from 'dayjs';

const DestinationCity = {
  ONE: 1,
  TWO: 2,
};

export default class Info {
  constructor(info) {
    this._info = info;
    this._element = null;
  }

  createInfoTemplate(_info) {
    const {destinationCities, dateTimeStartEvent, dateTimeEndEvent, cost} = _info;

    const dateStart = dateTimeStartEvent !== null
      ? dayjs(dateTimeStartEvent).format(`MMM DD`)
      : ``;

    const dateEnd = dateTimeEndEvent !== null
      ? dayjs(dateTimeEndEvent).format(`MMM DD`)
      : ``;

    let listCities = ``;
    if (destinationCities.length === DestinationCity.ONE) {
      listCities = destinationCities[0];
    }
    if (destinationCities.length === DestinationCity.TWO) {
      listCities = destinationCities[0] + ` - ` + destinationCities[1];
    }
    if (destinationCities.length > DestinationCity.TWO) {
      listCities = destinationCities[0] + ` - ... - ` + destinationCities[destinationCities.length - 1];
    }

    return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${listCities}</h1>

        <p class="trip-info__dates">${dateStart} - ${dateEnd}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>
    `;
  }

  getTemplate() {
    return this.createInfoTemplate(this._info);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
