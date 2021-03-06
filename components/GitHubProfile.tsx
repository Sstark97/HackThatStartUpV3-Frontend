import { useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios'
import { Profile, Repo } from '../model/types';
import { GitHubRepos } from './GitHubRepos';
import { v4 as uuidv4 } from 'uuid';

export function GitHubProfile(){

    const [profileRender, setProfile] = useState<Profile>({login:"Hola",avatar_url:"",repos_url:'',public_repos:0})
    const [reposRender, setRepos] = useState<Repo[]>([]);
    const [reposToShow, setReposToShow] = useState<Repo[]>([]);
    const [index, setIndex] = useState(8);
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
            return {name:repo.name, description: repo.description, html_url:repo.html_url,id:repo.id}
        });

        setRepos(repos);
        console.log(index);
        setReposToShow(repos.slice(0,8));
        setIndex(8);
    }

    function handleNextRepos(){
        const newPos:number = index + 8;
        const repos:Repo[] = reposRender.slice(index,newPos);
        console.log(newPos)
        setIndex(newPos);
        setReposToShow(repos);
    }

    function handlePrevRepos(){
        const newPos:number = index - 8;
        const prePos:number = index - 16;
        const repos:Repo[] = reposRender.slice(prePos,newPos);
        console.log(prePos)
        setIndex(newPos);
        setReposToShow(repos);
    }

    return <>   
                {profileRender.login === 'Hola' 
                    ?
                    <>
                        <input className="form-control w-25" type="text" placeholder="Introduce your github" ref={profileRef} />
                        <button className="btn btn-primary" onClick={profileToSearch}>Search</button>
                    </>
                    :
                    <div className="d-flex w-75">
                        
                        <div className="card h-25">
                
                            <img src={profileRender.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body w-100 p-3">
                                <h5 className="card-title">User: {profileRender.login}</h5>
                                <p className="card-subtitle">Repos: {profileRender.public_repos}</p>
                                <div className="d-flex flex-column align-items-center mt-2">
                                    <input className="form-control" type="text" placeholder="Introduce your github" ref={profileRef} />
                                    <button className="btn btn-primary w-25 mt-2" onClick={profileToSearch}>Search</button>
                                </div>
                                {/* <a href={html_url} className="btn btn-primary">Go to Repo</a> */}
                            </div>
                
                        </div>
            
                        <div className= "container-fluid">
                            <div className="row col-xs-4">
                                {
                                    reposToShow.map(repo => {
                                        return <GitHubRepos key={uuidv4()} name={repo.name} description = {repo.description} html_url = {repo.html_url} id = {repo.id}/>
                                    })
                                }
                            </div>
                            <div className="d-flex w-100 justify-content-center mt-4">
                                <div className="d-flex w-25">
                                    {
                                        index !== 8 
                                        ?
                                        <button className="btn btn-primary w-25 m-2" onClick={handlePrevRepos}>Prev</button>
                                        :
                                        <></>
                                    }
                                    {
                                        index < reposRender.length
                                        ?
                                        <button className="btn btn-primary w-25 m-2" onClick={handleNextRepos}>Next</button>
                                        :
                                        <></>
                                    }
                                    
                                </div>
                            </div>
                        </div>

                    </div>
            

                }
        
            </>

}