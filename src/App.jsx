import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home/Home'
import Domain from './pages/Domain/Domain'
import Wines from './pages/Wines/Wines'
import Visit from './pages/Visit/Visit'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path='/visite' element={<Visit />} />
        <Route path='/vins' element={<Wines />} />
        <Route path='/domaine' element={<Domain />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
