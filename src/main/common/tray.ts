/*
 * @Author: Innei
 * @Date: 2020-07-14 21:57:10
 * @LastEditTime: 2020-07-14 21:59:37
 * @LastEditors: Innei
 * @FilePath: /electron-webpack/src/main/common/tray.ts
 * @Coding with Love
 */
// if you need a tray for window or GTK+

import { app, BrowserWindow, Menu, Tray } from 'electron'
import { resolve } from 'path'

const iconPath = resolve(__static, 'logo.png')
export let tray: Tray

export const registerTray = (window: BrowserWindow) => {
  tray = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示',
      role: 'redo',
      click: () => {
        if (window) {
          window.show()
        }
      },
    },
    {
      label: '隐藏',
      role: 'minimize',
      click: () => {
        if (window) {
          window.hide()
        }
      },
    },
    {
      label: '退出',
      click: () => {
        app.exit()
      },
    },
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('Tomon')
  tray.on('click', () => {
    if (!window.isVisible()) {
      window.show()
    }
  })
}
