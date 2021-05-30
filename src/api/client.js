import storage from './storage';

export default {
  get: (url, params) => {
    switch (url) {
      case 'records':
        return storage.select(params);
      case 'data-status':
        return storage.getDataStatus();
      default:
        return [];
    }
  },
  post: (url, params) => {
    switch (url) {
      case 'set-records':
        storage.setRecords(params);
        break;
      case 'clear-records':
        storage.deleteRecords(params);
        break;
      default:
        break;
    }
  },
};
