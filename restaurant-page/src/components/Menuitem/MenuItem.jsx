import './MenuItem.css';

function MenuItem(props) {
  return(
    <div className='app__menuItem'>
      
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
            <p className='p__cormorant' style={{color: '#DCCA87'}}>{props.title}</p>
        </div>

        <div className='app__menuItem-dash'/>

        <div className='app__menuItem-price'>
            <p className='p__cormorant'>{props.price}</p>
        </div>
      </div>

      <div className='app__menuItem-sub'>
          <p className='p__opensans' style={{color: '#AAA'}}>{props.tags}</p>
      </div>
    </div>
  )
}

export default MenuItem;
