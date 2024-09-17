// import {QueryKeys} from '@infra';
// import {useQuery} from '@tanstack/react-query';

import {useCallback, useEffect, useState} from 'react';

import {userService} from '../userService';
import {User} from '../userTypes';

// import {userService} from '../userService';

// export function useUserGetById(id: number) {
//   const {data, isLoading, isError, refetch, isFetching} = useQuery({
//     queryKey: [QueryKeys.UserGetById, id],
//     queryFn: () => userService.getById(id),
//     staleTime: 1000 * 30, // 10 seconds
//     // cacheTime: 5000,
//   });

//   return {
//     user: data,
//     isLoading,
//     isFetching,
//     isError,
//     refetch,
//   };
// }

export function useUserGetById(id: number) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    loading,
    error,
  };
}
