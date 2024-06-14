import React from "react";
import "./middleside.css";
import story from "../story.json";
import insta from "../assets/instagram.png"
import Post from "./post/post";
const middleside = () => {
  const storys = story.story;
  return (
    <>
      <div className="middlehomeside">
        <div className="mobiletopbar">
          <div className="instalogo">
            <img className="instalogomobile" src={insta}/>
          </div>
        </div>
        <div className="storyblock">
          {storys?.map((item, index) => {
            return (
              <>
                <div className="storyparticuler">
                  <div className="imagediv">
                    <img className="statusimg" src={item.img} />
                  </div>
                  <div className="profilename">{item.name}</div>
                </div>
              </>
            );
          })}
        </div>

        <div className="postsection">
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
};

export default middleside;
