import React, {useContext, useEffect} from 'react'
import './userDetails.css';
import { UserContext } from '../App';
import useFetch from '../hooks/apiData';
import github from "./github-2.gif"

interface DataObj {
    message?:string,
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }
  
function UserDetails() {
    const user = useContext(UserContext);
    let { data, error } = useFetch<DataObj>(
        `https://api.github.com/users/${user.userName}`
      );
      useEffect(() => {
           user.setgetData(false);
      }, [data, error])
    return (
        <>
            {error ? (
                <div className="col-12 col-lg-8 userDataCard">
                <div className="content w-100">
                    <img src={github} className='rounded-circle center-img' width={100} height={100}  />
                    <p className="heading">No User Found</p>
                    <div className='align-self-start'>
                    <p className="para p-0 m-0">User Name: No Data Available</p>
                    <p className="para p-0 m-0">Total Public Repo: No Data Available</p>
                    <p className="para p-0 m-0">Total Followers: No Data Available</p>
                    <p className="para p-0 m-0">Total Followings: No Data Available</p>
                    <p className="para p-0 m-0">Twitter: No Data Available</p>
                    <p className="para p-0 m-0">Profile: No Data Available</p>                        
                    </div>                    
                </div>
            </div>
            ) : (
                    <div className="col-12 col-lg-8 userDataCard">
                    <div className="content w-100">
                        <img src={data?.avatar_url} className='rounded-circle center-img' width={100} height={100}  />
                        <p className="heading">{data?.name? data?.name : "Not Added"}</p>
                        <div className='align-self-start'>
                        <p className="para p-0 m-0">User Name: {data?.login ? data?.login: "Not Added"}</p>
                        <p className="para p-0 m-0">Total Public Repo: {data?.public_repos ? data?.public_repos: "Not Added"}</p>
                        <p className="para p-0 m-0">Total Followers: {data?.followers ? data?.followers: "Not Added"}</p>
                        <p className="para p-0 m-0">Total Followings: {data?.following ? data?.following: "Not Added"}</p>
                        <p className="para p-0 m-0">Twitter: {data?.twitter_username ? data?.twitter_username: "Not Added"}</p>
                        <p className="para p-0 m-0">Profile: {data?.html_url ? <a className='d-inline' href={data?.html_url}>{data?.html_url}</a>  : "Not Added"}</p>                        
                        </div>                    
                    </div>
                </div>
            )}
        </>
    );
}

export default React.memo(UserDetails);