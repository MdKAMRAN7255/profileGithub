import React, { useState } from "react";
import "./navbar.css";
import { Loading } from 'react-loading-dot'
import Lottie from "lottie-react";
import searchAnimation from "./search-users.json"
import search from "./search-bg-white.png";
import gitcat from "./git-cat.json"
function Navbar() {
    const [profile, setProfile] = useState<string>()
  return (
    <>
      <nav>
        <div className="container-fluid bg-dark text-center py-3 text-light">
          <div className="row g-0 w-100">
            <div className="col-6 d-flex align-items-center h-100 ps-2">
                <div className="gitCat">
                  <Lottie animationData={gitcat} />
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <div className="col-12 col-md-8 col position-relative search-box">
                <input
                  className="search-text w-100 p-3 border rounded-4"
                  type="text"
                  placeholder="Search Anything"
                  onChange={(e) => setProfile(e.target.value)}
                />
                <div className="searchIcon position-absolute">
                  {profile ? <div className="searchAnimation"><Lottie animationData={searchAnimation}/></div> : <img src={search} className="rounded-4" width={40} height={40}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
