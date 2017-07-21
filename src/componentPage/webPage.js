import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Collapse, Container, Col, Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, NavLink, Row, Modal, ModalHeader, ModalBody } from 'reactstrap'
import loginForm from '../formPage/loginForm'
import registerForm from '../formPage/registerForm'
import 'bootstrap/dist/css/bootstrap.css'

export default class webPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalRegister: false,
            modalLogin: false
        };
        this.toggleRegister = this.toggleRegister.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }
    toggleRegister() {
        this.setState({
            modalRegister: !this.state.modalRegister
        })
    }
    toggleLogin() {
        this.setState({
            modalLogin: !this.state.modalLogin
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar color="faded" light toggleable>
                        <NavbarToggler right />
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#" onClick={this.toggleRegister}>Register</NavLink>
                                    <Modal isOpen={this.state.modalRegister} toggler={this.toggleRegister} className={this.props.className}>
                                        <ModalHeader toggle={this.toggleRegister}>Register</ModalHeader>
                                        <ModalBody>
                                            <Container>
                                                <Row>
                                                    <Col xs="10">
                                                        <Route exact component={registerForm} />
                                                    </Col>
                                                    <Col xs="2">
                                                    </Col>
                                                </Row>

                                            </Container>
                                        </ModalBody>
                                    </Modal>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" onClick={this.toggleLogin}>Login</NavLink>
                                    <Modal isOpen={this.state.modalLogin} toggler={this.toggleLogin} className={this.props.className}>
                                        <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                                        <ModalBody>
                                            <Container>
                                                <Row>
                                                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                                                        <Route exact component={loginForm} />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </ModalBody>
                                    </Modal>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </BrowserRouter>
        );
    }

} 