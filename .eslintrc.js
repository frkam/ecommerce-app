/* eslint-disable prettier/prettier */
const { configure, presets } = require('eslint-kit')

module.exports = configure({
  root: __dirname,
  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react({
      version: 'detect',
      newJSXTransform: true
    }),
    presets.imports()
  ],
})
