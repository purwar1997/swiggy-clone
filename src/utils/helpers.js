export const openModal = setIsModalOpen => {
  setIsModalOpen(true);
  document.body.classList.add('disable-scroll');
};

export const closeModal = (event, setIsModalOpen) => {
  if (event.target === event.currentTarget) {
    setIsModalOpen(false);
    document.body.classList.remove('disable-scroll');
  }
};

export const scrollCarouselLeft = carousel => {
  carousel.scrollLeft = carousel.scrollLeft - carousel.clientWidth / 2;
};

export const scrollCarouselRight = carousel => {
  carousel.scrollLeft = carousel.scrollLeft + carousel.clientWidth / 2;
};

export const calculateCartTotal = items =>
  items.reduce(
    (total, { menuItem, quantity }) =>
      total + ((menuItem.price || menuItem.defaultPrice) * quantity) / 100,
    0
  );
