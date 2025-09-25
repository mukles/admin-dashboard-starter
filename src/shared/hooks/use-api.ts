import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

interface ApiError {
  message: string;
  statusCode: number;
}

export const useApiQuery = <TData, TError = ApiError>(key: string[], fetcher: () => Promise<TData>, options?: UseQueryOptions<TData, TError>) => {
  return useQuery<TData, TError>({
    queryKey: key,
    queryFn: fetcher,
    ...options,
  });
};

export const useApiMutation = <TData, TError = ApiError, TVariables = unknown>(mutationFn: (variables: TVariables) => Promise<TData>, options?: UseMutationOptions<TData, TError, TVariables>) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: mutationFn,
    ...options,
  });
};
