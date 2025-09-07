import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <div className="layout container">
        <aside className="sidebar">
          <Navigation />
        </aside>
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
