import Lyon from '../img/contact/Lyon.png';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const elements = form.elements;

    const username = elements.username.value;
    const email = elements.email.value;
    const tel = elements.tel.value;
    const subject = elements.subject.value;
    const text = elements.text.value;

    if (elements.username.value  === '' || elements.email.value  === '' || elements.tel.value  === '' || elements.tel.value  === '' || elements.subject.value  === '' || elements.text.value  === '') {
      alert('Tout les champs doivent être remplis');
    }

    else {
      form.reset();
      alert(`${username} , Votre message à bien été envoyé`);
    }
  }

    return (
      <div className="margin-bottom-10">
        <section className='container padding-top-3 margin-bottom-3'>
          <h1>
            ME CONTACTER
          </h1>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
          <div className='row'>
            <div className='col-lg-5'></div>
            <div className='col-lg-2 border-bottom-blue'></div>
            <div className='col-lg-5'></div>
          </div>
        </section>

        <section className="container">
          <div className="row gap-4">
            <form className="col" onSubmit={handleSubmit}>
              <h2 className="border-bottom-blue margin-bottom-3">Formulaire de contact</h2>
              <div className="form-group margin-bottom-3">
                <input type="username" id='username' className="form-control" placeholder="Votre nom" />
              </div>
              <div className="form-group margin-bottom-3">
                <input type="email" id='email' className="form-control" placeholder="Votre adresse email" />
              </div>
              <div className="form-group margin-bottom-3">
                <input type="tel" id='tel' className="form-control" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="form-group margin-bottom-3">
                <input type="subject" id='subject' className="form-control" placeholder="Sujet" />
              </div>
              <div className="form-group">
                <textarea type="text" id='text' rows='6' className="form-control height-30" placeholder="Votre message" />
              </div>
              <button id="submit" className='btn btn-primary margin-top-3'>
                Envoyer
              </button>
            </form>

            <div className="col">
              <h2 className="border-bottom-blue">Mes coordonées</h2>
              <p>40 rue Laure Diebold, 690069 Lyon, France<br />
              06 20 30 40 50</p>
              <img src={Lyon} alt='Localisation de Lyon' className='width-100' />
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Contact;