// @flow

import localForage from 'localforage';

import type {PhotoData} from './unsplash';

const STORAGE_KEY = 'cachedImg';
const cache = localForage.createInstance({
  name: 'cache',
});

async function saveToCache(data: PhotoData) {
  const val = await cache.setItem(STORAGE_KEY, data);
}

async function getPhotoDataFromCache(): Promise<?PhotoData> {
  try {
    const val = await cache.getItem(STORAGE_KEY);
    if (val != null) {
      return val;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

module.exports = {
  saveToCache,
  getPhotoDataFromCache,
};
