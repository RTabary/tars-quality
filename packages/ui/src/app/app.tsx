// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContentWithSidebar from './layouts/content-with-sidebar/content-with-sidebar';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

const About = React.lazy(() => import('./pages/about/about'));
const Home = React.lazy(() => import('./pages/home/home'));

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
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
