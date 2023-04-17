import React, { useState } from 'react';
// material-ui
import { Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { bulkAddSealse } from 'store/seales.store';
import parseCSV from 'utils/parse-csv';
import createSealesFromRowData from 'utils/create-seales';
import sealesDefinition from 'db/schema/seales.schema';
import { backupSeales } from 'db/Replication';
import { restoreSeales } from 'db/Replication';

// ==============================|| SAMPLE PAGE ||============================== //

const sealesSchema = sealesDefinition.properties;
const FileImportPage = () => {
  const [file, setFile] = useState(null);
  const { currentUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const text = e.target.result;
      const rowData = parseCSV(text);
      const parsedData = createSealesFromRowData(rowData, sealesSchema);
      bulkAddSealse(parsedData, currentUser);
    };
    fileReader.readAsText(file);
    handleBackup();
    handleRestore();
  };
  const handleBackup = () => {
    backupSeales();
  };
  const handleRestore = async () => {
    await restoreSeales();
  };
  return (
    <MainCard title="File import">
      <Typography variant="body2"></Typography>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="file" accept=".csv" onChange={(e) => setFile(e.target.files[0])} />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </MainCard>
  );
};

export default FileImportPage;
