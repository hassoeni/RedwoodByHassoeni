import { render } from '@redwoodjs/testing/web'

import ArtikelPage from './ArtikelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArtikelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArtikelPage />)
    }).not.toThrow()
  })
})
