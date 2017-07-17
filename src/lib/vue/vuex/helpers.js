import { mapState as ms, mapMutations as mm, mapGetters as mg, mapActions as ma } from 'vuex';

function markResults(results) {
  Object.keys(results).forEach((key) => {
    results[key].vuex = true;
  });
  return results;
}

function mapMethods(methods) {
  Object.keys(methods).forEach((key) => {
    const method = methods[key];
    methods[key] = function wrap(...args) { return method.apply(this)(...args); };
  });
  return methods;
}

export function mapState(...args) {
  return markResults(ms(...args));
}

export function mapMutations(...args) {
  return markResults(mm(...args));
}

export function mapGetters(...args) {
  return markResults(mg(...args));
}

export function mapGetterMethods(...args) {
  return markResults(mapMethods(mg(...args)));
}

export function mapActions(...args) {
  return markResults(ma(...args));
}

export function stubHelpers(stubBuilder, { computed = {}, methods = {} }) {
  [computed, methods].forEach((o) => {
    Object.keys(o).forEach((key) => {
      const method = o[key];
      if (!method.vuex) return;
      o[key] = stubBuilder();
    });
  });
}
