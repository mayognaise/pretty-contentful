const parseItem = item => {
  if (typeof item !== 'object' || item === null || !item.sys || !item.fields) { return item; }
  const data = {
    id: item.sys.id,
    createdAt: item.sys.createdAt,
    updatedAt: item.sys.updatedAt,
    locale: item.sys.locale,
    spaceId: item.sys.space && item.sys.space.sys.id,
    contentType: item.sys.contentType && item.sys.contentType.sys.id
  };
  Object.keys(item.fields).forEach(key => {
    const newItem = item.fields[key];
    data[key] = parseItems(newItem);
  });
  return data;
};

const parseItems = data => {
  if (!Array.isArray(data)) { return parseItem(data); }
  return data.map(parseItem);
};

module.exports = parseItems;
