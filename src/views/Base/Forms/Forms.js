import React, { Component } from 'react';
import {

  Card,
  CardBody,
  CardHeader,
  Col,
  Button,
  FormGroup,
  Form,
  Input,
  
  Label,
  Row,
} from 'reactstrap';

import {fetchPosts} from './../../../actions';
import {connect} from 'react-redux';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      name: '',
      cardNo:'',
      month:''
    };
  }

  componentDidMount(){
    this.props.fetchPosts();
    console.log(this.props.posts);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  handleButtonClick = () =>{
    console.log(this.state);
  }

  componentDidUpdate(){
    console.log('component updated',this.props.posts);
  }

  onFieldChange =(e,type) =>{
    if(type === 'name'){
      this.setState({name:e.target.value});
    }
    else if(type === 'month'){
      this.setState({month:e.target.value});
    }
    else{
      this.setState({cardNo:e.target.value});
    }
    console.log('value changes',type,e.target.value);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Form>
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Credit Card</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Name</Label>
                      <Input type="text" id="name" placeholder="Enter your name" value={this.state.name} onChange={ (e) => this.onFieldChange(e,'name')} required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Credit Card Number</Label>
                      <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" value={this.state.cardNo} onChange={(e) =>this.onFieldChange(e,'cardNo')} required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Month</Label>
                      <Input type="select" name="ccmonth" id="ccmonth" value={this.state.month} onChange={(e)=>this.onFieldChange(e,'month')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  
        </Row>
        <Row>
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button color="primary" onClick={this.handleButtonClick} type="submit">Primary</Button>
        </Col>
        </Row>
      
      </CardBody>
      </Card>
      </Col>
      </Row>
      </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps,{fetchPosts})(Forms);
