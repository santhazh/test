import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import logo from '../../../assets/Images/Overstock_logo.png';
import './Login.css';
import TableInfo from './table'


const LoginPage = () => {
    return(
        <Fragment>
            <div className="bgStyle">
            <Grid>
                <Row>    
                    <h1 className="bannerTitle_1"> Discover the one-stop shop that works for you. </h1>  
                    
                    <Col  lg={6} md={6} xs={12}>
                        <LoginForm />
                    </Col>
                    
                    <Col  lg={6} md={6} xs={12}>
                        <TableInfo />
                    </Col>
                </Row>
            </Grid>
            </div>
        </Fragment>    
    );
};


export default LoginPage;
