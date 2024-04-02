
import './App.css'
import { AboutMe } from './componentes/aboutMe'
import { Contact } from './componentes/contact'
import { Footer } from './componentes/footer'
import { Header } from './componentes/header'
import { Home } from './componentes/home'
import { Proyects } from './componentes/projects'

function App() {
 

  return (
    <>
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Proyects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
        
    </div>
    </>
  )
}

export default App
