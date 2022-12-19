import React from 'react';
import { type NextPage } from 'next';

import { withSSRAuth } from 'utils/withSSRAuth';
import { ProfileContent } from 'contents/Profile';

const ProfileBase: NextPage = () => {
  return <ProfileContent />;
};

export default ProfileBase;

export const getServerSideProps = withSSRAuth();
