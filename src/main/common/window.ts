/*
 * @Author: Innei
 * @Date: 2020-07-14 21:24:37
 * @LastEditTime: 2020-07-14 22:31:55
 * @LastEditors: Innei
 * @FilePath: /electron-webpack/src/main/common/window.ts
 * @Coding with Love
 */

import { BrowserWindow } from 'electron'
import { join } from 'path'
import { isDev } from '../utils'
import { format } from 'url'
export function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 620,
    width: 400,
    webPreferences: { nodeIntegration: true },
  })
  if (isDev) {
    mainWindow.loadURL(
      `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`,
    )
  } else {
    mainWindow.loadURL(
      format({
        pathname: join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      }),
    )
  }
  return mainWindow
}
