import { action } from 'mobx';
import { dataStore } from '../stores/data-store';

class Handler {
  getMoviesFromQuery(query) {
  return fetch(`http://www.omdbapi.com?t=${ query }`)
    .then((response) => response.json())
    .then((responseJson) => {
      dataStore.data = responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}
}

export const handler = new Handler();