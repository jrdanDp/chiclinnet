import { Outlet } from 'react-router-dom';
import Navbar from '../components/static/Navbar';
import Footer from '../components/static/Footer';
import WhatsAppButton from '../components/static/WhatsAppButton';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default MainLayout;
