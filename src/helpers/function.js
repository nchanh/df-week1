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

export const getQuantity = (product, size) => {
  const objSize = Object.entries(product.sizes).find(
    ([key, value]) => key === size
  );
  return objSize[1];
};
