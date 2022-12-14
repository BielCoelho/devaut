import React from 'react';
import { type NextPage } from 'next';

import { HomeContent } from 'contents/Home';
import { withSSRAuth } from 'utils/withSSRAuth';

const Home: NextPage = () => {
  return <HomeContent />;
};

export default Home;

export const getServerSideProps = withSSRAuth();
