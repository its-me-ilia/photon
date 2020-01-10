const electron = require('electron');
const url = require('url');
const path = require('path');
const {app, BrowserWindow} = electron;
let window;
app.on('ready', ()=>{
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'window.html'),
        protocol: 'file:',
        slashes: true
    }));
});
