import './Intro.css';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
import { useRef, useState } from 'react';

function Intro (){
  const[playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();

  function handleVideo(){
    setPlayVideo(prevState => !prevState)

    if(playVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }

  return(
    <div className='app__video'>
        <video 
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        />

        <div className='app__video-overlay flex__center'>


          { !playVideo ?
          <div 
          className='app__video-overlay_circle flex__center'
          onClick={handleVideo}
          >
            {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30}/>
            : <BsFillPlayFill color='#fff' fontSize={30}/>}
          </div>
          :
          <div 
          className='app__video-overlay_circle-play flex__center' 
          onClick={handleVideo}
          />}

        </div>
    </div>
  )
}

export default Intro;
