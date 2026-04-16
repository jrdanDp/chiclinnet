import { HashRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const Plans = lazy(() => import('./pages/Plans'));
const Coverage = lazy(() => import('./pages/Coverage'));
const Payments = lazy(() => import('./pages/Payments'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chiclin-blue-base"></div>
      </div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="plans" element={<Plans />} />
            <Route path="coverage" element={<Coverage />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
