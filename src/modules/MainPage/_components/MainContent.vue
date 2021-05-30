<template>
  <div class="content">
    <div class='search-row'>
      <el-input v-model="query" @change="search" />
      <ui-button @click="search">Искать</ui-button>
    </div>
    <div v-if="isSearched" class="result-row">
      Найдено: {{ searchResultsCount }}
      <ul>
        <li v-for="(result) in searchResult" :key="result">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'main-content',
  computed: {
    ...mapState(['searchQuery', 'isSearched', 'searchResult']),
    ...mapGetters(['searchResultsCount']),
    query: {
      get() {
        return this.searchQuery;
      },
      set(value) {
        this.updateSearchQuery(value);
      },
    },
  },
  methods: {
    ...mapActions([
      'updateSearchQuery',
      'search',
    ]),
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .search-row {
    display: flex;
    gap: 30px 20px;
  }
}
</style>
