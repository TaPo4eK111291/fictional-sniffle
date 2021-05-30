import Vue from 'vue';
import Vuex from 'vuex';

import * as recordsApi from '../api/records';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: '',
    searchResult: [],
    isSearched: false,
  },
  mutations: {
    setSearchQuery: (state, payload) => {
      state.searchQuery = payload;
    },
    setSearchResult: (state, payload) => {
      state.isSearched = true;
      state.searchResult = payload || [];
    },
  },
  actions: {
    updateSearchQuery: ({ commit }, query) => {
      commit('setSearchQuery', query);
    },
    search: ({ commit, state }) => {
      const records = recordsApi.getRecords(state.searchQuery);
      commit('setSearchResult', records);
    },
    setRecords: () => {
      recordsApi.setRecords();
    },
    clearRecords: () => {
      recordsApi.clearRecords();
    },
    getDataStatus: () => recordsApi.getDataStatus(),
  },
  getters: {
    searchResultsCount: (state) => state.searchResult.length,
  },
});
