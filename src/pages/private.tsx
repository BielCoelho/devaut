import React from 'react';
import { type NextPage, type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import { userService } from 'services/user';
import { withAuth } from 'utils/withAuth';

const Private: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  return <h1>Private PAGE</h1>;
};

export default withAuth(Private);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await userService.getSSRMe(ctx);

  return { props: { initialUserState: response?.user } };
};
