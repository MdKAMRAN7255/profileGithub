import React from 'react'
function AboutApp() {
    return ( 
        <>
        <p className='aboutApp'>
            The GitHub Profile Finder is a simple and easy-to-use web app that allows you to search for GitHub users by their username. With just a few clicks, you can quickly find and view the profiles of other GitHub users, see their repositories, contributions, and other activity.
        </p>
        </>
     );
}

export default React.memo(AboutApp);