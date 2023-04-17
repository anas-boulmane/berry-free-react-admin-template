const parseCSV = (string) => {
  const breakPoint = /,|;/;
  const csvHeaders = string.slice(0, string.indexOf('\n')).split(breakPoint);
  const csvRows = string
    .slice(string.indexOf('\n') + 1) // remove headers
    .split('\n')
    .filter((row) => row.length > 0); // remove empty rows

  const csvData = csvRows.map((row) => {
    const values = row.split(breakPoint);
    const entry = csvHeaders.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
    return entry;
  });

  return csvData;
};

export default parseCSV;
