import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Check from '@components/Check';
import Image from 'next/image';
import { formatBytes } from '@helpers/formatBytes';
import availableJobs from '../api/jobs-es.json';
import { sendCandidateForm } from 'lib/api';

import iconCheck2 from '@icons/check-2.png';
import iconFile from '@icons/file-icon.png';

const MAX_WEIGHT = 10485760; //bytes 10485760
const INITIAL_STATE = {
  name: '',
  lastname: '',
  email: '',
  identification: '',
  hold_technical_interview: '',
  experience: '',
  accept_terms: false,
  file: '',
};

const Job = ({ job }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorSendingMail, setIsErrorSendingMail] = useState(false);
  const [isEmailWasSent, setIsEmailWasSent] = useState(false);
  const [jobFound, setJobFound] = useState([]);
  const [selectedFile, setSelectedFile] = useState(false);
  const [selectedFileError, setSelectedFileError] = useState(false);
  const [dataVacancy, setDataVacancy] = useState(INITIAL_STATE);

  const readFile = (input) => {
    if (input.target?.files && input.target?.files?.length > 0) {
      if (input.target.files[0].type !== 'application/pdf')
        return setSelectedFileError('Make sure the file is PDF');
      if (input.target.files[0].size > MAX_WEIGHT)
        return setSelectedFileError(
          `Make sure that the PDF file weighs less than ${formatBytes(
            MAX_WEIGHT
          )}`
        );
      setSelectedFileError(false),
        setSelectedFile(input.target.files[0]),
        setDataVacancy({ ...dataVacancy, file: input.target.files[0] });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(dataVacancy).forEach((element) => {
      formData.append(element[0], element[1]);
    });

    try {
      setIsLoading(true);
      setIsErrorSendingMail(false);
      setIsEmailWasSent(false);
      const response = await sendCandidateForm(formData);
      if (response.status === 200) {
        setIsEmailWasSent(true);
        setDataVacancy(INITIAL_STATE);
        setSelectedFile(false);
        document.getElementById('file-cv').value = '';
      }
    } catch (err) {
      console.error(err);
      setIsErrorSendingMail(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const isMatchWithAvailableJob = availableJobs.find(
      ({ match }) => job === match
    );
    if (isMatchWithAvailableJob) {
      setJobFound(isMatchWithAvailableJob);
      window.scrollTo(0, 0);
    } else {
      Router.push('/apply#specialty');
    }
  }, [job]);

  return (
    <>
      <Header />
      <article className='work-form-content'>
        <h2 className='work-form__title'>TRABAJA CON JOE BAR BUSINESS</h2>
        <section className='work-form__job'>
          {jobFound && (
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-5 carousel-jobs__item--image'>
                {jobFound.image ? (
                  <Image
                    src={
                      jobFound.image
                        ? require(`../assets/images/${jobFound.image}`)
                        : ''
                    }
                    alt='Company image'
                    fill
                  />
                ) : null}
              </div>
              <div className='col-12 col-lg-6 offset-lg-1'>
                <div className='carousel-jobs__item--subtitle'>
                  <h3>{jobFound.title}</h3>
                  <p className='m-0'>{jobFound.subtitle}</p>
                  <p className='pt-3'>
                    <span>Experience:</span>
                  </p>
                </div>
                <div>
                  {typeof description === 'string' ? (
                    <p>{jobFound.description}</p>
                  ) : null}
                  {typeof jobFound.description === 'object'
                    ? jobFound.description.map((item, i) => (
                        <div key={i} className='carousel-jobs__item--content'>
                          <div className='carousel-jobs__item--check'>
                            <Image src={iconCheck2} alt='Check icon' fill />
                          </div>
                          <p>{item}</p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          )}
        </section>
      </article>
      <article className='experience-container'>
        <section className='container mx-auto experience'>
          <h4 className='experience__list--title'>
            Antes de enviar tu CV recuerda que debes cumplir con estos
            requisitos:
          </h4>
          <ul className='experience__list--cv'>
            <li>Cédula profesional</li>
            <li>Pasaporte vigente mínimo 1 año</li>
            <li>Licencia de conducción</li>
            <li>Certificado de vacunación COVID</li>
          </ul>
        </section>
      </article>
      <article id='job' className='px-2 px-md-0 anchor'>
        <section className='container col-12 col-lg-8 contact-form mx-auto'>
          <h3>TRABAJA CON NOSOTROS</h3>
          <p>Envía tu CV y nos pondremos en contacto contigo.</p>
          {isErrorSendingMail && (
            <div className='alert alert-danger mt-3' role='alert'>
              ¡Oops!, no logramos enviar tu CV. Por favor, intentalo nuevamente
            </div>
          )}
          {isEmailWasSent && (
            <div className='alert alert-success mt-3' role='alert'>
              ¡Genial!, tu CV fue enviado con éxito
            </div>
          )}
          <form
            className='col-12 mx-auto contact__form--form'
            onSubmit={submitForm}
          >
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                value={dataVacancy.name}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    name: e.target.value,
                  })
                }
                required
              />
              <label htmlFor='name'>Nombres</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='lastname'
                placeholder='Apellidos'
                value={dataVacancy.lastname}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    lastname: e.target.value,
                  })
                }
                required
              />
              <label htmlFor='lastname'>Apellidos</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Correo electrónico'
                value={dataVacancy.email}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    email: e.target.value,
                  })
                }
                required
              />
              <label htmlFor='email'>Correo electrónico</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='identification'
                placeholder='Ciudadanía'
                value={dataVacancy.identification}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    identification: e.target.value,
                  })
                }
                required
              />
              <label htmlFor='identification'>Ciudadanía</label>
            </div>
            <div className='col-md my-2 my-md-2'>
              <select
                className='form-select py-3 mb-3'
                id='hold_technical_interview'
                defaultValue=''
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    hold_technical_interview: e.target.value,
                  })
                }
                required
              >
                <option value='' disabled>
                  ¿Puedes sostener una entrevista técnica en inglés?
                </option>
                <option value='Yes, I can hold a technical interview in English'>
                  Si, puedo mantener una entrevista técnica en inglés
                </option>
                <option value='No, I can`t hold a technical interview in English'>
                  No puedo mantener una entrevista técnica en inglés
                </option>
              </select>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='number'
                className='form-control'
                id='experience'
                placeholder={`Años de experiencia en ${job}`}
                value={dataVacancy.experience}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    experience: e.target.value,
                  })
                }
                required
              />
              <label htmlFor='experience'>Años de experiencia en {job}</label>
            </div>
            <div className='mt-5'>
              {selectedFileError ? (
                <div
                  className='alert alert-danger py-2 text-center'
                  role='alert'
                >
                  {selectedFileError}
                </div>
              ) : null}
              <div className='file-upload'>
                <div className='image-upload-wrap'>
                  <input
                    className='file-upload-input'
                    type='file'
                    id='file-cv'
                    onChange={(e) => readFile(e)}
                    accept='application/pdf'
                    required
                  />
                  <div className='drag-text'>
                    {selectedFile ? (
                      <>
                        <div className='file-upload-image'>
                          <Check />
                        </div>
                        <div>
                          <p>{selectedFile.name}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='file-upload-image'>
                          <Image src={iconFile} alt='Icon File' fill />
                        </div>
                        <p>Adjunta tu CV en formato PDF</p>
                        <p>
                          <span>Peso máximo {formatBytes(MAX_WEIGHT)}</span>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='form-check mt-4 d-flex justify-content-center gap-2'>
              <input
                className='form-check-input'
                type='checkbox'
                id='accept_terms'
                checked={dataVacancy.accept_terms}
                onChange={(e) =>
                  setDataVacancy({
                    ...dataVacancy,
                    accept_terms: e.target.value,
                  })
                }
                required
              />
              <label className='form-check-label' htmlFor='accept_terms'>
                Acepto la política de privacidad y datos.
              </label>
            </div>
            <div className='text-center'>
              <button type='submit' className='btn' disabled={isLoading}>
                {isLoading ? 'ENVIANDO' : 'ENVIAR'}
              </button>
            </div>
          </form>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Job;
