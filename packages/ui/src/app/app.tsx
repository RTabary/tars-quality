// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContentWithSidebar from './layouts/content-with-sidebar/content-with-sidebar';

const About = React.lazy(() => import('./pages/about/about'));
const Home = React.lazy(() => import('./pages/home/home'));
const NotFound = React.lazy(() => import('./pages/not-found/not-found'));
const Login = React.lazy(() => import('./layouts/login/login'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentWithSidebar />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="home"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="apis/uuid/details"
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
