import React from 'react';

import { withAuth } from 'utils/withAuth';
import { withSSRAuth } from 'utils/withSSRAuth';

const NewChildPage = () => {
  return (
    <>
      <h1>New Staff</h1>
      <form>Formulario</form>
    </>
  );
};

export default withAuth(NewChildPage);
export const getServerSideProps = withSSRAuth();
