export const required = (value) => {
  if (value) {
    return undefined;
  }
  return "Данное поле является обязательным";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length <= maxLength) {
    return undefined;
  }
  return `Максимальное число символов - ${maxLength}`;
};

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Некорректный почтовый адрес"
    : undefined;
