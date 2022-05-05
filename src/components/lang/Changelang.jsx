import React, { Component } from 'react'
import './Changelang.css'

//Flags
import flagTR from '../../assets/TR.png';
import flagUS from '../../assets/US.png';

 class Changelang extends Component {
    state = {  
        flag:flagUS
    }
  render() {
    const {contents,changeLanguage} = this.props;
    return (
      <div  id='changelang'>
          <div className="changelang">
              <div className="changelang-text">
                {contents.bannerHead}
              </div>
              <div className="change-lang">
                     <img className='flag' src={this.state.flag} alt='flag' onClick={()=>{
                        changeLanguage();
                        this.state.flag === flagUS ? this.setState({flag:flagTR}) : this.setState({flag:flagUS});
                    }}/>
                    <span className='lang-text'>{this.state.flag === flagUS ? 'EN' : 'TR'}</span>
              </div>
          </div>
      </div>
    )
  }
}
export default Changelang;