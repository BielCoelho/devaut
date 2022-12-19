import React from 'react';

import { withAuth } from 'utils/withAuth';
import { withSSRAuth } from 'utils/withSSRAuth';
import { ChildrenContent } from 'contents/Children';

const ChildrenPage = () => {
  return <ChildrenContent />;
};

export default withAuth(ChildrenPage);
export const getServerSideProps = withSSRAuth();
