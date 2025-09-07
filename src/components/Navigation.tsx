import { NavLink } from 'react-router-dom';
import topics from '../data/topics.json';

type Topic = { path: string; title: string; summary: string; section?: string };

const groupBySection = (items: Topic[]) => {
  const map = new Map<string, Topic[]>();
  for (const t of items as Topic[]) {
    const key = t.section || 'General';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(t);
  }
  return Array.from(map.entries()).map(([section, items]) => ({ section, items }));
};

export default function Navigation(){
  const groups = groupBySection(topics as Topic[]);
  return (
    <nav className="sidebar-nav">
      {groups.map(g => (
        <section key={g.section} className="sidebar-section">
          <h3>{g.section}</h3>
          <div className="sidebar-links">
            {g.items.map(t => (
              <NavLink key={t.path} to={t.path} className={({isActive})=> isActive? 'active' : undefined}>
                {t.title}
              </NavLink>
            ))}
          </div>
        </section>
      ))}
    </nav>
  );
}
