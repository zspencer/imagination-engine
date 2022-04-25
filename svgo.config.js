module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    {
      name: 'removeAttrs',
      params: { attrs: '(stroke|fill)' }
    }
  ]
}