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
