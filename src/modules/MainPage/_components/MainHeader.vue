<template>
  <div class="main-header">
    <div class="title">
      Поиск по записям.
    </div>
    <div class="actions">
      <ui-button
        v-if="isDataInited"
        type="small"
        @click="clearRecordsHandler"
      >
        Удалить записи
      </ui-button>
      <ui-button
        v-else
        type="small"
        @click="addRecordsHandler"
      >
        Добавить записи
      </ui-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'main-header',
  async created() {
    this.isDataInited = await this.getDataStatus();
  },
  data() {
    return {
      isDataInited: false,
    };
  },
  methods: {
    ...mapActions([
      'getDataStatus',
      'clearRecords',
      'setRecords',
    ]),
    toggleDataStatus() {
      this.isDataInited = !this.isDataInited;
    },
    addRecordsHandler() {
      this.toggleDataStatus();
      this.setRecords();
    },
    clearRecordsHandler() {
      this.toggleDataStatus();
      this.clearRecords();
    },
  },
};
</script>

<style lang="less" scoped>
.main-header {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 20px;
  }

  .actions {
    display: flex;
  }
}
</style>
