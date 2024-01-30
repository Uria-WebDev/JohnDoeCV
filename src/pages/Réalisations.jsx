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
          <div className='row gap-3'>
            <div className='col-lg border-radius-10 box-shadow-2 padding-0 background-white'>
              <div className='background-cwhite padding-bottom-3'>
                <img src={FreshFood} alt='Fresh Food' className='width-100 border-top-radius-10 margin-bottom-3' />
                <h2>Fresh Food</h2>
                <p>
                  Réalisation d'un site web avec commande en ligne.
                </p>
                <button className='color-blue border-radius-5 border-none padding-0-5 transform border-blue padding-left-2 padding-right-2'>
                  Voir
                </button>
              </div>
              <div>
                <p className='margin-top-3'>
                  Site réalisé avec PHP et MySQL
                </p>
              </div>
            </div>

            <div className='col-lg border-radius-10 box-shadow-2 padding-0 background-white'>
              <div className='background-cwhite padding-bottom-3'>
                <img src={Akira} alt='Restaurant Akira' className='width-100 border-top-radius-10 margin-bottom-3' />
                <h2>Restaurant Akira</h2>
                <p>
                  Réalisation d'un site vitrine.
                </p>
                <button className='color-blue border-radius-5 border-none padding-0-5 transform border-blue padding-left-2 padding-right-2'>
                  Voir
                </button>
              </div>
              <div>
                <p className='margin-top-3'>
                  Site réalisé avec WordPress
                </p>
              </div>
            </div>

            <div className='col-lg border-radius-10 box-shadow-2 padding-0 background-white'>
              <div className='background-cwhite padding-bottom-3'>
                <img src={BienEtre} alt='Bien-être' className='width-100 border-top-radius-10 margin-bottom-3' />
                <h2>Espace bien-être</h2>
                <p>
                  Réalisation d'un site vitrine pour un patricien de bien-être.
                </p>
                <button className='color-blue border-radius-5 border-none padding-0-5 transform border-blue padding-left-2 padding-right-2'>
                  Voir
                </button>
              </div>
              <div>
                <p className='margin-top-3'>
                  Site réalisé en HTML/CSS
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Realisations;