/*
 * @Author: Innei
 * @Date: 2020-07-14 21:14:17
 * @LastEditTime: 2020-07-14 22:32:05
 * @LastEditors: Innei
 * @FilePath: /electron-webpack/src/main/main.ts
 * @Coding with Love
 */
import { app, BrowserWindow } from 'electron'
// import { registerTray } from './common/tray'
import { createWindow } from './common/window'

let mainWindow: BrowserWindow
app.on('ready', () => {
  mainWindow = createWindow()
  // registerTray(mainWindow)
  app.show()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
