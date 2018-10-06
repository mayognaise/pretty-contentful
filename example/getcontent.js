const fs = require('fs');
const path = require('path');
const { getEntries, getEntry } = require('./util');

const dir = 'dist';

if (!fs.existsSync(dir)) {
  console.log(`> Create ${dir} directory`);
  fs.mkdirSync(dir);
}

const getContents = async () => {
  console.log('> getContents: Starting import...');
  try {
    const data = await getEntries('page');
    fs.writeFileSync(
      path.join(__dirname, '..', dir, 'pages.json'),
      JSON.stringify(data, null, 2)
    );
    console.log('> Succeeded!');
  } catch (err) {
    console.log('> Failed');
    console.log(err);
  }
  return true;
};

const getContent = async () => {
  console.log('> getContent: Starting import...');
  try {
    const data = await getEntry('XNZt3G2nySkKcasU2ma0k');
    fs.writeFileSync(
      path.join(__dirname, '..', dir, 'entry.json'),
      JSON.stringify(data, null, 2)
    );
    console.log('> Succeeded!');
  } catch (err) {
    console.log('> Failed');
    console.log(err);
  }
  return true;
};

getContents();
getContent();
