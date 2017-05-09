import React, {PropTypes} from 'react'
import styled, { keyframes } from 'styled-components';
import {Grid, Row, Col} from 'react-flexbox-grid';

const floating = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(0, -10%, 0);
  }
  55% {
    transform: translate3d(0, -10%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const floatingShadow = keyframes`
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(0.85);
  }
  55% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
`;


const Wrapper = styled.div `
.container {

  background-color: #f7f7f7;
  color: #9b9b9b;
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 16px;
}
.container h1 {
  font-size: 32px;
  margin-top: 0px;
}

.boo-wrapper {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  paddig-top: 64px;
  paddig-bottom: 64px;
}

.boo {
  width: 160px;
  height: 184px;
  background-color: #f7f7f7;
  margin-left: auto;
  margin-right: auto;
  border: 3.39394px solid #9b9b9b;
  border-bottom: 0;
  overflow: hidden;
  border-radius: 80px 80px 0 0;
  box-shadow: -16px 0 0 2px rgba(234, 234, 234, 0.5) inset;
  position: relative;
  padding-bottom: 32px;
  animation:  ${floating} 3s ease-in-out infinite;
}
.boo::after {
  content: '';
  display: block;
  position: absolute;
  left: -18.82353px;
  bottom: -8.31169px;
  width: calc(100% + 32px);
  height: 32px;
  background-repeat: repeat-x;
  background-size: 32px 32px;
  background-position: left bottom;
  background-image: linear-gradient(-45deg, #f7f7f7 16px, transparent 0), linear-gradient(45deg, #f7f7f7 16px, transparent 0), linear-gradient(-45deg, #9b9b9b 18.82353px, transparent 0), linear-gradient(45deg, #9b9b9b 18.82353px, transparent 0);
}
.boo .face {
  width: 24px;
  height: 3.2px;
  border-radius: 5px;
  background-color: #9b9b9b;
  position: absolute;
  left: 50%;
  bottom: 56px;
  transform: translateX(-50%);
}
.boo .face::before, .boo .face::after {
  content: '';
  display: block;
  width: 6px;
  height: 6px;
  background-color: #9b9b9b;
  border-radius: 50%;
  position: absolute;
  bottom: 40px;
}
.boo .face::before {
  left: -24px;
}
.boo .face::after {
  right: -24px;
}

.shadow {
  width: 128px;
  height: 16px;
  background-color: rgba(234, 234, 234, 0.75);
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  animation: ${floatingShadow} 3s ease-in-out infinite;
}

`

class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Wrapper>
        <div className="container animated fadeIn">
          <div className="boo-wrapper">
            <div className="boo">
              <div className="face"></div>
            </div>
            <div className="shadow"></div>
            <h1>Ups!</h1>
            <p>
              La página solicitada no está disponible!
            </p>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default NotFound;
