import client from './client';

export const getRecords = (searchQuery) => client.get('records', searchQuery);

export const setRecords = () => client.post('set-records');

export const clearRecords = () => client.post('clear-records');

export const getDataStatus = () => client.get('data-status');
