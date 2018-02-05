import Vue from 'vue';
import Vuex from 'vuex';

import mapValues from 'lodash.mapvalues';

Vue.use(Vuex);

const getDefaultConfig = () => ({
  size: 160,
  text: 'F',
  dx: 0,
  dy: 0,
  fontSize: 80,
  fontFamily: 'Dancing Script',
  fontColor: 'white',
  backgroundColor: 'rgb(219, 59, 211)',
  borderWidth: 5,
  borderColor: '#0D1423',
  borderRadius: 5,
  rx: undefined,
  ry: undefined,
});

const state = {
  config: getDefaultConfig(),
};

const mutations = {
  setConfig: (state, config) => state.config = config,
  resetConfig: (state) => state.config = getDefaultConfig(),
};

const actions = {
  updateConfig({ commit, state }, newConfig) {
    commit('setConfig', mapValues({
      ...state.config,
      ...newConfig,
    }, v => Number(v) || v));
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});
