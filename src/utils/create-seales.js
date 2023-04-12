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
        result[key] = type === 'number' || type === 'integer' ? Number(value) : value;
      }
    });
    return result;
  });
};

export default createSealesFromRowData;
