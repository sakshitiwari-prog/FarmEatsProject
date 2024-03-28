import {Constants} from '../constants';
import {retrieveFromAsyncStorage} from './storageHelper';

const checkAuth = async (): Promise<AuthResponse> => {
  try {
    const authToken = JSON.parse(
      (await retrieveFromAsyncStorage(
        Constants.storageKeys.authToken,
      )) as string,
    );
    return {
      isLogin: authToken ? true : false,
      authToken: authToken ? authToken : '',
    };
  } catch (error) {
    return {
      isLogin: false,
      authToken: null,
    };
  }
};

export {checkAuth};
