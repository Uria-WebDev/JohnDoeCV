import JohnDoe from '../img/JohnDoe.jpg';

function Home() {
    return (
      <div>
        <section className='background-img'>
          <div className='padding-top-20 padding-bottom-20'>
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <a href='#A-propos'>
              <button className='color-white background-blue border-radius-5 border-none padding-0-5 transform'>
                En savoir plus
              </button>
            </a>
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

                <p>HTML 90%</p>
                <progress max="100" value="90" className='width-100' />

                <p>CSS 80%</p>
                <progress max="100" value="80" className='width-100' />

                <p>JAVASCRIPT 70%</p>
                <progress max="100" value="70" className='width-100' />

                <p>PHP 60%</p>
                <progress max="100" value="60" className='width-100' />

                <p>REACT 50%</p>
                <progress max="100" value="50" className='width-100' />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;