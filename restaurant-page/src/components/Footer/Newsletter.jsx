import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading'

function Newsletter(){
  return(
    <div className='app__newsLetter'>
      <div className='app__newsLetter-heading'>
        <SubHeading title='Newsletter'/>
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>

      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your Email'/>
        <button className='custom__button'>Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter;
