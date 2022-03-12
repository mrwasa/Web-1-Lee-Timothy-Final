import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';


const Youtube = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        },
    };

    return (
        <YoutubeStyled className='Youtube'>
            <YouTube 
            videoId="9BdtGjoIN4E"
            id="Video"
            title="TheTermUX"
            opts={opts}
            />
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`

`;