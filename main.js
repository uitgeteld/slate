const { app, BrowserWindow, Menu } = require('electron');
const path = require("node:path");

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/slate.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  Menu.setApplicationMenu(null);

  win.loadFile('dist/renderer/index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});