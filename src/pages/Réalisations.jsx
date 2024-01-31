import Background from '../img/background.jpg';
import FreshFood from '../img/Réalisations/fresh-food.jpg';
import Akira from '../img/Réalisations/akira.jpg';
import BienEtre from '../img/Réalisations/bien-etre.jpg';

function Realisations() {
    return (
      <div className='margin-bottom-10'>
        <img src={Background} alt='fond en bleu' className='width-100' />
        <section className='container padding-top-3 margin-bottom-3'>
          <h1>
            PORTFOLIO
          </h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className='row'>
            <div className='col-lg-5'></div>
            <div className='col-lg-2 border-bottom-blue'></div>
            <div className='col-lg-5'></div>
          </div>
        </section>

        <section className='container padding-top-3'>
          <div className='row gap-4'>
            <div className='col'>
              <div className='card background-white'>
                <img src={FreshFood} alt='Fresh Food' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Fresh Food</h2>
                  <p className='card-text'>
                    Réalisation d'un site web avec commande en ligne.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Voir
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Site réalisé avec PHP et MySQL
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card background-white'>
                <img src={Akira} alt='Restaurant Akira' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Fresh Food</h2>
                  <p className='card-text'>
                    Réalisation d'un site vitrine.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Voir
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Site réalisé avec WordPress
                  </p>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card background-white'>
                <img src={BienEtre} alt='Espace Bien-être' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Espace bien-être</h2>
                  <p className='card-text'>
                    Réalisation d'un site vitrine pour un patricien de bien-être.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Voir
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Site réalisé en HTML/CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Realisations;