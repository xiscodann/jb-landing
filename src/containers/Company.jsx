import Image from 'next/image';
import Header from '@components/Header';
import CarouselOfJobs from '@components/CarouselOfJobs';

import companyImage from '@images/company-image.jpg';

import Footer from '@components/Footer';

const jobsEngineering = [
  {
    title: 'Automation/ Engineer Qualifications',
    image: 'services-engineer-automation.jpg',
    subtitle:
      'Employees possess Automation, Robotics or Mechatronics Engineering degrees.',
    description: [
      'Support the day to day automation processes during production as needed',
      'Expertise with Allen-Bradley, Siemens, and CompactLogix',
      'PLC programming and control systems. PLC Programming using ladder, structure text languages',
      'Experience with vision systems, VFD’s, and HMI’s.',
      'Design of electrical design diagrams.',
      'Servo Drive Programming by train or pulse.',
      'Experience programming robots, and troubleshooting problems',
    ],
  },
  {
    title: 'Industrial  Engineer Qualifications',
    image: 'services-engineer-industrial.jpg',
    subtitle: 'Employees possess Industrial Engineering degrees.',
    description: [
      'Experience improving OEE by using visual management, visual metrics and LEAN systems.',
      'Develop/implement lean manufacturing processes to improve production.',
      'Contribute to 5S initiative, ensuring that improvements are sustained and entrenched within the business.',
      'Host Kaizen improvement events.',
      'Ensure the factory layout, both at macro and micro levels, is suitable for an efficient manufacturing process.',
    ],
  },
  {
    title: 'Mechanical Design Engineer',
    image: 'services-engineer-mechanical.jpg',
    subtitle: 'Employees possess Mechanical or electrical engineering degrees.',
    description: [
      'Meet with designers and engineers to discuss design ideas',
      'Developing/present product designs for/to clients.',
      'Ensure product designs meet required safety and general design standards.',
      'Generate/modify/finalize Solid and Surface CAD models using AutoCAD and SolidWork software.',
      'Present design perspectives for equipment improvements and adaptations.',
      'Completing job reports.',
    ],
  },
];
const jobsTechnical = [
  {
    title: 'Reliability / Maintenance Technicians',
    image: 'services-technical-reliability.jpg',
    subtitle:
      'Employees possess Mechanical and Electrical Engineering degrees.',
    description: [
      'Ability to troubleshot pneumatic, hydraulic systems',
      'Ability to work with low and mid voltage equipment.',
      'Experience with conveyors, servo motors, VFD’s and valves.',
      'Understanding of HMI, and PLC equipment. Basic troubleshooting.',
      'Preventive and predictive maintenance.',
      'Develop/implement preventive maintenance procedures.',
      'Experience working with CMMS, and work order systems.',
      'Objective is to improve overall equipment effectiveness (OEE).',
    ],
  },
  {
    title: 'Injection/Blow Molding Technicians',
    image: 'services-technical-injection.jpg',
    subtitle:
      'Employees possess Mechanical and Electrical Engineering degrees.',
    description: [
      'Adhere to preventive maintenance processes for mold and equipment set-up.',
      'Comply with all company and EH&S safety policies and procedures.',
      'Maintain drawing specs following process temperatures and injection pressures to detect non-conformances.',
      'Verify settings by measuring positions, first-run part, and sample work pieces.',
      'Calculate dimensions and tolerances using knowledge of mathematics and instruments such as micrometers, Vernier calipers, and optical comparator.',
    ],
  },
  {
    title: 'Certified Welders',
    image: 'services-technical-welders.jpg',
    subtitle: 'Employees with welding certifications from technical schools.',
    description: [
      'Reading and understanding blueprints prior to starting a project',
      'Sourcing the materials to be used in the project',
      'Measuring and cutting materials to specifications',
      'Welding materials using the correct materials to join the metals together',
      'Checking finished work to make sure that it falls within the tolerances marked on the blueprints',
    ],
  },
  {
    title: 'Certified HVAC',
    image: 'services-technical-hvac.jpg',
    subtitle:
      'Employees with HVAC certifications from technical schools in Mexico.',
    description: [
      'Installing, maintaining and repairing ventilation and air conditioning systems and equipment.',
      'Identifying maintenance risks on equipment.',
      'Diagnosing electrical and mechanical faults for HVAC systems.',
      'Cleaning, adjusting and repairing systems, and performing warranty services.',
      'Performing emergency repairs promptly and efficiently',
      'Providing technical direction and on-the-job training',
      'Keeping daily logs and records of all maintenance functions',
      'Ensuring compliance with appliance standards and with Occupational Health and Safety Act',
      'Complying with service standards, work instructions and customers’ requirements',
      'Assisting with customers’ queries',
    ],
  },
  {
    title: 'Certified CNC Technicians',
    image: 'services-technical-cnc.jpg',
    subtitle:
      'Employees with Mechanical and Electrical engineering degrees from technical schools in Mexico.',
    description: [
      'Maintain and repair all assets to ensure their proper operating condition',
      'Provide preventative and correct maintenance on various complex CNCs – 5 axis milling, mill turn applications, horizontal and vertical lathes',
      'Troubleshoot and repair control & electrical system failures involving – PLCs, HMIs, servomotors, servo amplifiers, input/output, field sensors, and more',
      'Troubleshoot and repair various machine tool hydraulic and pneumatic systems – actuators, valves, pumps, filters, and more',
      'Troubleshoot and repair machine tool mechanical systems – ball screws, linear rails, guideways, gearboxes and more',
    ],
  },
];

const benefits = [
  {
    icon: 'logistics',
    description: 'We handle logistics; housing, transportation',
  },
  {
    icon: 'solve',
    description: 'Solve immediate and long-term talent needs',
  },
  {
    icon: 'immigration',
    description: 'We handle all the immigration process for the work visas',
  },
  {
    icon: 'retention',
    description: '98% employee retention',
  },
  {
    icon: 'improve',
    description:
      'Improve safety, profits, and efficiencies with self motivated employees',
  },
  {
    icon: 'relocation',
    description: 'Save on relocation, payroll taxes, and more',
  },
];

const Company = () => {
  return (
    <>
      <Header />
      <article className='company-content' id='company-content'>
        <div className='company__image'>
          <Image src={companyImage} alt='Company image' fill />
        </div>
        <section className='company container mx-auto row'>
          <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
            <h1>FIND YOUR TECHNICAL TALENT WITH JOE BAR BUSINESS</h1>
            <div className='w-100 text-center text-sm-start'>
              <a href='#contact' className='btn'>
                CONTACT US
              </a>
            </div>
          </div>
        </section>
      </article>
      <article className='px-2' data-aos='fade-up'>
        <section className='container col-12 col-md-10 mx-auto help-your-business'>
          <div className='help-your-business__benefits'>
            <h4>BENEFITS</h4>
            <h3>HOW DO WE HELP YOUR BUSINESS?</h3>
          </div>
          <div className='help-your-business__explain g-4'>
            {benefits.map(({ icon, description }, index) => (
              <div className='help-your-business__explain--card' key={index}>
                <div className='help-your-business__explain--image'>
                  <Image
                    src={
                      icon ? require(`../assets/icons/company-${icon}.png`) : ''
                    }
                    alt={`${icon}`}
                    fill
                  />
                </div>
                <p className='card-text'>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <article className='list-services px-2 anchor' id='jobs'>
        <section
          className='container list anchor'
          id='engineering'
          data-aos='fade-up'
        >
          <CarouselOfJobs data={jobsEngineering} type='engineering' />
        </section>
        <span className='list-services__separator'></span>
        <section
          className='container list anchor'
          id='technical'
          data-aos='fade-up'
        >
          <CarouselOfJobs data={jobsTechnical} type='technical' />
        </section>
      </article>
      <article id='contact' className='px-2 px-md-0 anchor' data-aos='fade-up'>
        <section className='container col-12 col-lg-8 contact-form mx-auto'>
          <h3>CONTACT US</h3>
          <h4>INNOVATIVE SOLUTIONS FOR YOUR BUSINESS</h4>
          <form className='col-12 mx-auto contact__form--form'>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                required
              />
              <label htmlFor='name'>Name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='text'
                className='form-control'
                id='organization'
                placeholder='Organization name'
                required
              />
              <label htmlFor='organization'>Organization name</label>
            </div>
            <div className='form-floating mb-3'>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Email'
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='form-floating'>
              <textarea
                className='form-control'
                placeholder='Leave a comment here'
                id='message'
                required
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>
            <div className='text-center'>
              <button type='submit' className='btn'>
                SEND
              </button>
            </div>
          </form>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default Company;
