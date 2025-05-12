import { useQuery } from '@tanstack/react-query';
import { movieApi } from 'src/api/movie';

export const useMovie = (id: string | number) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => movieApi.getMovieById(id).then(res => res.data),
    enabled: !!id, 
  });
};
