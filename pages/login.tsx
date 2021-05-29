import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GitHubProfile } from '../components/GitHubProfile'
import { useState, useRef } from 'react';
import Link from 'next/link'
import { User } from '../model/types';
import axios from 'axios';
import { useRouter } from 'next/router'
import "bootstrap/dist/css/bootstrap.css";
import Router from 'next/router';

export default function Login() {
  const [user, setUser] = useState<User>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter()

  async function handleLoginUser() : Promise<void> {
    if(emailRef === undefined || emailRef.current === undefined || emailRef.current === null){
      return;
    } else if(passwordRef === undefined || passwordRef.current === undefined || passwordRef.current === null){
      return;
    }
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email === "" || password === "") {
      return;
    }
    console.log('hola')
    if(typeof email !== 'undefined' && typeof password !== 'undefined'){
      try{
          const res = await axios.get<User[]>(`http://localhost:3004/users?email=${email}`);
          const data:User[] = res.data;
          console.log(data)
          const user: User = data[0];
          console.log(user)
          if(email !== user.email && password !== user.password){
            return;

          }
          
      } catch (err) {
          console.log(err)
      }
      Router.push('/home');
      emailRef.current.value = '';
      passwordRef.current.value = '';
      
    }
  }



  return (
    <>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        <h2>Login</h2>
      <form className="mt-2">
          <div className="mb-3">
              <label className="form-label">Email address</label>
              <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
              <label className="form-label">Password</label>
              <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          
      </form>
      <button onClick={handleLoginUser} className="btn btn-primary">Submit</button>
      </div>
      
    </>
  )
}