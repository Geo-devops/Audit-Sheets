function doGet() {
    const sheet = SpreadsheetApp.openById('12chQQ0bWIsEDQBxsRLTrrS4-w18JWfeSuM9b9FOpzzg').getActiveSheet();
    const data = sheet.getDataRange().getValues();
    const headers = data.shift();
    const result = data.map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      return obj;
    });
  
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  function doOptions() {
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      
  }
  