import React from 'react';

import { withAuth } from 'utils/withAuth';
import { withSSRAuth } from 'utils/withSSRAuth';

const newStaff = () => {
  return (
    <>
      <h1>New Child</h1>
      <form>Formulario</form>
    </>
  );
};

export default withAuth(newStaff);
export const getServerSideProps = withSSRAuth();
