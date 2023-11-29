import type { AxiosError, AxiosInstance } from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkRefreshToken } from '../../redux/slices/auth/createAsyncThunks';

export default function useAxiosInterceptors(authInstance: AxiosInstance): void {
  const accessToken = useAppSelector((store) => store.authSlice.accessToken);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);

  useEffect(() => {
    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;

        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return authInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user.status]);
}
