const contentful = require('contentful');
const prettyContentful = require('../index');

const accessToken = 'e240c199fd7e81033391edca084c2461329fc919b322a01b69ae08ed99f470c1';
const space = '57ms2witonnw';

const client = contentful.createClient({
  accessToken,
  space
});

const getEntries = async (contentType, query = {}) => {
  query.content_type = contentType;
  query.include = 3;
  try {
    const entries = await client.getEntries(query);
    return prettyContentful(entries.items);
  } catch (error) {
    return error;
  }  
};

const getEntry = async id => {
  try {
    const entry = await client.getEntry(id);
    return prettyContentful(entry);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getEntries,
  getEntry
};
