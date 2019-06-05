import Vuex from 'vuex';
import test from 'tape';
import screens from './screens';

const store = new Vuex.Store({
  modules: { screens },
});

test('Screens module state', (t) => {
  t.assert('screens' in store.state.screens, 'Provides state of screens - mobile or desktop.');
  t.end();
});

test('Screens module getters/getSelectedScreen', (t) => {
  const data = 'desktop';
  store.state.screens.screens = data;
  t.equal(store.getters.getSelectedScreen, data, 'Gets the selected screen.');
  t.end();
});

test('Screens module getters/getScreens', (t) => {
  const data = 'mobile';
  store.state.screens.screens = data;
  t.equal(store.getters.getScreens, 'mobile', 'Gets the screens');
  t.end();
});

test('store/modules/screens mutuation updateSelectedScreen', (t) => {
  const data = 'mobile';
  store.commit('updateSelectedScreen', data);
  t.equal(store.state.screens.screens, 'mobile', 'updateSelectedScreen gets the selected screen');
  t.end();
});

test('src/store/modules/screens/actions SetScreen', (t) => {
  store.state.screens.selectedScreen = 'desktop';
  store.dispatch('setScreen', 'mobile');
  t.equal(store.state.screens.selectedScreen, 'mobile', 'updates with new screen');
  t.end();
});
