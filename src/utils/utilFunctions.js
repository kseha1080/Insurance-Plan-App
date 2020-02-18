import axios from 'axios';

/**
 * Util function that sets common header Authorization with token received or deletes if token does not exist.
 * @function _setAuthToken
 * @param {string} token - jwt received from HTTP request on user creation
 */

export const _setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

/**
 * Util function that takes persisted redux state value and parses into readable JS.
 * @function _parseStorageValue
 * @param {string} storageValue
 * @returns {any}
 */

export const _parseStorageValue = (storageValue) => {
  if (storageValue === 'true' || storageValue === 'false') {
    return JSON.parse(storageValue);
  }
  return storageValue;
};

/**
 * Util function that takes a string and returns readable strings with space
 * between each word with first letter capitalized and rest lower cased.
 * (ex. 'HEALTH_INSURANCE' --> 'Health Insurance')
 * @function _createLowerCaseText
 * @param {string} wordsString
 * @returns {string}
 */

export const _createLowerCaseText = (wordsString) => {
  let wordArray = wordsString.split('_');
  wordArray = wordArray.map((word) => {
    let lowerCaseWord = word.toLowerCase();
    lowerCaseWord = lowerCaseWord[0].toUpperCase() + lowerCaseWord.substring(1);
    return lowerCaseWord;
  });

  return wordArray.join(' ');
};
