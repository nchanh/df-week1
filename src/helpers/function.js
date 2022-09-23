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
