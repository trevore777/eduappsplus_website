export default function AppCard({app}) {
  const available = Boolean(app.url);
  return <article className="card" data-search={`${app.name} ${app.subject} ${app.year} ${app.description}`.toLowerCase()}>
    <span className="badge">{app.year}</span>
    <h3>{app.name}</h3>
    <p>{app.description}</p>
    {available
      ? <a className="open" href={app.url} target="_blank" rel="noopener noreferrer">Open App →</a>
      : <div className="draft">Link awaiting a complete public URL.</div>}
  </article>;
}
