import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = () =>{
    return(
        <>
         <div className="post">
                <div className="postinfo">
                    <img className="postinfoimg" src="https://www.bing.com/th?id=OIP.KZXn-1mnBQnChIsmYT2k7QHaH3&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2 " alt="shah rukh khan"/>
                    <div className="postinfousername">shah rukh khan</div>
                    <div className="timeinginfo">. 36 min</div>   
                </div>
                <div className="postimg">
                    <img className="postimage" src="https://www.bing.com/th?id=OIP.KZXn-1mnBQnChIsmYT2k7QHaH3&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2 " alt=""/>
                </div>
                <div className="iconsblock">
                    <div className="lefticon">
                    <FavoriteBorderIcon sx={{fontsize:"30px"}}/> 
                    <ChatBubbleOutlineIcon sx={{fontsize:"30px"}}/>
                    <SendIcon sx={{fontsize:"30px"}}/>
                     </div>
                     <div>
                     <BookmarkBorderIcon sx={{fontsize:"30px"}}/>
                     </div>
                </div>
                <div className="likesection">
                    <div className="imageslike">
                        <img className="likeimg" src="https://www.bing.com/th?id=OIP.KZXn-1mnBQnChIsmYT2k7QHaH3&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                        <img className="likeimg2" src="https://www.bing.com/th?id=OIP.KZXn-1mnBQnChIsmYT2k7QHaH3&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                    </div>
                    <div className="nuoflikes">
                        112,2345 likes
                    </div>
                </div>

                <div className="postabout">
                    <div className="postaboutname"> Tiger shroff </div>
                    <div className="infocomment"> India businesses agree: social media is the ...</div>
                </div>
                <div className="numofcomment">
                    View All 467 Comments
                </div>
                <div className="addcomments">
                    Add a Comment...
                </div>
            </div>
        </>
    )
}

export default Post;