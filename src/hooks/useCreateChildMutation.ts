import { useMutation } from '@tanstack/react-query';

import { createChildMutation } from 'services/api';

export const useCreateChildMutation = () => {
  return useMutation({ mutationFn: createChildMutation });
};
