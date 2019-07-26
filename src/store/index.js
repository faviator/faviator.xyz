import Vue from 'vue';
import Vuex from 'vuex';

import mapValues from 'lodash.mapvalues';

import faviatorIconConfig from '/../faviatorIconConfig';

Vue.use(Vuex);

const getDefaultConfig = () => ({
  ...faviatorIconConfig,
});

export const state = {
  config: getDefaultConfig(),
};

export const mutations = {
  setConfig: (state, config) => (state.config = { ...config }),
  resetConfig: state => (state.config = getDefaultConfig()),
};

export const actions = {
  updateConfig({ commit, state }, newConfig) {
    commit(
      'setConfig',
      mapValues(
        {
          ...state.config,
          ...newConfig,
        },
        v => Number(v) || v,
      ),
    );
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
});
