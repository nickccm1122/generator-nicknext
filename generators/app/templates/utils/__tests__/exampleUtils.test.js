import sayHi from '../exampleUtils'

describe('exampleUtils/sayHi', () => {
  test('should return Hi', () => {
    expect(sayHi()).toEqual('Hi')
  })
})
