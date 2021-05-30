import utils from '../utils';

const STORE_PREFIX = 'sniffle';

const INIT_FLAG_KEY = `${STORE_PREFIX}.inited`;
const RECORDS_KEY = `${STORE_PREFIX}.records`;

const MAX_RECORDS = 5000;
const STRING_LENGTH = 100;

export default {
  select: (query) => {
    if (!query) {
      return [];
    }

    const data = utils.ls.get(RECORDS_KEY) || [];
    return data.filter((record) => record.startsWith(query));
  },
  setRecords: () => {
    if (utils.ls.get(INIT_FLAG_KEY)) {
      return;
    }

    const data = [];
    for (let index = 0; index < MAX_RECORDS; index += 1) {
      const randomString = utils.getRandomString(STRING_LENGTH);
      data.push(randomString);
      utils.ls.set(RECORDS_KEY, data);
    }
    utils.ls.set(INIT_FLAG_KEY, true);
  },
  deleteRecords: () => {
    utils.ls.remove(RECORDS_KEY);
    utils.ls.remove(INIT_FLAG_KEY);
  },
  getDataStatus: () => utils.ls.get(INIT_FLAG_KEY) || false,
};
