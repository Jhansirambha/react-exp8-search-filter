import { useState } from "react";
const names = ["Alice","Bob","Charlie","David"];

export default function App() {
  const [q, setQ] = useState("");
  return <>
    <input placeholder="Search" onChange={e=>setQ(e.target.value)} />
    <ul>{names.filter(n=>n.toLowerCase().includes(q.toLowerCase()))
       .map((n,i)=><li key={i}>{n}</li>)}</ul>
  </>;
}
