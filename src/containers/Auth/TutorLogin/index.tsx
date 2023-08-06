import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

export default function TutorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();

  const handleSignin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(({ data }: any) => {
        localStorage.setItem('jwtoken', data.token);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const handleGoogleLoginSuccess = (res) => {
    console.log(res);
  };

  const handleGoogleLoginError = () => {
    console.log('error');
  };

  return (
    <div className="login">
      <div className="md:px-20 container relative px-5 mx-auto">
        <div className="xl:grid block grid-cols-2 gap-4">
          <div className="xl:flex flex-col hidden min-h-screen">
            <div className=" flex items-center pt-5">
              <span className="ml-3 text-lg text-white"> LOGO</span>
            </div>
            <div className="my-auto">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className=" w-1/2 -mt-16"
                src="/src/assets/images/illustration.svg"
              />
              <div className=" mt-10 text-4xl font-medium leading-tight text-white">
                A few more clicks to
                <br />
                sign in to your account.
              </div>
            </div>
          </div>
          <div className="xl:h-auto xl:py-0 xl:my-0 flex h-screen py-5 my-10">
            <div className="xl:ml-20 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none lg:w-1/2 w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md">
              <h2 className="xl:text-3xl xl:text-left text-2xl font-medium text-center">
                Tutor Sign In
              </h2>
              <form className="w-full mt-10 space-y-6" onSubmit={handleSignin}>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={updateField(setEmail)}
                    required
                    placeholder="Email address"
                    className="ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 block w-full px-4 py-3 text-gray-900 bg-white border-0 rounded-lg shadow-sm"
                  />
                </div>

                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={updateField(setPassword)}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 block w-full px-4 py-3 text-gray-900 bg-white border-0 rounded-lg shadow-sm"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="bg-gray-50 focus:ring-3 focus:ring-primary w-4 h-4 border border-gray-300 rounded cursor-pointer"
                          required={true}
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="text-sm text-gray-700 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                    <p className="hover:text-indigo-500 text-primary mt-1 text-sm font-normal text-right">
                      Forgot password?
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex justify-center w-full px-3 py-3 text-sm font-medium leading-6 text-white rounded-md shadow-sm"
                >
                  Sign in
                </button>
              </form>
              <button
                onClick={googleLogin}
                className="bg-primary mt-5 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex justify-center w-full px-3 py-3 text-sm font-medium leading-6 text-white rounded-md shadow-sm"
              >
                Sign in with Google
              </button>

              <div>
                <Link
                  to="/student-login"
                  className="hover:text-indigo-500 text-primary mt-1 text-sm font-normal text-center"
                >
                  Login as a Student
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
