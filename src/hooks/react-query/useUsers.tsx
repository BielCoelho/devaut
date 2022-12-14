import { useMutation } from '@tanstack/react-query';

import { userService } from 'services/user';

export function useLoginMutation() {
  return useMutation({ mutationFn: userService.login });
}
