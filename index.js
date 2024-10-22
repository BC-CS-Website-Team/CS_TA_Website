const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));

// Helper function to render pages
function renderPage(res, pageName, options = {}) {
  res.render(path.join(__dirname, 'src', 'pages', pageName), { name: 'Ali Ramazani', ...options });
}

// Main pages
app.get('/', (req, res) => renderPage(res, 'index.html'));
app.get('/alumni', (req, res) => renderPage(res, 'alumni.html'));
app.get('/clubs', (req, res) => renderPage(res, 'clubs.html'));
app.get('/contributions', (req, res) => renderPage(res, 'contributions.html'));
app.get('/meet-programmers', (req, res) => renderPage(res, 'meet-programmers.html'));
app.get('/meet-tas', (req, res) => renderPage(res, 'meet-tas.html'));

// Career Development pages
app.get('/career-dev', (req, res) => renderPage(res, 'career-dev/index.html'));
app.get('/career-dev/resources', (req, res) => renderPage(res, 'career-dev/career-resources.html'));
app.get('/career-dev/conferences', (req, res) => renderPage(res, 'career-dev/conferences.html'));
app.get('/career-dev/internships', (req, res) => renderPage(res, 'career-dev/internship-opportunities.html'));

// Creative Space pages
app.get('/creative-space', (req, res) => renderPage(res, 'creative-space/index.html'));
app.get('/creative-space/workshops', (req, res) => renderPage(res, 'creative-space/workshops.html'));

// Diversity pages
app.get('/diversity', (req, res) => renderPage(res, 'diversity/index.html'));
app.get('/diversity/resources', (req, res) => renderPage(res, 'diversity/diversity-resources.html'));
app.get('/diversity/world-map', (req, res) => renderPage(res, 'diversity/world-map.html'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});