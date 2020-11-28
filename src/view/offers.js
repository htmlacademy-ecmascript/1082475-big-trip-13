export const createOfferTemplate = (offer) => {
  return `
  <li class="event__offer">
    <span class="event__offer-title">${offer.condition}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offer.cost}</span>
  </li>
`;
};
