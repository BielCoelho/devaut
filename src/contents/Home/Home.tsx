import React from 'react';

import { DashboardContent } from 'contents/Dashboard';
import { withAuth } from 'utils/withAuth';

const HomeContentBase = () => {
  return <DashboardContent />;
};

export const HomeContent = withAuth(HomeContentBase);
