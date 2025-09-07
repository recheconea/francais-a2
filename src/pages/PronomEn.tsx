import theory from '../data/theory/pronomEn.json';
import items from '../data/exercises/pronomEn.json';
import ExerciseList from '../components/Exercise';

export default function PronomEn(){
  return (
    <>
      <section className="card">
        <h1>Le pronom en</h1>
        <div className="kicker">Sustituye "de + cosa" y cantidades</div>
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
      <ExerciseList sectionKey="en" items={items} />
    </>
  );
}

