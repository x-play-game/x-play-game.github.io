const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the current directory
app.use(express.static('.'));

// Handle SPA routing - serve index.html for any route that doesn't match a file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});