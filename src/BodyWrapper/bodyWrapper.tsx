import * as React from 'react';
import "./bodyWrapper.css"
import Lottie from "lottie-react";
import bodyAnimation from "./online-communication-concept-using-laptop.json"
function BodyWrapper() {
    return ( 
        <>
            <div className='containert text-light'>
                <div className='row w-100 h-100'>
                    <div className='col-6'>
                        
                    </div>
                    <div className='col-6 h-100'>
                        <div className="animation">
                            <Lottie animationData={bodyAnimation} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BodyWrapper;