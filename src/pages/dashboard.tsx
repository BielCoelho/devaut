import React from 'react';
import { type GetServerSideProps, type NextPage } from 'next';

import { DashboardContent } from 'contents/Dashboard';
import { getToken } from 'services/auth/auth.service';

const Dashboard: NextPage = () => {
  return <DashboardContent />;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getToken(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
