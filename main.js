const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { dialog } = require('electron')

const createWindow = () => {
    let win = new BrowserWindow({
        width: 1215,
        height: 910,
        resizable: false,
        title: "wetool",
        icon: path.join(__dirname, "./src/assets/logo.ico"),
        transparent: true,
        webPreferences: {
            // 定义预加载的js
            preload: path.resolve(__dirname, './src/js/my.js'),
            contextIsolation: false,
            nodeIntegration: true
        },
        frame: false
    })

    win.on('closed', function() {
        win = null
    })

    ipcMain.on('window-close', function() {
        win.close()
    })
    ipcMain.on('close', function() {
        win.close()
    })

    win.loadFile('./src/html/Main/index.html')
        // win.loadURL('http://localhost:3000')

    // win.webContents.openDevTools()


}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})