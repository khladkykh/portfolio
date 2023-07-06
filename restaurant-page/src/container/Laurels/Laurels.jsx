import './Laurels.css';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';

function Laurels(){

  const AwardCard = ({award}) => (
    <div className='app__laurels_awards-card'>
        <img src={award.imgUrl} alt='award'/>
        <div className='app__laurels_awards-card_content'>
            <p className='p__cormorant' style={{color: '#DCCA87'}}>{award.title}</p>
            <p className='p__cormorant'>{award.subtitle}</p>
        </div>
    </div>
  )

  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
        <div className='app__wrapper_info'>
          <SubHeading title="Awards & recognition"/>
          <h1 className='headtext__cormorant'>Our Laurels</h1>

          <div className='app__laurels_awards'>
              {data.awards.map(award => <AwardCard key={award.title} award={award}/>)}
          </div>
        </div> 

        <div className='app__wrapper_img'>
            <img src={images.laurels} alt='laurels'/>
        </div>
    </div>
  )
}

export default Laurels;
