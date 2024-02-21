import { Link, Route, Routes } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
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

  const location = useLocation()
  const pathname =location.pathname

  return (
    <div className="App">
      <header className="background-grey padding-top-10px">

        <div className='container mobile-nav'>
          <div className='row'>
            <p className='col-10 text-left color-white'>
              John Doe
            </p>
            <nav className="col-1 navbar navbar-dark padding-top-0 padding-left-0">
              <div className="container-fluid padding-left-0">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="collapse me-auto mb-lg-0" id="navbarToggleExternalContent">
          <div className='navbar-nav  me-auto mb-2 mb-lg-0 text-left container'>
            <Link to='/' className={pathname=='/' ? 'col-md-1 color-white color-white-hov decoration-none' : 'col-md-1 color-grey color-white-hov decoration-none'}>
              Accueil
            </Link>
            <Link to='/services' className={pathname=='/services' ? 'col-md-1 color-white color-white-hov decoration-none' : 'col-md-1 color-grey color-white-hov decoration-none'}>
              Services
            </Link>
            <Link to='/realisations' className={pathname=='/realisations' ? 'col-md-1 color-white color-white-hov decoration-none' : 'col-md-1 color-grey color-white-hov decoration-none'}>
              Réalisations
            </Link>
            <Link to='/blog' className={pathname=='/blog' ? 'col-md-1 color-white color-white-hov decoration-none' : 'col-md-1 color-grey color-white-hov decoration-none'}>
              Blog
            </Link>
            <Link to='/contact' className={pathname=='/contact' ? 'col-md-1 color-white color-white-hov decoration-none' : 'col-md-1 color-grey color-white-hov decoration-none'}>
              Contact
            </Link>
          </div>
        </div>

        <nav className='container desktop-nav'>
          <div className='row'>
            <p className='col-md-2 col-lg-7 text-left color-white'>
              John Doe
            </p>
            <Link to='/' className={pathname=='/' ? 'col-md-2 col-lg-1 color-white color-white-hov decoration-none' : 'col-md-2 col-lg-1 color-grey color-white-hov decoration-none'}>
              Accueil
            </Link>
            <Link to='/services' className={pathname=='/services' ? 'col-md-2 col-lg-1 color-white color-white-hov decoration-none' : 'col-md-2 col-lg-1 color-grey color-white-hov decoration-none'}>
              Services
            </Link>
            <Link to='/realisations' className={pathname=='/realisations' ? 'col-md-2 col-lg-1 color-white color-white-hov decoration-none' : 'col-md-2 col-lg-1 color-grey color-white-hov decoration-none'}>
              Réalisations
            </Link>
            <Link to='/blog' className={pathname=='/blog' ? 'col-md-2 col-lg-1 color-white color-white-hov decoration-none' : 'col-md-2 col-lg-1 color-grey color-white-hov decoration-none'}>
              Blog
            </Link>
            <Link to='/contact' className={pathname=='/contact' ? 'col-md-2 col-lg-1 color-white color-white-hov decoration-none' : 'col-md-2 col-lg-1 color-grey color-white-hov decoration-none'}>
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/realisations' element={<Realisations />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/mentions-légales' element={<Legal />}></Route>
        </Routes>
      </main>

      <footer className='background-white padding-top-3'>
        <div className='container padding-bottom-2'>
          <div className='row rows-cols text-left'>

            <div className='col-md-6 col-lg-3 margin-bottom-3'>
              <h4 className='color-black'>John Doe</h4>
              <p className='margin-bottom-1 color-dgrey'>40 Rue Laure Diebold</p>
              <p className='margin-bottom-1 color-dgrey'>69009 Lyon, France</p>
              <a href='tel:0620304050' className='color-dgrey decoration-none decoration-underline-hov'>Téléphone : 06 20 30 40 50</a>
              <div className='row padding-top-5'>
                <a href='https://github.com/' target='blank' className='col opacity'>
                  <img src={Github} alt='github' className='width-30-sm width-50-md width-70-lg' />
                </a>
                <a href='https://twitter.com/?lang=fr' target='blank' className='col opacity'>
                  <img src={Twitter} alt='twitter' className='width-30-sm width-50-md width-70-lg' />
                </a>
                <a href='https://fr.linkedin.com/' target='blank' className='col opacity'>
                  <img src={Linkedin} alt='linkedin' className='width-30-sm width-50-md width-70-lg' />
                </a>
              </div>
            </div>
          

            <div className='col-md-6 col-lg-3'>
              <h4 className='color-black'>Liens utiles</h4>
              <ul>
                <li><Link to='/' className='color-dgrey decoration-none decoration-underline-hov'>Accueil</Link></li>
                <li><Link to ='/' className='color-dgrey decoration-none decoration-underline-hov'>A propos</Link></li>
                <li><Link to='/services' className='color-dgrey decoration-none decoration-underline-hov'>Services</Link></li>
                <li><Link to='/contact' className='color-dgrey decoration-none decoration-underline-hov'>Me contacter</Link></li>
                <li><Link to='/mentions-légales' className='color-dgrey decoration-none decoration-underline-hov'>Mentions légales</Link></li>
              </ul>
            </div>

            <div className='col-md-6 col-lg-3'>
              <h4 className='color-black'>Mes dernières réalisations</h4>
              <ul>
                <li><Link to='/realisations' className='color-dgrey decoration-none decoration-underline-hov'>Fresh food</Link></li>
                <li><Link to='/realisations' className='color-dgrey decoration-none decoration-underline-hov'>Restaurant Akira</Link></li>
                <li><Link to='/realisations' className='color-dgrey decoration-none decoration-underline-hov'>Espace bien-être</Link></li>
              </ul>
            </div>

            <div className='col-md-6 col-lg-3'>
              <h4 className='color-black'>Mes derniers articles</h4>
              <ul>
                <li><Link to='/blog' className='color-dgrey decoration-none decoration-underline-hov'>Coder son site en HTML/CSS</Link></li>
                <li><Link to='/blog' className='color-dgrey decoration-none decoration-underline-hov'>Vendre ses produits sur le web</Link></li>
                <li><Link to='/blog' className='color-dgrey decoration-none decoration-underline-hov'>Se positionner sur Google</Link></li>
              </ul>
            </div>

          </div>
        </div>
        <div className='background-grey padding-top-0-5 padding-bottom-0-5'>
          <small>
            © Designed by John Doe
          </small>
        </div>
        <div className='background-white padding-1'></div>
      </footer>
    </div>
  );
}

export default App;
