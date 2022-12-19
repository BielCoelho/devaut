import React from 'react';

import { withAuth } from 'utils/withAuth';

const NewChild = () => {
  return (
    <>
      <h1>New Staff</h1>
      <form>Formulario</form>
    </>
  );
};

export default withAuth(NewChild);
