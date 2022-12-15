import { useQuery } from '@tanstack/react-query';

import { REACT_QUERY_KEYS } from 'constants/react-query';
import { getActiveToken } from 'services/auth';
import { getMeService } from 'services/users/users.service';

export const useMe = () => {
  const token = getActiveToken();

  return useQuery({
    queryKey: [REACT_QUERY_KEYS.ME],
    queryFn: () => getMeService(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!token,
    onError: (error: Error) => error.message,
  });
};
