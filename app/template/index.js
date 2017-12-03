export default (html,state) =>
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>React-SSR</title>
        <link rel="stylesheet" href="/assets/app.css"/>
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
    </script>
    <script src="/assets/bundle.js"></script>
</html>`