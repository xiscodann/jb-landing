import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Check from '@components/Check';
import Image from 'next/image';
import { formatBytes } from '@helpers/formatBytes';

import iconFile from '@icons/file-icon.png';

const MAX_WEIGHT = 10485760; //bytes 10485760

const Job = ({ job }) => {
  const [step, setStep] = useState(0);
  const [selectedFile, setSelectedFile] = useState(0);
  const [selectedFileError, setSelectedFileError] = useState(false);
  const [dataVacancy, setDataVacancy] = useState({
    name: '',
    surname: '',
    age: '',
    martial_status: '',
    childrens: '',
    address: '',
    phone_number: '',
    //-------
    physical_disability: '',
    physical_disability_explain: '',
    move_and_work_usa: '',
    current_salary: '',
    hold_technical_interview: '',
    date_available_for_project: '',
    //-------
    passport: '',
    expire_passport: '',
    professional_card: '',
    driver_license: '',
    complete_covid_vaccine: '',
    wich_vaccine: '',
    deported: '',
    deported_explain: '',
    visa_denial: '',
    visa_denial_explain: '',
    tourist_visa: '',
    tourist_visa_expire: '',
    //--------
    work_visa: '',
    work_visa_expire: '',
    criminal_record: '',
    criminal_record_explain: '',
    accept_terms: '',
    //--------
    file: '',
  });

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

  useEffect(() => {
    const element = document.getElementById(`step-${step}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [step]);
  return (
    <>
      <Header />
      <article className='work-form-content' id='work-form'>
        <section className='work-form container mx-auto row'>
          <div className='col-12 col-md-10 col-lg-9 col-xl-7'>
            <h1>
              <span>Pre-validation</span> data vacancy {job}
            </h1>
            <p>
              The survey will take approximately 5 minutes to complete. This
              questionnaire is intended to obtain relevant information to start
              the selection process for the indicated vacancy. It is very
              important that the information you provide us is correct and
              truthful since in this way it will allow us to continue in an
              appropriate way and support us in adjusting your profile for the
              best project.
            </p>
            {step === 0 ? (
              <button
                type='button'
                className='btn text-uppercase work-form__button mt-4'
                onClick={() => setStep(1)}
              >
                START
              </button>
            ) : null}
          </div>
        </section>
      </article>
      <article>
        <section className='container mx-auto work-form__form'>
          {step >= 1 ? (
            <form
              className='col-12 col-lg-10 col-xl-7 mx-auto contact__form my-5 anchor'
              id='step-1'
              onSubmit={(e) => (e.preventDefault(), setStep(2))}
            >
              <div className='separator mb-5'>
                <div className='separator-text'>PASO 1</div>
              </div>
              <div className='row g-3 mx-auto mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Names'
                      value={dataVacancy.name}
                      onChange={(e) =>
                        setDataVacancy({ ...dataVacancy, name: e.target.value })
                      }
                      required
                    />
                    <label htmlFor='name'>Names</label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='surname'
                      placeholder='Surnames'
                      value={dataVacancy.surname}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          surname: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='surname'>Surnames</label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='number'
                      className='form-control'
                      id='age'
                      placeholder='Age'
                      value={dataVacancy.age}
                      onChange={(e) =>
                        setDataVacancy({ ...dataVacancy, age: e.target.value })
                      }
                      required
                    />
                    <label htmlFor='age'>Age</label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='marital_status'
                      defaultValue={dataVacancy.marital_status}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          marital_status: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Married'>Married</option>
                      <option value='Single'>Single</option>
                      <option value='Divorced'>Divorced</option>
                    </select>
                    <label htmlFor='marital_status'>Marital status</label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='childrens'
                      defaultValue={dataVacancy.childrens}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          childrens: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='childrens'>You have children?</label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='Home address'
                      value={dataVacancy.address}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          address: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='address'>Home address</label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='number'
                      className='form-control'
                      id='phone_number'
                      placeholder='Cell phone number'
                      value={dataVacancy.phone_number}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          phone_number: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='phone_number'>Cell phone number</label>
                  </div>
                </div>
              </div>
              {step === 1 ? (
                <div className='text-center mt-3'>
                  <button type='submit'>Continue</button>
                </div>
              ) : null}
            </form>
          ) : null}
          {step >= 2 ? (
            <form
              className='col-12 col-lg-10 col-xl-7 mx-auto contact__form my-5 anchor'
              id='step-2'
              onSubmit={(e) => (e.preventDefault(), setStep(3))}
            >
              <div className='separator mb-5'>
                <div className='separator-text'>PASO 2</div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='physical_disability'
                      defaultValue={dataVacancy.physical_disability}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          physical_disability: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='physical_disability'>
                      Do you have a physical disability?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='text'
                      className='form-control'
                      id='physical_disability_explain'
                      placeholder='Briefly describe'
                      value={dataVacancy.physical_disability_explain}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          physical_disability_explain: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='physical_disability_explain'>
                      Briefly describe
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='move_and_work_usa'
                      defaultValue={dataVacancy.move_and_work_usa}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          move_and_work_usa: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='No'>NO</option>
                      <option value='Yes, for a year'>Yes, for a year</option>
                      <option value='Yes, for two years'>
                        Yes, for two years
                      </option>
                      <option value='Yes, for three years or more'>
                        Yes, for three years or more
                      </option>
                    </select>
                    <label htmlFor='move_and_work_usa'>
                      Are you available to move and work in the USA?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      type='number'
                      className='form-control'
                      id='current_salary'
                      placeholder='Tell us your current gross monthly salary'
                      value={dataVacancy.current_salary}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          current_salary: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='current_salary'>
                      Tell us your current gross monthly salary
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='hold_technical_interview'
                      defaultValue={dataVacancy.hold_technical_interview}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          hold_technical_interview: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected>Select an option</option>
                      <option value='No'>NO</option>
                      <option value='Yes'>YES</option>
                    </select>
                    <label htmlFor='hold_technical_interview'>
                      Is it possible for you to hold a technical interview in
                      English for 30 minutes?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      id='date_available_for_project'
                      className='form-control'
                      type='date'
                      value={dataVacancy.date_available_for_project}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          date_available_for_project: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='date_available_for_project'>
                      Date on which it would be available for a project in the
                      USA.
                    </label>
                  </div>
                </div>
              </div>
              {step === 2 ? (
                <div className='text-center mt-3'>
                  <button type='submit'>Continue</button>
                </div>
              ) : null}
            </form>
          ) : null}

          {step >= 3 ? (
            <form
              className='col-12 col-lg-10 col-xl-7 mx-auto contact__form my-5 anchor'
              id='step-3'
              onSubmit={(e) => (e.preventDefault(), setStep(4))}
            >
              <div className='separator mb-5'>
                <div className='separator-text'>PASO 3</div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='passport'
                      defaultValue={dataVacancy.passport}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          passport: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='1'>YES</option>
                      <option value='2'>NO</option>
                    </select>
                    <label htmlFor='passport'>
                      Do you currently have a Passport?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      id='expire_passport'
                      className='form-control'
                      type='date'
                      value={dataVacancy.expire_passport}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          expire_passport: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='expire_passport'>
                      Passport expiration date.
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='professional_card'
                      defaultValue={dataVacancy.professional_card}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          professional_card: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='professional_card'>
                      Do you currently have a professional card?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='driver_license'
                      defaultValue={dataVacancy.driver_license}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          driver_license: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='driver_license'>
                      Do you currently have a driver&apos;s license?
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='complete_covid_vaccine'
                      defaultValue={dataVacancy.complete_covid_vaccine}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          complete_covid_vaccine: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='complete_covid_vaccine'>
                      Do you have a complete COVID vaccine schedule?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='wich_vaccine'
                      value={dataVacancy.wich_vaccine}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          wich_vaccine: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='wich_vaccine'>
                      Which Vaccine was the one that was supplied?
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='deported'
                      value={dataVacancy.deported}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          deported: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='deported'>Have you been deported?</label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      placeholder='Explain with dates of the events'
                      id='deported_explain'
                      value={dataVacancy.deported_explain}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          deported_explain: e.target.value,
                        })
                      }
                    ></textarea>
                    <label htmlFor='deported_explain'>
                      Explain with dates of the events
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='visa_denial'
                      value={dataVacancy.visa_denial}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          visa_denial: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='visa_denial'>
                      Have you had a visa denial?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      placeholder='Leave a comment here'
                      id='visa_denial_explain'
                      value={dataVacancy.visa_denial_explain}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          visa_denial_explain: e.target.value,
                        })
                      }
                    ></textarea>
                    <label htmlFor='visa_denial_explain'>
                      briefly explain with dates of the events.
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='tourist_visa'
                      value={dataVacancy.tourist_visa}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          tourist_visa: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='tourist_visa'>
                      Do you currently have a tourist visa?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      id='tourist_visa_expire'
                      className='form-control'
                      type='date'
                      value={dataVacancy.tourist_visa_expire}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          tourist_visa_expire: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='tourist_visa_expire'>
                      Indicate expiration date of the current Tourist Visa
                    </label>
                  </div>
                </div>
              </div>
              {step === 3 ? (
                <div className='text-center mt-3'>
                  <button type='submit'>Continue</button>
                </div>
              ) : null}
            </form>
          ) : null}
          {step >= 4 ? (
            <form
              className='col-12 col-lg-10 col-xl-7 mx-auto contact__form my-5 anchor'
              id='step-4'
              onSubmit={(e) => e.preventDefault()}
            >
              <div className='separator mb-5'>
                <div className='separator-text'>PASO 4</div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='work_visa'
                      value={dataVacancy.work_visa}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          work_visa: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='work_visa'>
                      Do you currently have a work visa?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <input
                      id='work_visa_expired'
                      className='form-control'
                      type='date'
                      value={dataVacancy.work_visa_expired}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          work_visa_expired: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor='work_visa_expired'>
                      Indicate expiration date of the current work Visa
                    </label>
                  </div>
                </div>
              </div>
              <div className='row g-3 mx-auto'>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <select
                      className='form-select'
                      id='criminal_record'
                      defaultValue={dataVacancy.criminal_record}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          criminal_record: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected disabled>
                        Select an option
                      </option>
                      <option value='Yes'>YES</option>
                      <option value='No'>NO</option>
                    </select>
                    <label htmlFor='criminal_record'>
                      Have you had a criminal record?
                    </label>
                  </div>
                </div>
                <div className='col-md my-3'>
                  <div className='form-floating'>
                    <textarea
                      className='form-control'
                      placeholder='Leave a comment here'
                      id='criminal_record_explain'
                      value={dataVacancy.criminal_record_explain}
                      onChange={(e) =>
                        setDataVacancy({
                          ...dataVacancy,
                          criminal_record_explain: e.target.value,
                        })
                      }
                      required
                    ></textarea>
                    <label htmlFor='criminal_record_explain'>
                      briefly explain with dates of the events.
                    </label>
                  </div>
                </div>
              </div>
              <div className='mb-5 mt-4'>
                <div className='separator mb-5'>
                  <div className='separator-text'>
                    Attach your CV in PDF format no larger than{' '}
                    {formatBytes(MAX_WEIGHT)}
                  </div>
                </div>
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
                      onChange={(e) => readFile(e)}
                      accept='application/pdf'
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
                          <p>Browse PDF file from device</p>
                          <p>
                            <span>
                              No larger than {formatBytes(MAX_WEIGHT)}
                            </span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='accept_terms'
                  value={dataVacancy.accept_terms}
                  onChange={(e) =>
                    setDataVacancy({
                      ...dataVacancy,
                      accept_terms: e.target.value,
                    })
                  }
                />
                <label className='form-check-label' htmlFor='accept-terms'>
                  I certify that the answers provided in this document are true
                  and I understand that if I have lied the process will be
                  canceled and I will never be taken into account again.
                </label>
              </div>
              <div className='text-center mt-3'>
                <button type='submit'>SEND</button>
              </div>
            </form>
          ) : null}
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Job;
