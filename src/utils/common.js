// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const updateItem = (items, updatedItems) => {
  const index = items.findIndex((item) => item.id === updatedItems.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    updatedItems,
    ...items.slice(index + 1)
  ];
};
