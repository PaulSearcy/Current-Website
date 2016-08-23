
const express = require('express');
/*const {resolve} = require('path');*/
const fs = require('fs');
const serveStatic = require('serve-static');
const app = express();

/*app.use('/dist', serveStatic(resolve(__dirname, './dist')));
app.use('/src', serveStatic(resolve(__dirname, './src')));
app.use('/stylesheets', serveStatic(resolve(__dirname, './stylesheets')));
app.use('/node_modules', serveStatic(resolve(__dirname, './node_modules')));*/

const path = require('path');
app.use('/dist', serveStatic(path.join(__dirname, './dist')));
app.use('/src', serveStatic(path.join(__dirname, './src')));
app.use('/stylesheets', serveStatic(path.join(__dirname, './stylesheets')));
app.use('/node_modules', serveStatic(path.join(__dirname, './node_modules')));


app.get('/', (req,res) => {
    let options = { root: __dirname};
    res.sendFile('./index.html',options);
})

let port = 7864;
app.listen(port);