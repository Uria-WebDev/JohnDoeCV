import Background from '../img/background.jpg';
import Ordinateur from '../img/services/ordinateur.png';
import Fichier from '../img/services/fichier.png';
import Loupe from '../img/services/loupe.png';

function Services() {
    return (
      <div className='margin-bottom-10'>
        <img src={Background} alt='fond en bleu' className='width-100' />
        <section className='container padding-top-3 margin-bottom-3'>
          <h1>
            MON OFFRE DE SERVICES
          </h1>
          <p>Voici les préstations sur lesquelles je peut intervenir.</p>
          <div className='row'>
            <div className='col-lg-5'></div>
            <div className='col-lg-2 border-bottom-blue'></div>
            <div className='col-lg-5'></div>
          </div>
        </section>

        <section className='container padding-top-3'>
          <div className='row gap-3'>
            <div className='col-lg border-radius-10 box-shadow-2 padding-top-5 padding-bottom-5'>
              <img src={Ordinateur} alt='Ordinateur' className='width-10 margin-bottom-3' />
              <h2>UX DESIGN</h2>
              <p>
                L'
                <strong> UX Design </strong>
                est une méthode de conceptioncentrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
              </p>
            </div>

            <div className='col-lg border-radius-10 box-shadow-2 padding-top-5 padding-bottom-5'>
              <img src={Fichier} alt='Fichier' className='width-10 margin-bottom-3' />
              <h2>DEVELOPPEMENT WEB</h2>
              <p>
                Le
                <strong> développement web de sites web </strong>
                repose sur l'utilisation des langages HTML, CSS, JavasScript et PHP.
              </p>
            </div>

            <div className='col-lg border-radius-10 box-shadow-2 padding-top-5 padding-bottom-5'>
              <img src={Loupe} alt='Loupe' className='width-10 margin-bottom-3' />
              <h2>REFERENCEMENT</h2>
              <p>
                Le
                <strong> Référencement naturel d'un site, </strong>
                Ausi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats de recherche.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Services;