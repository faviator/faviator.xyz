import { state, mutations, actions } from '@/store';

describe('Vuex', () => {
  let getInitialState = () => ({ ...state });

  describe('mutations', () => {
    describe('setConfig', () => {
      let state, randomConfig;

      beforeEach(() => {
        state = getInitialState();
        randomConfig = {
          a: 3,
          b: 'hellllllo',
        };
      });

      test('it sets the $state.config', () => {
        mutations.setConfig(state, randomConfig);

        expect(state.config).toEqual(randomConfig);
      });

      test('it creates a copy before storing to avoid mutation outside Vuex', () => {
        const config = { ...randomConfig };
        mutations.setConfig(state, config);
        config.c = 'wow i changed it';

        expect(state.config).toEqual(randomConfig);
      });

    });

    describe('resetConfig', () => {
      test('it sets the $state.config', () => {
        const state = {};
        mutations.resetConfig(state);

        expect(state.config).toEqual(getInitialState().config);
      });
    });
  });

  describe('actions', () => {
    describe('updateConfig', () => {
      const state = getInitialState();
      const update = {
        wow: 1379,
      };
      const commit = jest.fn();

      actions.updateConfig({ commit, state }, update);

      expect(commit.mock.calls.length).toBe(1);
      const [ mutation, payload ] = commit.mock.calls[0];
      expect(mutation).toBe('setConfig');
      expect(payload).toEqual({
        ...state.config,
        ...update,
      });
    });
  });
});
