import { mapState as ms, mapMutations as mm, mapGetters as mg, mapActions as ma } from 'vuex';
import store from './index';

function bindResults($store, results) {
  Object.keys(results).forEach((key) => {
    results[key] = results[key].bind({ $store });
  });
  return results;
}

function mapMethods(methods) {
  Object.keys(methods).forEach((key) => {
    methods[key] = methods[key]();
  });
  return methods;
}

export function mapState(states, $store = store) {
  return bindResults($store, ms(states));
}

export function mapMutations(mutuations, $store = store) {
  return bindResults($store, mm(mutuations));
}

export function mapGetters(getters, $store = store) {
  return bindResults($store, mg(getters));
}

export function mapGetterMethods(getters, $store = store) {
  return mapMethods(bindResults($store, mg(getters)));
}

export function mapActions(actions, $store = store) {
  return bindResults($store, ma(actions));
}
