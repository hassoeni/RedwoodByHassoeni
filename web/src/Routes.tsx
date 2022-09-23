// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BerichtensLayout from 'src/layouts/BerichtensLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BerichtensLayout}>
        <Route path="/berichtens/new" page={BerichtenNewBerichtenPage} name="newBerichten" />
        <Route path="/berichtens/{id:Int}/edit" page={BerichtenEditBerichtenPage} name="editBerichten" />
        <Route path="/berichtens/{id:Int}" page={BerichtenBerichtenPage} name="berichten" />
        <Route path="/berichtens" page={BerichtenBerichtensPage} name="berichtens" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/artikel/{id}" page={ArtikelPage} name="artikel" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
