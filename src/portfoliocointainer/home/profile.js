import React from 'react'
// import Typical from 'React-Typical'
import "./profile.css"
function Profile() {
    return (
        <div className='profile-cointainer'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                    <div className='colz-icon' >
                    <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                            
                        </a>
                        <a href='#'>
                            
                            <i className='fa fa-linkden'></i>
                            
                        </a>
                        <a href='#'>
                            
                            <i className='fa fa-instagram'></i>
                           
                        </a>
                        <a href='#'>
                           
                            <i className='fa fa-youtube-square'></i>
              
                        </a>
                        <a href='#'>
                            
                            <i className='fa fa-twitter'></i>
                        </a>

                    </div>
                        
                        
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello , I'M <span className='highlighted-text'>Sandeep</span>
                        </span>
                    </div>
                    <div className='profile-deyails-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                            coder
                            {/* <Typical
                                loop={Infinity}
                                steps = {[
                                    "ethu",1000,
                                    "adwqd",1000,
                                    "weww",1000
                                ]}
                            /> */}


                            </h1>

                        </span>
                    </div>
                    <div className='profile-options'>
                   <p> sandeep sjwqheqwuoehqhkwjebwnsbwjhjhdsadsajdhsadjsajdasdhsajk</p>
                   <p> sandeep sjwqheqwuoehqhkwjebwnsbwjhjhdsadsajdhsadjsajdasdhsajk</p>
                   <p> sandeep sjwqheqwuoehqhkwjebwnsbwjhjhdsadsajdhsadjsajdasdhsajk</p>
                   <p> sandeep sjwqheqwuoehqhkwjebwnsbwjhjhdsadsajdhsadjsajdasdhsajk</p>
                        
                    </div>

                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
                


            </div>
        </div>
    )
}
export default Profile;