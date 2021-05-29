import "bootstrap/dist/css/bootstrap.css";
import { ProfileProps } from '../model/types'

export function GitHubRepos({name, description, html_url, id} : ProfileProps) {

    return (
        <div className=" w-25">
            
            <div className="card mt-2">
                <img src="https://www.muylinux.com/wp-content/uploads/2017/06/github.png" className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">Repo: {name}</h5>
                    <p className="card-text">Id: {id}</p>
                    {/* <p className="card-text">{description}</p> */}
                    <a href={html_url} className="btn btn-primary">Go to Repo</a>
                </div>
            </div>

        </div>
    )
}