function find(list, item) {
  let result;

  for (let index = 0; index < list.length; index = index + 1) {
    const itemList = list[index];

    const isWantedItem = itemList === item;
    if (isWantedItem) {
      result = itemList;
      break;
    }
  }

  return result;
}

module.exports = find;
