import { ApiError } from '../errors/ApiError';
import axios from 'axios';
class useHttp {
  request = async (
    url: string,
    method = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' }
  ) => {
    try {
      const response = await axios({ url, method, data: body, headers });

      if (response.status !== 200) {
        throw new Error(
          `Could not get data from  ${url}, status: ${response.status}`
        );
      }
      const data = response.data;

      return data;
    } catch (e: unknown) {
      if (method === 'GET') {
        throw new ApiError({
          name: 'GET_DATA_ERROR',
          message: 'Data was not fetched',
          cause: e,
        });
      }
    }
  };
}
export default useHttp;
