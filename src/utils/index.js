import localStorage from './localStorage';

export default {
  ls: localStorage,
  getRandomString: (length = 20) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return Array(length)
      .join()
      .split(',')
      .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
      .join('');
  },
};
