"use client";
import {useEffect} from "react";
export default function SearchClient(){
  useEffect(()=>{
    const input=document.getElementById("appSearch");
    const handler=()=>{
      const q=input.value.trim().toLowerCase();
      document.querySelectorAll(".card[data-search]").forEach(card=>{
        card.style.display=!q || card.dataset.search.includes(q) ? "" : "none";
      });
      document.querySelectorAll(".section").forEach(section=>{
        const visible=[...section.querySelectorAll(".card[data-search]")].some(c=>c.style.display!=="none");
        section.style.display=visible ? "" : "none";
      });
    };
    input?.addEventListener("input",handler);
    return ()=>input?.removeEventListener("input",handler);
  },[]);
  return null;
}
