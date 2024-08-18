export const groupByField = (arr, field) => {
  return arr.reduce((acc, item) => {
    if(!acc[item[field]]) acc[item[field]] = [];
    acc[item[field]].push(item);
    return acc;
  }, {})
}
