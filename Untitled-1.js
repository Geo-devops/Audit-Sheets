fetch('https://docs.google.com/spreadsheets/d/12chQQ0bWIsEDQBxsRLTrrS4-w18JWfeSuM9b9FOpzzg/edit?gid=0#gid=0')
.then(response => response.text())
.then(csv => {
    const rows = csv.split('\n').map(row => row.split(','));

});