import { Lib } from '@/index'
import { describe, expect, it } from '@jest/globals'

describe('index', () => {
  it('should pass', () => {
    const lib = new Lib()
    expect(lib).toBeInstanceOf(Lib)
    expect(lib.sum(3)).toBe(13)
    expect(true).toBe(true)
  })
})
