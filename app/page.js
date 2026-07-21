import {readApps,slugify} from "../lib/apps";
import AppCard from "../components/AppCard";
import SearchClient from "../components/SearchClient";

export const dynamic = "force-dynamic";

export default async function Home(){
  const all = await readApps();
  const apps = all.filter(a=>a.status==="published").sort((a,b)=>a.subject.localeCompare(b.subject)||a.order-b.order||a.name.localeCompare(b.name));
  const subjects=[...new Set(apps.map(a=>a.subject))];
  const featured=apps.filter(a=>a.featured).slice(0,6);
  return <>
    <header>
      <div className="wrap">
        <div className="top"><div className="brand">EDU APPS+</div><a className="adminLink" href="/admin/login">Teacher App Manager</a></div>
        <div className="hero">
          <h1>Learning. Creating.<br/>Evidence. Assessment.</h1>
          <p>A central collection of EDU Apps Plus learning tools for students and teachers.</p>
          <input id="appSearch" className="search" placeholder="Search apps, subjects or year levels..." />
        </div>
      </div>
    </header>
    <nav className="subjectNav"><div className="inner">
      <a className="chip" href="#top">All Apps</a>
      {subjects.map(s=><a className="chip" key={s} href={`#${slugify(s)}`}>{s}</a>)}
    </div></nav>
    <main id="top"><div className="wrap">
      {featured.length>0 && <section className="featured section" id="featured">
        <div className="sectionHead"><h2>Featured Apps</h2><span className="count">{featured.length} apps</span></div>
        <div className="grid">{featured.map(a=><AppCard app={a} key={a.id}/>)}</div>
      </section>}
      {subjects.map(subject=>{
        const group=apps.filter(a=>a.subject===subject);
        return <section className="section" id={slugify(subject)} key={subject}>
          <div className="sectionHead"><h2>{subject}</h2><span className="count">{group.length} {group.length===1?"app":"apps"}</span></div>
          <div className="grid">{group.map(a=><AppCard app={a} key={a.id}/>)}</div>
        </section>
      })}
    </div></main>
    <footer>EDU Apps Plus</footer>
    <SearchClient/>
  </>;
}
