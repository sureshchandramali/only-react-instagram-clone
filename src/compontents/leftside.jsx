import React from "react";
import './leftside.css';
import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { Compass } from 'lucide-react';
import { Film } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Bell } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import userprofile from '../assets/user.png'
import  instagramlogo from'../assets/instagram.png';
import { AtSign } from 'lucide-react';
import { Menu } from 'lucide-react';




const leftside =()=>{
    return (
        <>
        <div className="leftsidepart">
            <div className="logopart">
                <img className="logo" src={instagramlogo} alt="instagram"></img>
            </div>

            <div className="navlink">
                <div className="links">
                <Home style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Home</div>
                </div>
                <div className="links">
                <Search style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Search</div>
                </div>
                <div className="links">
                <Compass style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Explore</div>
                </div>
                <div className="links">
                <Film style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Reels</div>
                </div>
                <div className="links">
                <MessageCircleMore style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Messages</div>
                </div>
                <div className="links">
                <Bell style={{fontSize:"40px",margin:"0 20px 0 0"}}/>
                <div className="navname">Notifications</div>
                </div>
                <div className="links">
                <SquarePlus style={{fontSize:"20px",margin:"0 20px 0 0"}}/>
                <div className="navname">Create</div>
                </div>
                <div className="links">
                <img className="userprofile" src={userprofile} alt="userprofile"></img>
                <div className="navname">Profile</div>
                </div>

                <div className="belowpart">
                <div className="links">
                <AtSign style={{fontSize:"20px",margin:"0 20px 0 0"}}/>
                <div className="navname">Threads</div>
                </div>
                <div className="links">
                <Menu style={{fontSize:"20px",margin:"0 20px 0 0"}}/>
                <div className="navname">More</div>
                </div>
                </div>


            </div>

        </div>
        </>
    );
}

export default leftside;