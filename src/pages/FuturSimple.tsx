import theory from '../data/theory/futurSimple.json';
import items from '../data/exercises/futurSimple.json';
import ExerciseList from '../components/Exercise';

export default function FuturSimple(){
  return (
    <>
      <section className="card">
        <h1>Le futur simple</h1>
        <div className="kicker">Hechos futuros, promesas, predicciones</div>
        <div className="theory">
          <h3>Formación y usos</h3>
          <ul>
            {theory.points.map((p: string) => <li key={p} dangerouslySetInnerHTML={{__html: p}} />)}
          </ul>
          <div className="examples">
            {theory.examples.map((e: string) => <div className="ex" key={e} dangerouslySetInnerHTML={{__html: e}} />)}
          </div>
        </div>
      </section>
      <ExerciseList sectionKey="fs" items={items} />
    </>
  );
}

