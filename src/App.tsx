import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Navigation />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

