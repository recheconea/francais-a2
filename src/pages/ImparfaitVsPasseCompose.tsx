import theory from '../data/theory/imparfaitVsPc.json';
import items from '../data/exercises/imparfaitVsPc.json';
import ExerciseList from '../components/Exercise';

export default function ImparfaitVsPasseCompose(){
  return (
    <>
      <section className="card">
        <h1>Imparfait vs. Passé composé</h1>
        <div className="kicker">Contexto/hábito vs. acción puntual / cambio</div>
        <div className="theory">
          <h3>Cuándo usar cada uno</h3>
          <ul>
            {theory.points.map((p: string) => <li key={p} dangerouslySetInnerHTML={{__html: p}} />)}
          </ul>
          <div className="examples">
            {theory.examples.map((e: string) => <div className="ex" key={e} dangerouslySetInnerHTML={{__html: e}} />)}
            <div className="ex tip">Pistas: “siempre, de pequeño, normalmente” → imparfait; “ayer, de repente, una vez” → passé composé.</div>
          </div>
        </div>
      </section>
      <ExerciseList sectionKey="ivspc" items={items} />
    </>
  );
}

