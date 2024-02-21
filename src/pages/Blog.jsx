import Background from '../img/background.jpg';
import Html from '../img/Blog/html.jpg';
import Selling from '../img/Blog/selling-product.jpg';
import Google from '../img/Blog/google.jpg';
import Responsive from '../img/Blog/responsive.jpg';
import SEO from '../img/Blog/seo.jpg';
import LearningCode from '../img/Blog/learning-code.jpg';

function Blog() {
    return (
      <div className='margin-bottom-10'>
        <img src={Background} alt='fond en bleu' className='width-100' />
        <section className='container padding-top-3 margin-bottom-3'>
          <h1>
            BLOG
          </h1>
          <p>Retrouvez ici quelques articles sur le développement web.</p>
          <div className='row'>
            <div className='col-lg-5'></div>
            <div className='col-lg-2 border-bottom-blue'></div>
            <div className='col-lg-5'></div>
          </div>
        </section>

        <section className='container padding-top-3'>
          <div className='row rows-cols margin-bottom-3'>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={Html} alt='Code HTML' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Coder son site en HTML/CSS</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-08-22'> 22 Août 2022</time>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={Selling} alt='Vente de produit' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Vendre ses produits sur le web</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-08-20'> 20 Août 2022</time>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={Google} alt='Navigateur Google' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Se positionner sur Google</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-08-01'> 1 Août 2022</time>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={Responsive} alt='Code responsive' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Coder en responsive design</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-07-31'> 31 Juillet 2022</time>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={SEO} alt='SEO' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Techniques de référencement</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-07-30'> 30 Juillet 2022</time>
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6 col-lg-4 margin-bottom-3'>
              <div className='card background-white'>
                <img src={LearningCode} alt='Les différents langages web' className='card-img-top' />
                <div className='card-body background-cwhite'>
                  <h2 className='card-title'>Apprendre à coder</h2>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Lire la suite
                  </a>
                </div>
                <div>
                  <p className='margin-top-3'>
                    Publié le<time dateTime='2022-07-12'> 12 Juillet 2022</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Blog;