import { useMemo, useState } from 'react';

export type MCQ = {
  id: string;
  prompt: string;
  options: string[];
  correct: string;
  explanation?: string;
};

export default function ExerciseList({ items, sectionKey }: { items: MCQ[]; sectionKey: string; }){
  const [answers, setAnswers] = useState<Record<string,string>>({});
  const [graded, setGraded] = useState<Record<string,boolean>>({});

  const score = useMemo(() => {
    const ids = items.map(i => i.id);
    let ok = 0; let total = ids.length;
    ids.forEach(id => {
      const it = items.find(i => i.id === id)!;
      if(answers[id] && answers[id] === it.correct) ok++;
    });
    return { ok, total };
  }, [answers, items]);

  function choose(id: string, val: string){
    setAnswers(prev => ({...prev, [id]: val}));
  }
  function grade(){
    const status: Record<string,boolean> = {};
    items.forEach(i => status[i.id] = (answers[i.id] || '') === i.correct);
    setGraded(status);
    const firstBad = items.find(i => status[i.id] === false);
    if(firstBad){
      document.getElementById(`${sectionKey}-${firstBad.id}`)?.scrollIntoView({behavior:'smooth', block:'center'});
    }
  }
  function showAnswers(){
    const all: Record<string,string> = {};
    items.forEach(i => all[i.id] = i.correct);
    setAnswers(all);
    const status: Record<string,boolean> = {};
    items.forEach(i => status[i.id] = true);
    setGraded(status);
  }
  function reset(){
    setAnswers({});
    setGraded({});
  }

  return (
    <section className="card">
      <div className="controls">
        <button onClick={grade}>Corregir sección</button>
        <button className="secondary" onClick={showAnswers}>Mostrar respuestas</button>
        <button className="ghost" onClick={reset}>Resetear</button>
        <div style={{marginLeft:'auto',opacity:.8}}>Puntuación: {score.ok}/{score.total}</div>
      </div>
      <div className="exercise-list">
        {items.map((q) => {
          const chosen = answers[q.id];
          const isGraded = graded[q.id] !== undefined;
          const isCorrect = graded[q.id] === true;
          return (
            <div key={q.id} id={`${sectionKey}-${q.id}`} className={`exercise ${isGraded ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
              <p>{q.prompt}</p>
              <div className="opts">
                {q.options.map(opt => (
                  <label key={opt}>
                    <input type="radio" name={`${sectionKey}-${q.id}`} value={opt} checked={chosen === opt} onChange={() => choose(q.id, opt)} />
                    <span dangerouslySetInnerHTML={{__html: opt}} />
                  </label>
                ))}
              </div>
              <div className={`feedback ${isGraded ? (isCorrect ? 'good' : 'bad') : ''}`}>
                {isGraded && (isCorrect ? '¡Bien!' : (
                  <span>
                    Incorrecto. Respuesta: <span className="answer" dangerouslySetInnerHTML={{__html: q.correct}} />{q.explanation ? ` — ${q.explanation}` : ''}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

