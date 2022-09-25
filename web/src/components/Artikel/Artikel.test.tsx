import { render } from '@redwoodjs/testing/web'

import Artikel from './Artikel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Artikel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Artikel />)
    }).not.toThrow()
  })
})
