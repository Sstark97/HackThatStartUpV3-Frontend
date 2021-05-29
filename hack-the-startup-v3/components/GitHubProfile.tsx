import react from 'react';
import { useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import { Profile, Repo } from '../model/types';
import { GitHubRepos } from './GitHubRepos';
import { v4 as uuidv4 } from 'uuid';

export function GitHubProfile(){

    const [profileRender, setProfile] = useState<Profile>({login:"Hola",avatar_url:"fewf",repos_url:'',public_repos:0})
    const [reposRender, setRepos] = useState<Repo[]>([]);
    const [reposToShow, setReposToShow] = useState<Repo[]>([]);
    const [index, setIndex] = useState(5);
    const profileRef = useRef<HTMLInputElement>(null);

    async function profileToSearch() {
        if(profileRef === undefined || profileRef.current === undefined || profileRef.current === null){
            return;
        }
        const profile = profileRef.current?.value;
  
        if (profile === "") {
            return;
        }
  
        if(typeof profile !== 'undefined'){
            try{
                const res = await axios.get<Profile>(`https://api.github.com/users/${profile}`)
                const data = res.data;
                const prf:Profile = {login:data.login, avatar_url: data.avatar_url, repos_url:data.repos_url,public_repos:data.public_repos};
                setProfile(prf);
                handleSearchRepos(prf)
            } catch (err) {
                console.log(err)
            }
            profileRef.current.value = '';
        }
    }

    async function handleSearchRepos(profile:Profile) {
        const res = await axios.get(profile.repos_url);
        const data:Repo[] = res.data;

        const repos:Repo[] = data.map(repo => {
            return {name:repo.name, description: repo.description, html_url:repo.html_url}
        });

        setRepos(repos);
        setReposToShow(repos.slice(0,index))
    }

    function handleNextRepos(){
        const newPos:number = index + 5;
        const repos:Repo[] = reposRender.slice(index,newPos);
        setIndex(newPos);
        setReposToShow(repos);
    }

    function handlePrevRepos(){
        const newPos:number = index - 5;
        const prePos:number = index - 10;
        const repos:Repo[] = reposRender.slice(prePos,newPos);
        setIndex(prePos);
        setReposToShow(repos);
    }

    return <>
        <input type="text" placeholder="Introduce your github" ref={profileRef} />
        <button onClick={profileToSearch}>Search</button>
        <div className="d-flex w-75">
        <div className="card h-25">
            <img src={profileRender.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{profileRender.login}</h5>
                <p className="card-subtitle">{profileRender.public_repos}</p>
                        {/* <a href={html_url} className="btn btn-primary">Go to Repo</a> */}
            </div>
        </div>
            
        <div className= "container">
            <div className="row">
                {
                    reposToShow.map(repo => {
                        return <GitHubRepos key={uuidv4()} name={repo.name} description = {repo.description} html_url = {repo.html_url}/>
                    })
                }
            </div>
            <div className="d-flex w-50">
                <button className="btn btn-primary w-25" onClick={handlePrevRepos}>Prev</button>
                <button className="btn btn-primary w-25" onClick={handleNextRepos}>Next</button>
            </div>
        </div>

        </div>
            
    </>

}