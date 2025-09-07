import topics from '../data/topics.json';

export default function Home(){
  return (
    <>
      <section className="card">
        <h1>Repaso Francés A2</h1>
        <div className="kicker">Teoría clara + ejercicios autocorregibles con explicación</div>
        <div className="theory">
          <h3>Cómo usar esta app</h3>
          <ul>
            <li>Explora los temas desde la barra de navegación.</li>
            <li>Lee la teoría con ejemplos, excepciones y casos frecuentes.</li>
            <li>Resuelve los ejercicios y corrige para ver feedback inmediato.</li>
          </ul>
        </div>
        <div className="examples">
          {topics.map(t => (
            <div key={t.path} className="ex"><b>{t.title}</b>: {t.summary}</div>
          ))}
        </div>
      </section>
    </>
  );
}

