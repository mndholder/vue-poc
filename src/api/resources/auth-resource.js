export default {
  authorize() {
    // Imaginary AJAX call, use Vue.http for ajax
    return Promise.resolve({
      access_token: 'dummy',
      refresh_token: 'dummy'
    });
  },

  deauthorize() {
    // Imaginary AJAX call, use Vue.http for ajax
    return Promise.resolve();
  }
};
