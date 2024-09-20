const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const md = new markdownIt();

// Chemin vers ton fichier .md
const mdFilePath = path.join(__dirname, './month/octobre.md');

// Lire le fichier Markdown
fs.readFile(mdFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
    return;
  }

  // Convertir le Markdown en HTML
  const result = md.render(data);

  // Ajouter du CSS pour styliser le HTML
  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recettes d'octobre</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
      h1, h2, h3 {
        color: #2c3e50;
      }
      h1 {
        text-align: center;
        margin-bottom: 40px;
      }
      h3 {
        margin-top: 30px;
        background-color: #e74c3c;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      ul li {
        background-color: #ecf0f1;
        margin: 5px 0;
        padding: 10px;
        border-radius: 5px;
      }
      pre, code {
        background-color: #e0e0e0;
        padding: 5px;
        border-radius: 5px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      th, td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      th {
        background-color: #2980b9;
        color: white;
      }
      td {
        background-color: #f4f4f4;
      }
      .total {
        font-weight: bold;
        background-color: #3498db;
        color: white;
        padding: 10px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Recettes d'octobre</h1>
    ${result}
  </body>
  </html>
  `;

  // Optionnel : Sauvegarder le HTML avec le CSS
  const htmlFilePath = path.join(__dirname, './month/octobre.html');
  fs.writeFile(htmlFilePath, htmlTemplate, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier HTML:', err);
      return;
    }
    console.log('Conversion réussie ! Le fichier HTML est disponible à :', htmlFilePath);
  });
});
