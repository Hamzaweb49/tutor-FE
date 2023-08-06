import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();

  const tutorSignup = (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:8000/user/signup', {
          name,
          email,
          password,
          isTutor: true,
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  const login = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:8000/user/login', {
          name,
          email,
          password,
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  const studentSignUp = (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://localhost:8000/user/signup', {
          name,
          email,
          password,
          isTutor: false,
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const { data } = await axios.post(
        'http://localhost:8000/userAuth/auth/google',
        {
          code,
        }
      );

      localStorage.setItem('jwtoken', data.jwtoken);

      navigate('/');
    },
    flow: 'auth-code',
  });

  return { tutorSignup, studentSignUp, login, googleLogin };
}

export default useAuth;
