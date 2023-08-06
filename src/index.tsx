import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'common/fontfamily.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="387257411422-c06rvb3s4h1c831k8jrts9pgle4o0aqa.apps.googleusercontent.com">
      <Router />
    </GoogleOAuthProvider>
  </BrowserRouter>
);
