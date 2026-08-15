export default async function Login({searchParams}) {
  const params = await searchParams;
  const failed = params?.error === "1";
  return <div className="adminWrap"><div className="panel" style={{maxWidth:500,margin:"80px auto"}}>
    <h1>Teacher App Manager</h1>
    <p>Enter the administrator password to manage app names, subjects and URLs.</p>
    {failed && <div className="notice" style={{background:"#fff1f0",color:"#8a1f17"}}>Incorrect password. Please try again.</div>}
    <form method="post" action="/api/admin/login">
      <label>Password</label><input type="password" name="password" autoFocus required/>
      <div style={{marginTop:18}}><button type="submit">Sign in</button> <a className="button secondary" href="/">Back to site</a></div>
    </form>
  </div></div>;
}
