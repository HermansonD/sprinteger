import { describe, it, expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('A truthy statement', () => {
  afterEach(() => {
    cleanup();
  })

  it('should be equal to 10', () => {
    expect(5+5).toEqual(10);
  })
})