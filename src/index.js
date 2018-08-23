import { camelCase } from 'lodash';

export default function(store_object) {
  let mutations = {};
  let state = {};

  if (typeof store_object.state === 'object') {
    Object
      .keys(store_object.state)
      .forEach(
        k => {
          let mutation_type = camelCase(k);
          let element_data = localStorage.getItem(k);
          if (element_data !== null) {
            store_object.state[k] = JSON.parse(element_data);
          }
          mutations[mutation_type] = (state, payload) => {
            state[k] = payload;
            localStorage.setItem(k, JSON.stringify(payload));
          }
        }
      );

  }
  store_boject.mutations = Object.assign(mutations, store_object.mutations);
  return store_object;
}