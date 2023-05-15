import React, { useState,useEffect, useContext } from "react";
import "./navbar.css";
import Lottie from "lottie-react";
import searchAnimation from "./search-users.json"
import search from "./search-bg-white.png";
import gitcat from "./git-cat.json";
import debounce from "lodash.debounce";
import { UserContext } from '../App';

interface setUserName {
  setUserName: (value: string| null) => void;
}

function Navbar({ setUserName }: setUserName) {
  const [profile, setProfile] = useState<string | null>(null)
  const [searchAnimationAppear, setSearchAnimation] = useState<boolean>(false);
  const user = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setProfile(value);
  };

  const debouncedResults = React.useMemo(() => {
    return debounce(handleChange, 2000) ;
  }, []);

  useEffect(() => {
      setUserName(profile);
      user.setgetData(true);
  }, [profile])
  
  return (
    <>
      <nav>
        <div className="container-fluid bg-dark text-center py-3 text-light">
          <div className="row g-0 w-100">
            <div className="col-4 position-relative col-sm-5 d-flex align-items-center h-100 ps-2">
                <div className="gitCat position-absolute">
                  <Lottie animationData={gitcat} />
                </div>
            </div>
            <div className="col-8 col-sm-7 d-flex justify-content-end align-items-center">
              <div className="col-12 col-md-8 col position-relative search-box">
                <input
                  className="search-text w-100 p-3 border rounded-4"
                  type="text"
                  placeholder="Search by username"
                  onChange={(e) => {
                    debouncedResults(e);
                    setSearchAnimation(true);
                  }}                />
                <div className="searchIcon position-absolute">
                  {searchAnimationAppear && user.getdata ? <div className="searchAnimation"><Lottie animationData={searchAnimation}/></div> : <img src={search} className="rounded-4" width={40} height={40}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default React.memo(Navbar);
