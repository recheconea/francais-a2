import theory from '../data/theory/passeCompose.json';
import items from '../data/exercises/passeCompose.json';
import ExerciseList from '../components/Exercise';

export default function PasseCompose(){
  return (
    <>
      <section className="card">
        <h1>Le passé composé</h1>
        <div className="kicker">Acción terminada, puntual; secuencia de hechos</div>
        <div className="theory">
          <h3>Claves</h3>
          <ul>
            {theory.points.map((p: string) => <li key={p} dangerouslySetInnerHTML={{__html: p}} />)}
          </ul>
          <div className="examples">
            {theory.examples.map((e: string) => <div className="ex" key={e} dangerouslySetInnerHTML={{__html: e}} />)}
          </div>
        </div>
      </section>
      <ExerciseList sectionKey="pc" items={items} />
    </>
  );
}

