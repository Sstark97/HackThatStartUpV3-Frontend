export interface Profile {
    login:string,
    avatar_url:string, 
    repos_url:string,
    public_repos:number
}

export interface Repo {
    name:string,
    description:string, 
    html_url:string,
    id:string
}

export interface ProfileProps {
    name:string,
    description:string, 
    html_url:string,
    id:string
}

export interface User {
    name:string,
    email:string,
    password:string
}