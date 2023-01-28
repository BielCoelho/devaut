import React from 'react';
import { type NextPage } from 'next';

import { withSSRAuth } from 'utils/withSSRAuth';
import { ProfileContent } from 'contents/Profile';
import { withAuth } from 'utils/withAuth';

const ProfilePage: NextPage = () => {
  return <ProfileContent />;
};

export default withAuth(ProfilePage);
export const getServerSideProps = withSSRAuth();
