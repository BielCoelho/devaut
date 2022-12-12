import React from 'react';

import { useAuth } from 'contexts/Auth';

export const DashboardContent = () => {
  const { user } = useAuth();
  return <p>{user?.name}</p>;
};
