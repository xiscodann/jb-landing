import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';
import Link from 'next/link';
import availableJobs from '../api/jobs-es.json';

import applyImage from '@images/apply-image.jpg';

import Footer from '@components/Footer';

import applyGrowImage from '@images/apply-grow.jpg';
import applySolutionsImage from '@images/apply-solutions.jpg';
import growIcon from '@icons/grow.jpg';
import imapctIcon from '@icons/impact.jpg';
import engineeringIcon from '@icons/engineering.svg';
import technicalIcon from '@icons/technical.svg';

const benefits = [
  {
    icon: 'international-job',
    description: 'Asignación de trabajo internacional',
  },
  {
    icon: 'compensation-package',
    description: 'Paquete de compensación completo y competitivo',
  },
  {
    icon: 'health-insurance',
    description: 'Seguro de salud',
  },
  {
    icon: 'english-class',
    description: 'Clases intensivas de inglés',
  },
  {
    icon: 'accompaniment',
    description:
      'Acompañamiento y asesoría permanente en todo lo relacionado con la asignación internacional.',
  },
];

const Apply = () => {
  return (
    <>
      <Header />
      <article className='apply-content' id='apply-content'>
        <div className='apply__image'>
          <Image src={applyImage} alt='Apply image' fill />
        </div>
        <section className='apply container mx-auto row'>
          <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
            <h1>TRABAJA CON JOE BAR BUSINESS SOLUTIONS</h1>
            {/*<a href='#specialty' className='btn apply__button'>
              ENVIAR MI CV
  </a>*/}
          </div>
        </section>
      </article>
      <article className='px-2'>
        <section className='container col-12 col-md-10 mx-auto we-help-you'>
          <div className='we-help-you__benefits'>
            {/*<h4>JOE BAR BUSINESS</h4>*/}
            <h3>TRABAJA CON NOSOTROS</h3>
            <p>
              Somos expertos en contratar talento técnico internacional (México
              y Canada) para puestos de tiempo completo o proyectos. Te
              invitamos a unirte al equipo que te permitirá crear nuevas
              experiencias, generar impacto y valor a la operación de nuestros
              clientes, trabajando para compañías manufactureras en US.
            </p>
          </div>
          <div className='we-help-you__explain g-4'>
            <div className='row py-4 py-md-5'>
              <div className='col-12 col-lg-6 col-md-5'>
                <div className='we-help-you__image d-none d-md-block'>
                  <Image
                    src={applyGrowImage}
                    alt='Una compañía que te permitirá aprender y crecer'
                    fill
                  />
                </div>
              </div>
              <div className='col-12 col-lg-6 col-md-7 we-help-you__info'>
                <div className='we-help-you__icon align-left'>
                  <Image
                    src={growIcon}
                    alt='Icono para una compañía que te permitirá aprender y crecer'
                    fill
                  />
                </div>
                <h4>UNA COMPAÑÍA QUE TE PERMITIRÁ APRENDER Y CRECER</h4>
                <p>
                  Te unirás a una compañía que te brindará la oportunidad de
                  aprender y adquirir nuevas habilidades tanto a nivel técnico
                  como personal. Te acompañaremos en el proceso de inmersión a
                  una nueva cultura, para que tu proceso de asimilación sea más
                  amigable y rápido.
                </p>
              </div>
            </div>
            <div className='row py-3 py-md-5'>
              <div className='col-12 col-lg-6 col-md-7 we-help-you__info text-md-end'>
                <div className='we-help-you__icon align-right'>
                  <Image
                    src={imapctIcon}
                    alt='Icono para genera soluciones y crea un impacto'
                    fill
                  />
                </div>
                <h4>GENERA SOLUCIONES Y CREA UN IMPACTO</h4>
                <p>
                  Al asumir nuevos retos, pondrás en práctica tus habilidades y
                  competencias, conocerás tu potencial y confirmarás que es
                  posible generar resultados de alto impacto.
                </p>
              </div>
              <div className='col-12 col-lg-6 col-md-5'>
                <div className='we-help-you__image d-none d-md-block'>
                  <Image
                    src={applySolutionsImage}
                    alt='Genera solucioones y crea un impacto'
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <article className='list-content px-2'>
        <h2>¿POR QUÉ TRABAJAR CON NOSOTROS?</h2>
        <p className='text-center'>
          Atendemos tus necesidades como parte esencial de la estrategia
          corporativa para que tengas una mayor proyección profesional y seas
          más competitivo.
        </p>
        <div className='help-your-business__explain g-4'>
          {benefits.map(({ icon, description }, index) => (
            <div className='help-your-business__explain--card' key={index}>
              <div className='help-your-business__explain--image'>
                <Image
                  src={icon ? require(`../assets/icons/apply-${icon}.png`) : ''}
                  alt={`${icon}`}
                  fill
                />
              </div>
              <p className='card-text'>{description}</p>
            </div>
          ))}
        </div>
        {/*<section className='container list anchor' id='engineering'>
          <CarouselOfJobs
            data={jobsEngineering}
            type='engineering'
            isApplyJob
          />
        </section>
        <span className='list-content__separator'></span>
        <section className='container list anchor' id='technical'>
          <CarouselOfJobs data={jobsTechnical} type='technical' isApplyJob />
              </section>*/}
      </article>
      <article className='send-cv px-2'>
        <h2>ENVÍA TU CV</h2>
        <h4 className='mx-auto'>
          PARA SER PARTE DE NUESTROS PROYECTOS DEBES TENER EN CUENTA LO
          SIGUIENTE:
        </h4>
        <div className='send-cv__step'>
          <ul className='step-by-step'>
            <li className='step-by-step__item completed'>
              Tener disponibilidad para radicarte en USA por un período mínimo
              de 3 años.
            </li>
            <li className='step-by-step__item completed'>
              Contar con toda tu documentación al día. (Pasaporte, licencia de
              conduccón y cédula profesional)
            </li>
            <li className='step-by-step__item completed'>
              Cumplir con la experiencia y el perfil descrito según tu
              especialidad.
            </li>
            <li className='step-by-step__item completed'>
              Cargar tu currículo en formato PDF, <span>en inglés</span>.
            </li>
          </ul>
        </div>
      </article>
      <article className='select-specialty px-2 anchor' id='specialty'>
        <h4>SELECCIONA TU ESPECIALIDAD</h4>
        <section className='container row mx-auto hiring d-flex justify-content-center'>
          <div className='col-12 col-md-6 col-lg-5 col-xl-3 text-center my-2'>
            <div className='hiring__card red d-flex justify-content-start h-100'>
              <div className='hiring__card--image'>
                <Image src={engineeringIcon} alt='Engineering services' fill />
              </div>
              <p className='hiring__card--title'>INGENIERÍA</p>
              <ul className='hiring__card--list'>
                {availableJobs.map(({ type, match, shortTitle }, index) => {
                  if (type === 'engineer') {
                    return (
                      <li key={`${match}-${index}`}>
                        <Link href={`/apply/${match}`} scroll={false}>
                          {shortTitle}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          {/*<div className='col-12 col-md-6 col-lg-5 col-xl-3 text-center my-2'>
            <div className='hiring__card blue d-flex justify-content-start h-100'>
              <div className='hiring__card--image'>
                <Image src={technicalIcon} alt='Technical services' fill />
              </div>
              <p className='hiring__card--title'>TÉCNICO</p>
              <ul className='hiring__card--list'>
                {availableJobs.map(({ type, match, shortTitle }, index) => {
                  if (type === 'technical') {
                    return (
                      <li key={`${match}-${index}`}>
                        <Link href={`/apply/${match}`} scroll={false}>
                          {shortTitle}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
              </div>*/}
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Apply;
