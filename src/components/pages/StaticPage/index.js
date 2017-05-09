import React, {PropTypes} from 'react';
import {injectGlobal} from 'styled-components';
import {PageTemplate, Header, Footer, StaticAbout} from 'components';

class StaticPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillMount() {
    injectGlobal `
      body{
        background-image: url(/background/82168_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `;
  }

  render() {
    return (
      <PageTemplate header={< Header />} footer={< Footer />}>
        <StaticAbout/>
      </PageTemplate>
    )
  }
}

export default StaticPage;