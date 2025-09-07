import theory from '../data/theory/pronomsComplements.json';
import items from '../data/exercises/pronomsComplements.json';
import ExerciseList from '../components/Exercise';

export default function PronomsComplements(){
  return (
    <>
      <section className="card">
        <h1>Pronoms compléments: COD / COI</h1>
        <div className="kicker">Sustituyen complementos y van antes del verbo</div>
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
      <ExerciseList sectionKey="pronoms" items={items} />
    </>
  );
}

