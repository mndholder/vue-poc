/**
 * Global app config
 * It can be just a plain object, but the class is better,
 * because it will be able to reference its own properties, ie:
 *  MY_CONSTANT = this.ANOTHER_CONSTANT + this.YET_ANOTHER_CONSTANT
 */
class Config {
  API_BASE_URL = 'http://localhost:3000/api';
}

export default new Config();
