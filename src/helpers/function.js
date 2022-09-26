import constants from '../constants';

export const convertNameSize = (size) => {
  switch (size) {
    case 'small':
      return 'S';
    case 'medium':
      return 'M';
    case 'large':
      return 'L';
    case 'extraLarge':
      return 'XL';
    default:
      return size;
  }
};

export const countTotalPrice = (carts) => {
  let totalPrice = 0;

  if (carts.length > 0) {
    carts.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
  }

  return totalPrice;
};

export const isWidthDevice = (width) => {
  return width < constants.WIDTH_DESKTOP;
};

export const isWidthMobile = (width) => {
  return width < constants.WIDTH_TABLET;
};

export const isWidthTablet = (width) => {
  return width >= constants.WIDTH_TABLET && width < constants.WIDTH_DESKTOP;
};

export const isWidthDesktop = (width) => {
  return width >= constants.WIDTH_DESKTOP;
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
