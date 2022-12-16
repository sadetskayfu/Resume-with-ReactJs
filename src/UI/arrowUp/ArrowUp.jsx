import React, { Component } from 'react';
import { Link } from 'react-scroll';
import icons from '../../assets/icons/Arrow-up.svg'
import './style.scss'

class ArrowUp extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 1700 && !this.state.isVisible) {
      this.setState({ isVisible: true });
    } else if (window.scrollY < 1700 && this.state.isVisible) {
      this.setState({ isVisible: false });
    }
  };

  render() {
    return (
      <>
        {this.state.isVisible ?
          <Link
            to={this.props.titleLink}
            smooth={true}
            duration={500}>
            <div className='arrow-up'>
              <img src={icons} />
            </div>
          </Link> :
          null}
      </>
    )
  }
}

export default ArrowUp;