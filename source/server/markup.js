const markup = (html, states) => {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="render_target">${html}</div>
      </body>
      <script>${states}<script>
      <script src="http://localhost:8080/app.js"></script>
    </html>
  `
}

export default markup
