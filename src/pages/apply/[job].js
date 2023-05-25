import Job from '@containers/Job';
import Seo from '@components/Seo';
import WhatsAppButton from '@components/WhatsAppButton';
import { useRouter } from 'next/router';

const WorkForm = () => {
  const { query } = useRouter();
  const { job } = query;
  return (
    <>
      <Seo />
      <main>
        {job && <Job job={job} />}
        {/*<WhatsAppButton />*/}
      </main>
    </>
  );
};

export default WorkForm;
