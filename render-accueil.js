const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');
const md = new markdownIt();

// Chemin vers ton fichier accueil.md
const mdFilePath = path.join(__dirname, './accueil.md');

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
    <title>Recueil de Recettes - Accueil</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9f9f9;
        color: #333;
        padding: 20px;
        margin: 0 auto;
        max-width: 900px;
      }
      h1 {
        text-align: center;
        font-size: 2.5em;
        color: #2c3e50;
        margin-bottom: 50px;
      }
      h2 {
        font-size: 1.75em;
        color: #3498db;
        margin-bottom: 20px;
        text-align: center;
      }
      h3 {
        font-size: 1.25em;
        color: #16a085;
        margin-bottom: 10px;
      }
      p, li {
        font-size: 1.1em;
        line-height: 1.6;
      }
      a {
        text-decoration: none;
        color: #e74c3c;
        font-weight: bold;
      }
      a:hover {
        color: #c0392b;
      }
      .month-container {
        margin: 40px 0;
        background-color: #ecf0f1;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .month-container h3 {
        color: #2980b9;
        margin-bottom: 10px;
      }
      .month-container ul {
        list-style-type: none;
        padding: 0;
      }
      .month-container ul li {
        margin: 10px 0;
        padding: 10px;
        background-color: #ffffff;
        border-radius: 5px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .month-container ul li:hover {
        background-color: #f1c40f;
        cursor: pointer;
      }
      .upcoming {
        background-color: #f1f1f1;
        padding: 10px;
        border-left: 5px solid #2980b9;
        margin-bottom: 20px;
      }
      footer {
        text-align: center;
        margin-top: 50px;
        font-size: 0.9em;
        color: #95a5a6;
      }
    </style>
  </head>
  <body>
    <h1>Recueil de Recettes</h1>
    ${result}
    <footer>
      <p>&copy; 2024 Recueil de Recettes. Tous droits réservés.</p>
    </footer>
  </body>
  </html>
  `;

  // Sauvegarder le HTML avec le CSS
  const htmlFilePath = path.join(__dirname, './index.html');
  fs.writeFile(htmlFilePath, htmlTemplate, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier HTML:', err);
      return;
    }
    console.log('Conversion réussie ! Le fichier HTML est disponible à :', htmlFilePath);
  });
});
