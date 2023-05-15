import React, {useContext} from 'react';
import "./bodyWrapper.css"
import Lottie from "lottie-react";
import bodyAnimation from "./online-communication-concept-using-laptop.json"
import Profile from '../ProfileDetails/profile';
import { UserContext } from '../App';
import UserDetails from '../userDetails/userDetails';
function BodyWrapper() {
    const user = useContext(UserContext);
    return ( 
        <>
            <div className='container text-light pt-5 pt-lg-5'>
                <div className='row g-0 d-flex flex-column-reverse flex-sm-row w-100 h-100'>
                    <div className='col-11 col-sm-7 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                       {user.userName ? <UserDetails /> : <Profile />}
                       
                    </div>
                    <div className='col-10 col-sm-5 col-md-6 d-flex justify-content-center align-items-center justify-content-sm-end h-100'>
                        <div className="animation">
                            <Lottie animationData={bodyAnimation} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default React.memo(BodyWrapper);