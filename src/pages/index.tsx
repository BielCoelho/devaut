import React from 'react';
import { type InferGetServerSidePropsType, type NextPage } from 'next';

import { HomeContent } from 'contents/Home';
import { withSSRAuth } from 'utils/withSSRAuth';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return <HomeContent />;
};

export default Home;
export const getServerSideProps = withSSRAuth(async (ctx, props) => {
  return {
    props: {
      ...props,
    },
  };
});
