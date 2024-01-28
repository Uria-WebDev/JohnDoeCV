import JohnDoe from '../img/JohnDoe.jpg';

function Home() {
    return (
      <div>
        <section className='background-img'>
          <div className='background-black-0-3'>
            <div className='padding-top-20 padding-bottom-20'>
              <h1 className='color-white'>Bonjour, je suis John Doe</h1>
              <h2 className='color-white'>Développeur web full stack</h2>
              <a href='#A-propos'>
                <button className='color-white background-blue border-radius-5 border-none padding-0-5 transform'>
                  En savoir plus
                </button>
              </a>
            </div>
          </div>
        </section>

        <section id='A-propos' className='container box-shadow-1 border-radius-10 margin-top-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 margin-top-3 text-left'>
                <h3 className='border-bottom-blue padding-bottom-2 margin-bottom-3'>A propos</h3>
                <p>
                  Passionné par l'informatique et les nouvelles technologies, j'ai suivis une formation d'
                  <strong>intégrateur-développeur web </strong>
                  au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du
                  <strong> développement web.</strong>
                </p>

                <p>
                  Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de
                  <strong> développeur web full stack.</strong>
                </p>

                <p>
                  j'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                </p>
              </div>

              <div className='col-lg-6 margin-top-3 margin-bottom-3 text-left'>
                <img src={JohnDoe} alt='John Doe' className='width-100' />

                <h3 className='margin-top-3'>Mes compétences</h3>

                <p className='margin-bottom-1'>HTML 90%</p>
                <div className='progress'>
                  <div className="progress-bar bg-danger width-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p className='margin-top-3 margin-bottom-1'>CSS 80%</p>
                <div className='progress'>
                  <div className="progress-bar bg-info width-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p className='margin-top-3 margin-bottom-1'>JAVASCRIPT 70%</p>
                <div className='progress'>
                 <div className="progress-bar bg-warning width-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p className='margin-top-3 margin-bottom-1'>PHP 60%</p>
                <div className='progress'>
                 <div className="progress-bar bg-success width-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p className='margin-top-3 margin-bottom-1'>REACT 50%</p>
                <div className='progress'>
                 <div className="progress-bar width-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;