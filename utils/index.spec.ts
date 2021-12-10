import { isSSR } from "."
import { simulatedSSR } from "../jest.utils"

describe("isSSR()", () => {
  it("returns true when run on server", () => {
    simulatedSSR(() => {
      expect(isSSR()).toBe(true)
    })
  })

  it("returns false when run on client", () => {
    expect(isSSR()).toBe(false)
  })
})
