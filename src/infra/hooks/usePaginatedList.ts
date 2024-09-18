import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface usePaginatedListReturn<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): usePaginatedListReturn<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>(
        (acc, page) => [...acc, ...page.data],
        [],
      );

      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
