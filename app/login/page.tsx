"use client";
import {FormEvent,useState} from "react";
import {createClient} from "../../lib/supabase/client";
import Link from "next/link";

export default function Login(){
 const [email,setEmail]=useState(""),[password,setPassword]=useState(""),[name,setName]=useState(""),[signup,setSignup]=useState(false),[busy,setBusy]=useState(false),[msg,setMsg]=useState("");
 async function submit(e:FormEvent){e.preventDefault();setBusy(true);setMsg("");const supabase=createClient();
  const result=signup?await supabase.auth.signUp({email,password,options:{data:{full_name:name}}}):await supabase.auth.signInWithPassword({email,password});
  setBusy(false); if(result.error){setMsg(result.error.message);return;} if(signup&&!result.data.session){setMsg("Account created. Check your email to confirm, then sign in.");return;} window.location.href="/dashboard";
 }
 return <main className="auth-shell"><div className="auth-card"><div className="brand"><div className="logo">K</div><div><b>KaamSetu</b><span>Job memory engine</span></div></div><h1>{signup?"Start your business workspace":"Welcome back"}</h1><p className="muted">{signup?"Keep every customer, job and payment remembered.":"Your jobs, payments and next actions in one place."}</p><form onSubmit={submit}>{signup&&<input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/>}<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><input required minLength={6} type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>{msg&&<div className="notice">{msg}</div>}<button className="primary wide" disabled={busy}>{busy?"Working…":signup?"Create account":"Sign in"}</button></form><button className="text-btn" onClick={()=>setSignup(!signup)}>{signup?"Already have an account? Sign in":"New to KaamSetu? Create account"}</button><Link className="back-link" href="/">← Back to demo</Link></div></main>
}
