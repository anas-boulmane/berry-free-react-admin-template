const createSealesFromRowData = (rowData, schema) => {
  let input = rowData;
  if (!rowData) return null;
  if (!Array.isArray(rowData)) input = [rowData];
  return input.map((row) => {
    const result = {};
    Object.entries(schema).forEach(([key, property]) => {
      const value = row[key.toUpperCase()];
      if (property && property.type) {
        const type = property.type;
        if (type === 'array' && property.items && property.items.type === 'object') {
          const rowProducts = rowData.filter((rowProduct) => rowProduct['ORDERNUMBER'] === row['ORDERNUMBER']);
          result[key] = createSealesFromRowData(rowProducts, property.items.properties);
        } else {
          result[key] = type === 'number' || type === 'integer' ? Number(value) : value;
        }
      }
    });
    return result;
  });
};

export default createSealesFromRowData;
