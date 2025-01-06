import { GetServerSideProps } from 'next';
import { languages, Language } from '../config/languages';

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const preferredLanguage = req.cookies.preferredLanguage;
  
  const isValidLanguage = preferredLanguage && 
    Object.keys(languages).includes(preferredLanguage as Language);

  return {
    redirect: {
      destination: isValidLanguage ? `/${preferredLanguage}` : '/en',
      permanent: true, // This will send 308 status code
    },
  };
};
