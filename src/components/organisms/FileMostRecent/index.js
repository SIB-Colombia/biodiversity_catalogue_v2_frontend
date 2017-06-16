import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Copyright from 'material-ui/svg-icons/action/copyright';
import {
  IconLink,
  Link,
  FileHeader,
  TitleSection,
  FileCarousel,
  FileComment,
  HomeTitle
} from 'components';

import * as FileService from '../../../services/FileService';

const Wrapper = styled.div `
margin-top: 40px;
box-shadow: 0 -22px 180px 1100px #E2E7E7;
.bar-middle{
  background: #316971 !important;
  padding: 10px;
  text-align: center;
  line-height: 0;
  svg{
    color: white !important;
  }
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #316971 transparent;
    position: relative;
    top: -48px;
    left: 22px;
  }
}
.background-1{
  background: #E2E7E7 !important;
}
.background-2{
  background: rgba(248, 248, 248, 0.9) !important;
}
`

class FileMostRecent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentWillMount() {
    this.renderCommments();
  }

  renderCommments = () => {
    FileService.getComments(this.props.id).then(comments => {
      this.setState({comments: comments});
    })
  }

  render() {
    return (
      <Wrapper>
        <div className="bar-middle"><Copyright /></div>
        <Paper zDepth={0} className="background-1">
          <FileCarousel data={this.props.data} title="Fichas relacionadas"/>
        </Paper>
        <Paper zDepth={0} className="paper-padding-2 background-2">
          <FileComment id={this.props.id} comments={this.state.comments} update={this.renderCommments}/>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileMostRecent;
