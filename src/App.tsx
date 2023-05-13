import './App.css'
import { Header } from "./components/header/Header"
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Service } from './components/services/Service'
import { Qualification } from './components/qualifications/Qualification'
import { Contact } from './components/contact/Contact'
// import { Toaster } from 'react-hot-toast'
import { Footer } from './components/footer/Footer'
import { ScrollUp } from './components/scrollup/Scrollup'
import { Work } from './components/work/Work'
function App() {
  return (
    <div className="App">

      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Work />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App
