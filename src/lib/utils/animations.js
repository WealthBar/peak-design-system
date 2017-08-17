export default {
  flashOrFill(event) {
    const classList = event.target.classList;
    classList.add('animated');
    classList.add('flash-or-fill');
  },
  unflashOrFill(event) {
    const classList = event.target.classList;
    classList.remove('animated');
    classList.remove('flash-or-fill');
  },
};
