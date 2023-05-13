import './App.css'
import { Header } from "./components/header/Header"
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Service } from './components/services/Service'
import { Qualification } from './components/qualifications/Qualification'
import { Contact } from './components/contact/Contact'
// import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <div className="App">

      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Contact />
      </main>
    </div>
  )
}

export default App
