export default {
  list() {
    // Imaginary AJAX call, use Vue.http for ajax
    return Promise.resolve([
      { name: 'one' },
      { name: 'two' },
      { name: 'three' }
    ]);
  }
};
