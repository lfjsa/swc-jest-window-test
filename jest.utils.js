export const simulatedSSR = (assertion) => {
  const { window } = global

  delete global.window

  assertion()

  global.window = window
}
