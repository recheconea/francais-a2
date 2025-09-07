import { NavLink } from 'react-router-dom';
import topics from '../data/topics.json';

export default function Navigation(){
  return (
    <nav className="nav">
      {topics.map(t => (
        <NavLink key={t.path} to={t.path}>{t.title}</NavLink>
      ))}
    </nav>
  );
}

