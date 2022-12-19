import { useMutation } from '@tanstack/react-query';

import { authUserMutation } from 'services/api';

export const useAuthMutation = () => {
  return useMutation({ mutationFn: authUserMutation });
};
