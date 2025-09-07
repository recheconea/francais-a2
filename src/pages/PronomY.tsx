import theory from '../data/theory/pronomY.json';
import items from '../data/exercises/pronomY.json';
import ExerciseList from '../components/Exercise';

export default function PronomY(){
  return (
    <>
      <section className="card">
        <h1>Le pronom y</h1>
        <div className="kicker">Sustituye "à + cosa" o lugar</div>
        <div className="theory">
          <h3>Usos</h3>
          <ul>
            {theory.points.map((p: string) => <li key={p} dangerouslySetInnerHTML={{__html: p}} />)}
          </ul>
          <div className="examples">
            {theory.examples.map((e: string) => <div className="ex" key={e} dangerouslySetInnerHTML={{__html: e}} />)}
          </div>
        </div>
      </section>
      <ExerciseList sectionKey="y" items={items} />
    </>
  );
}

