import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'
import Domain from './pages/Domain/Domain'
// import Wines from './pages/Wines/Wines'
import Visit from './pages/Visit/Visit'
import NotFound from './pages/NotFound/NotFound'
import WinesRedirect from './pages/WinesRedirect'
import Footer from './components/Footer/Footer'
import { AgeGateProvider } from './context/AgeGate'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <AgeGateProvider>
        <Routes>
          <Route path='/visite' element={<Visit />} />
          {/* <Route path='/vins' element={<Wines />} /> */}
          <Route path='/vins' element={<WinesRedirect />} />
          <Route path='/domaine' element={<Domain />} />
          <Route path='/' exact element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AgeGateProvider>
    </Router>
  )
}
export default App
