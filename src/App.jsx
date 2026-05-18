import React from 'react'
import appRoute from './Routes'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
          <Routes>
            {appRoute.map((r, i) => {
              const com = r.element;
              const element = React.isValidElement(com) ? com : React.createElement(com);
              return <Route key={i} path={r.path} element={element} />;
            })}
          </Routes>
        <Footer />
    </div>
  )
}

export default App
