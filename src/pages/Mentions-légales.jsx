import Localisation from '../img/icones/localisateur.png';
import Mobile from '../img/icones/mobile.png';
import Email from '../img/icones/email.png';
import Internet from '../img/icones/internet.png';

function Legal() {
    return (
      <div>
        <section className="container padding-top-3 margin-bottom-3">
          <h1>
            MENTIONS LEGALES
          </h1>
          <div className='row'>
                <div className='col-lg-5'></div>
                <div className='col-lg-2 border-bottom-blue'></div>
                <div className='col-lg-5'></div>
              </div>
        </section>

        <section className="container margin-bottom-5">
          <div className="accordion" id="accordionExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Editeur du site
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body text-left">
                  <h3>
                    John Doe
                  </h3>
                  <p>
                    <img src={Localisation} alt='localisation' className='width-6-sm width-4-md width-2-lg' />
                    40 Rue Laure Diebold<br />
                    69009 Lyon
                  </p>
                  <a href='tel:0620304050' className='color-blue decoration-none decoration-underline-hov'>
                    <img src={Mobile} alt='téléphone portable' className='width-6-sm width-4-md width-2-lg' />
                    0620304050
                  </a>
                  <div></div>
                  <a href='mailto:john.doe@gmail.com' className='color-blue decoration-none decoration-underline-hov'>
                    <img src={Email} alt='email' className='width-6-sm width-4-md width-2-lg margin-right-1' />
                    john.doe@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Hébérgeur
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body text-left">
                  <h3>
                    Always Data
                  </h3>
                  <p>
                    91 rue du Faubourg Saint Honoré<br />
                    75008 Paris
                  </p>
                  <a href='https://www.alwaysdata.com/fr/'  className='color-blue decoration-none decoration-underline-hov'>
                    <img src={Internet} alt='internet' className='width-6-sm width-4-md width-2-lg margin-right-1' />
                    www.alwaysdata.com
                  </a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Crédits
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body text-left">
                  <h3>
                    Crédits
                  </h3>
                  <p>
                    Site développé par John Doe, étudiant du CEF.
                  </p>
                  <p>
                    Les images libres de droit sont issues du site , 
                    <a href='https://pixabay.com/fr/' className='color-blue decoration-none decoration-underline-hov'>
                      Pixabay
                    </a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }
  
  export default Legal;