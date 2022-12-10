import React from 'react';

import { withAuth } from 'utils/withAuth';

export const DashboardContent = withAuth(() => {
  return <p>dashboard</p>;
});
