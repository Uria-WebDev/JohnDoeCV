import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Réalisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Mentions-légales';
import Github from './img/contact/github.png';
import Twitter from './img/contact/twitter.png';
import Linkedin from './img/contact/linkedin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <nav>
          <p>John Doe</p>
          <Link to='/'>Accueil</Link>
          <Link to='/services'>Services</Link>
          <Link to='/réalisations'>Réalisations</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='contact'>Me contacter</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/réalisations' element={<Realisations />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/mentions-légales' element={<Legal />}></Route>
        </Routes>
      </main>

      <footer>
        <div>
          <h4>John Doe</h4>
          <small>40 Rue Laure Diebold</small>
          <small>69009 Lyon, France</small>
          <a href='tel:0620304050'><small>Téléphone : 06 20 30 40 50</small></a>
          <div>
            <a href='https://github.com/' target='blank'><img src={Github} alt='github' /></a>
            <a href='https://twitter.com/?lang=fr' target='blank'><img src={Twitter} alt='twitter' /></a>
            <a href='https://fr.linkedin.com/' target='blank'><img src={Linkedin} alt='linkedin' /></a>
          </div>
        </div>

        <div>
          <h4>Liens utiles</h4>
          <Link to='/'><small>Accueil</small></Link>
          <Link to ='/'><small>A propos</small></Link>
          <Link to='/services'><small>Services</small></Link>
          <Link to='/contact'><small>Me contacter</small></Link>
          <Link to='/mentions-légales'><small>Mentions légales</small></Link>
        </div>

        <div>
          <h4>Mes dernières réalisations</h4>
          <Link to='/réalisations'>Fresh food</Link>
          <Link to='/réalisations'>Restaurant Akira</Link>
          <Link to='/réalisations'>Espace bien-être</Link>
        </div>

        <div>
          <h4>Mes derniers articles</h4>
          <Link to='blog'>Coder son site en HTML/CSS</Link>
          <Link to='blog'>Vendre ses produits sur le web</Link>
          <Link to='blog'>Se positionner sur Google</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
