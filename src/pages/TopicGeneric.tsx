import { useLocation, Link } from 'react-router-dom';
import topics from '../data/topics.json';

type Topic = { path: string; title: string; summary: string; section?: string };

export default function TopicGeneric(){
  const { pathname } = useLocation();
  const topic = (topics as Topic[]).find(t => t.path === pathname);

  if (!topic) {
    return (
      <section className="card">
        <h1>Contenido no encontrado</h1>
        <p>No tenemos este tema aún. Vuelve al inicio para ver los disponibles.</p>
        <p><Link to="/">Ir al inicio</Link></p>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="kicker">Tema en preparación</div>
      <h1>{topic.title}</h1>
      <div className="theory">
        <h3>Resumen</h3>
        <p>{topic.summary}</p>
      </div>
      <div className="examples">
        <div className="ex tip">Estamos preparando teoría y ejercicios interactivos para este tema. ¡Pronto disponible!</div>
      </div>
    </section>
  );
}

