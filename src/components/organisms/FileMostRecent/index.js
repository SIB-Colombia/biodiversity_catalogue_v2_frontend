import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {
  IconLink,
  Link,
  FileHeader,
  TitleSection,
  FileCarousel,
  FileComment
} from 'components';

import * as FileService from '../../../services/FileService';

const Wrapper = styled.div `
.paper{
background: ${palette('grayscale', 1)} !important;
}
box-shadow: 0 -22px 120px 100px ${palette('grayscale', 1)};
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
        <Paper zDepth={0} className="paper-padding-2 paper">
          <TitleSection align="center" color="basescale-6" className="padding-top-2">Fichas relacionadas</TitleSection>
          <FileCarousel data={this.props.data}/>
          <TitleSection align="center" color="basescale-6" className="padding-top-2 padding-bottom-3">Comentarios</TitleSection>
          <FileComment id={this.props.id} comments={this.state.comments} update={this.renderCommments}/>
        </Paper>
      </Wrapper>
    )
  }
}

export default FileMostRecent;
