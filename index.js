const { app, BrowserWindow, Menu } = require('electron');

const menuTemplate = [
	{
		label: app.name,
		submenu: [
			{
				label: `Quit ${app.name}`,
				accelerator: 'CmdOrCtrl+Q',
				click() {
					app.quit();
				}
			}
		]
	}
];

function createWindow() {
	const win = new BrowserWindow({
		width: 150,
		height: 259,
		webPreferences: {
			nodeIntegration: true
		},
		titleBarStyle: 'hiddenInset',
		resizable: false,
		fullscreenable: false
	});

	win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('ready', () => {
	const mainMenu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(mainMenu);
});

app.on('window-all-closed', () => {
	app.quit();
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
