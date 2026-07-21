(() => {
  const cards = [...document.querySelectorAll('#appGrid .app-card')];
  const search = document.querySelector('#search');
  const empty = document.querySelector('#emptyState');
  let category = 'all';
  let year = 'all';
  function apply(){
    const q=(search?.value||'').trim().toLowerCase(); let visible=0;
    cards.forEach(card=>{
      const catOK=category==='all'||card.dataset.category===category;
      const yearOK=year==='all'||(card.dataset.year||'').includes(year);
      const qOK=!q||(card.dataset.search||'').includes(q);
      const show=catOK&&yearOK&&qOK; card.hidden=!show; if(show) visible++;
    }); if(empty) empty.hidden=visible!==0;
  }
  document.querySelectorAll('[data-category]').forEach(btn=>{
    if(!btn.matches('button')) return;
    btn.addEventListener('click',()=>{
      category=btn.dataset.category;
      document.querySelectorAll('.category-card').forEach(x=>x.classList.toggle('active',x.dataset.category===category));
      apply(); document.querySelector('#appGrid')?.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
  document.querySelectorAll('.year-filter').forEach(btn=>btn.addEventListener('click',()=>{
    year=btn.dataset.year; document.querySelectorAll('.year-filter').forEach(x=>x.classList.toggle('active',x===btn)); apply();
  }));
  search?.addEventListener('input',apply);
})();
