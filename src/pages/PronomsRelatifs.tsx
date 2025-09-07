import theory from '../data/theory/pronomsRelatifs.json';
import items from '../data/exercises/pronomsRelatifs.json';
import ExerciseList from '../components/Exercise';

export default function PronomsRelatifs(){
  return (
    <>
      <section className="card">
        <h1>Pronoms relatifs: qui / que / où / dont</h1>
        <div className="kicker">Unen oraciones como sujeto, objeto, lugar/tiempo o "de"</div>
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
      <ExerciseList sectionKey="relatifs" items={items} />
    </>
  );
}

