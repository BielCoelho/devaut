import React from 'react';
import { useRouter } from 'next/router';

import { withAuth } from 'utils/withAuth';

const ChildrenPlans = () => {
  const router = useRouter();
  const staff = router.query.id;

  return <h1>planos parar {staff}</h1>;
};

export default withAuth(ChildrenPlans);
