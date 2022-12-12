import React from 'react';
import { type NextPage, type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import { HomeContent } from 'contents/Home';
import { userService } from 'services/user';

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return <HomeContent />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await userService.getSSRMe(ctx);

  return { props: { initialUserState: response?.user } };
};
