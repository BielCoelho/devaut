import { type InferGetServerSidePropsType, type GetServerSideProps } from 'next';

import { removeAuthToken } from 'services/auth';
import { userService } from 'services/user';

const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await userService.getSSRMe(ctx);

    return { props: { initialUserState: response } };
  } catch (err) {
    removeAuthToken(ctx);
    return { props: { initialUserState: null } };
  }
};

export function withSSRAuth(): InferGetServerSidePropsType<typeof getServerSideProps> {
  return getServerSideProps;
}
