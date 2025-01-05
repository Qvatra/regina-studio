import { GetServerSideProps } from 'next';
import LocalizedHome from './[lang]/index';

export default function Home() {
  return <LocalizedHome lang="en" />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      preferredLanguage: 'en',
    },
  };
};
