import Vuex from 'vuex';
import test from 'tape';
import units from './units';

const store = new Vuex.Store({
  modules: { units },
});

test('Units module state', (t) => {
  t.assert('units' in store.state.units, 'Provides state of units selected.');
  t.end();
});

test('Units module getters/getSelectedUnit', (t) => {
  const data = 'px';
  store.state.units.units = data;
  t.equal(store.getters.getSelectedUnit, data, 'Gets the selected unit.');
  t.end();
});

test('Units module getters/getUnits', (t) => {
  const data = 'px';
  store.state.units.units = data;
  t.equal(store.getters.getUnits, 'px', 'Gets the unit');
  t.end();
});

test('store/modules/units mutuation updateSelectedUnit', (t) => {
  const data = 'rem';
  store.commit('updateSelectedUnit', data);
  t.equal(store.state.units.units, 'px', 'updateSelectedUnit gets the selected unit');
  t.end();
});

// TO DO: test action SetUnit
test('src/store/modules/units/actions SetUnit', (t) => {
  store.state.units.selected = 'px';
  store.dispatch('setUnit', 'rem');
  t.equal(store.state.units.selected, 'rem', 'updates with new unit');
  t.end();
});
