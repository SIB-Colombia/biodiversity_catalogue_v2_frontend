import React, {PropTypes} from 'react';
import styled from 'styled-components';
import {palette} from 'styled-theme';

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  Tooltip,
  Image,
  ModalUI,
  ReactSchemaEasyForm
} from 'components'
import {
  Tabs,
  Tab,
  Card,
  Row,
  Col,
  MediaBox,
  Chip,
  Icon,
  Dropdown,
  NavItem,
  Button,
  Input
} from 'react-materialize';

const Wrapper = styled(Block)`

h5{
  padding: 10px 0px;
  font-weight: bold;
}
.material-placeholder{
  display:inline-block !important;
  margin:2px 5px;
}
.lateral-menu{
    position:fixed;
    left:0px;
    top:100px;
    z-index:1;
    width:200px;
    .table-of-contents a.active{
            border-left: 2px solid #00838f;
    }
    .material-icons{
            vertical-align: middle;
    }
}

`

class FileDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      referenceSchema: {},
      ancillaryDataSchema: {},
      form: {},
      contact: {
        name: '',
        email: '',
        tel: ''
      }
    }

    this.updateReference = this.updateReference.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    $(document).ready(function() {
      $('.modal').modal();
    });
  }

  componentWillMount() {
    this.setState({
      referenceSchema: this.empty(this.props.reference.schema)
    });
    this.setState({
      ancillaryDataSchema: this.empty(this.props.ancillaryData.schema)
    });
  }

  updateReference(propertyName, event) {
    let model = this.state.referenceSchema;
    model[propertyName].value = event.target.value;
    this.setState({referenceSchema: model});
  }

  empty(schema) {
    for (let control in schema) {
      schema[control].value = '';
    }
    return schema;
  }

  load(record, event) {
    for (let control in this.props.reference.schema) {
      this.props.reference.schema[control].value = record[control] || '';
    }
    this.setState({referenceSchema: this.props.reference.schema});
    setTimeout(function() {
      Materialize.updateTextFields();
      $('#modalForm').modal('open');
    }, 100);
  }

  save(event) {

    console.log('save ->', this.state.referenceSchema);

  }

  create(type) {
    switch (type) {
      case 'referenceSchema':
        this.setState({
          referenceSchema: this.empty(this.props.reference.schema)
        });
        $('#modalForm').modal('open');
        break;
      case 'ancillaryDataSchema':
        this.setState({
          ancillaryDataSchema: this.empty(this.props.ancillaryData.schema)
        });
        $('#modalAD').modal('open');
        break;
      default:
    }

  }

  render() {
    return (
      <Wrapper>

        {/* <input type="text" value={this.state.contact.name} onChange={(e) => this.change('name', e)}/> */}
        {/* <input type="text" value={this.state.contact.email} onChange={(e) => this.change('email', e)}/> */}
        {/* <input type="text" value={this.state.contact.tel} onChange={(e) => this.change('tel', e)}/> */}
        {/* this.state.answers.map(function(a) {
            return(<Answer name={a.name} value={a.value} handleChange={this._handleChange} />)
          }); */}
        {/* {JSON.stringify(this.state.contact)} */}
        {/* <ReactSchemaEasyForm schema={this.state.schema} form={this.state.form} model={this.props.model}/> */}
        <br/>

        <Row>
          <h5 className="cyan-text text-darken-4">reference
            <a className="btn-floating waves-effect waves-light grey" onClick={(e) => this.create('referenceSchema', e)}>
              <i className="material-icons">add</i>
            </a>
          </h5>
          <ul className="collection">

            {this.props.reference.data.map((record, i) => (
              <Col s={6} key={i}>
                <li className="collection-item avatar">
                  <i className="material-icons circle blue">insert_chart</i>
                  <span className="title">
                    <b>{record.title}</b>
                  </span>
                  <p>
                    <b>Tags:</b>
                    {record.tags}<br/>
                    <em>Last modified: {record.last_modified}<br/></em>
                  </p>
                  <a className="secondary-content dropdown-button" onClick={(e) => this.load(record, e)}>
                    <i className="material-icons">more_horiz</i>
                  </a>
                </li>
              </Col>
            ))}
          </ul>

          {/* {JSON.stringify(this.state.referenceSchema)} */}
          {/* <ReactSchemaEasyForm schema={this.state.referenceSchema} update={this.updateReference}/> */}

        </Row>

        <Row>
          <div className="lateral-menu card-panel animated bounceInDown">
            <Col className="hide-on-small-only">
              <Icon>list</Icon>
              Índice de ficha
              <ul className="section table-of-contents">
                <li>
                  <a href="#taxo">Taxonomía</a>
                </li>
                <li>
                  <a href="#stateCons">Estado Conservación</a>
                </li>
                <li>
                  <a href="#usetrafic">Uso y tráfico</a>
                </li>
              </ul>
            </Col>
          </div>

          <Col l={8} m={12} s={12}>
            <h5 className="cyan-text text-darken-4">Nombres Comunes</h5>

            {this.props.data.names.map((record, i) => (
              <Col s={6} key={i}>
                <div>{record.title}</div>
                <div>{record.description}</div>
                <br/>
              </Col>
            ))}

            <h5 className="cyan-text text-darken-4">Distribución</h5>
            <p>Mapa de registro publicados</p>
            <img src="https://assets.metrolatam.com/co/2015/03/20/captura-de-pantalla-2015-03-20-a-las-12-42-23-1200x600.jpg" className="responsive-img"/>

            <h5 className="cyan-text text-darken-4">Taxonomía</h5>
            <div id="taxo" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
            </div>

            <h5 className="cyan-text text-darken-4">Estado Conservación</h5>
            <div id="stateCons" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
            </div>

            <h5 className="cyan-text text-darken-4">Uso y tráfico</h5>
            <div id="usetrafic" className="scrollspy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nunc finibus, semper eros et, vehicula elit. Etiam vitae ligula sapien. Vivamus tincidunt nisi urna, eget porttitor purus vestibulum sit amet. Sed vitae suscipit neque. Sed rhoncus a massa et suscipit. Nam a turpis lorem. Nam sed dui lacus. Nulla ultricies placerat turpis, sed commodo eros scelerisque quis. Donec molestie mi mi, at ultricies elit vehicula ac. Fusce sagittis posuere venenatis. Vestibulum erat purus, auctor vel volutpat cursus, dignissim id quam. Nullam et ligula vel urna dictum aliquet sit amet ac erat. Nulla viverra lorem commodo erat pulvinar tincidunt. Quisque elementum lacus non magna tempor, sit amet vulputate ligula lobortis. Phasellus egestas dictum diam vel sollicitudin. Integer ultricies erat ac venenatis malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut auctor, risus vel luctus iaculis, eros lacus gravida lectus, non placerat arcu ligula quis magna. Nam lacus elit, pharetra et nibh non, pretium consectetur mauris. Suspendisse ultricies, eros eu maximus vulputate, massa arcu interdum odio, ac consequat metus ante ac dolor. Maecenas et nisl lacinia, lobortis orci ut, mollis risus. Proin interdum odio at risus hendrerit, eget fringilla purus faucibus. Duis massa nibh, vehicula quis dolor nec, tempor feugiat tellus. Sed aliquam, arcu et maximus varius, purus odio vehicula sapien, et aliquam nisl risus eu ante. Praesent sagittis at mi sit amet pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin cursus nisi at gravida aliquet. Nam pretium leo erat, quis pellentesque ex imperdiet vitae. Vivamus rutrum accumsan rutrum. Ut vel elementum erat, sit amet pretium ex. Integer dictum tristique libero, eget rhoncus eros. Suspendisse eu erat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit pellentesque interdum. Vestibulum eget scelerisque mi, nec eleifend nibh. Nulla semper arcu erat, et rhoncus tortor mattis id. Proin id molestie diam. Morbi elementum quis enim consectetur tempus. Cras id libero erat. Vestibulum ut cursus ligula. Curabitur vel enim sit amet ante egestas blandit. Proin lorem lectus, commodo at mauris quis, gravida venenatis erat. Maecenas sodales et erat vel luctus. Duis tincidunt risus ac metus cursus blandit. Sed non orci volutpat, tristique erat cursus, rhoncus sem. Aliquam vitae mattis eros. Praesent in purus commodo, rhoncus augue sed, mollis justo. Donec tincidunt risus nec est euismod varius. Curabitur libero ligula, placerat quis laoreet non, dignissim ac magna.
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>

          </Col>

          <Col l={4}>

            <h5 className="cyan-text text-darken-4">Jerarquía Taxonómica</h5>
            <ul className="collection">
              {this.props.data.taxo.map((record, i) => (
                <li className="collection-item" key={i}>
                  {record.name}
                  <b>{record.value}</b>
                </li>
              ))}
            </ul>

            <h5 className="cyan-text text-darken-4">Autores</h5>
            {this.props.data.authors.map((record, i) => (
              <div className="center-align" key={i}>
                <div className="chip">
                  <img src={record.url} alt="Contact Person"/> {record.name}
                </div>
              </div>
            ))}

            <h5 className="cyan-text text-darken-4">Información básica de la ficha</h5>
            <ul className="collection">
              {this.props.data.basic.map((record, i) => (
                <li className="collection-item" key={i}>
                  {record.name}<br/> {record.value}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <ModalUI title="Formulario" refe="modalForm">
          <ReactSchemaEasyForm schema={this.state.referenceSchema} update={this.updateReference}/>
          <div className="center-align">
            <a className="waves-effect waves-light btn" onClick={(e) => this.save(e)}>Guardar</a>
          </div>
        </ModalUI>

        <ModalUI title="Formulario" refe="modalAD">
          <ReactSchemaEasyForm schema={this.state.ancillaryDataSchema} update={this.updateReference}/>
          <div className="center-align">
            <a className="waves-effect waves-light btn" onClick={(e) => this.save(e)}>Guardar</a>
          </div>
        </ModalUI>

      </Wrapper>

    )
  }
}

export default FileDetail;