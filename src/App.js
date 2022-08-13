import React, { Component } from 'react'
import './App.css';
import { Hasil, ListCategories, NavbarComponent, Menus } from "./components";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from './utils/constants';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
    }
  }

    componentDidMount(){
      axios
      .get(API_URL + "/products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
    
  }

  render() {
    const {menus} = this.state
    return (
      <div className="App">
      <NavbarComponent/>
      <div className="mt-2">
        <Container fluid>
          <Row>
            <ListCategories/>
            <Col>
            <h4><strong>Daftar Produk</strong></h4>
            <hr/>
            <Row>
              {menus && menus.map((menu) => (
                <Menus
                  key={menu.id}
                  menu={menu}
                />
              ))}
            </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>

       </div>
    </div>
    )
  }
}
