import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { includes } from 'lodash';
import './Login.css';
import history from '../../history';
import logofavicon from '../../../assets/Images/overstock_favicon.png';

class TableInfo extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="tablewrap">

                <table >
                    <tbody>
                        <tr>
                            <th></th>
                            <th style={{"backgroundColor":'#e6e6e6',"textAlign":'center'}}>Overstock</th>
                            <th style={{"width":"100px","backgroundColor":'#0000cc',"color":'white',"textAlign":'center'}}>Overstock Professional</th>
                        </tr>
                        
                        <tr>
                            <td >Free Shipping. Over $45</td>
                            <td style={{ "color": 'red',"textAlign":'center' }} >&#9989;</td>
                            <div style={{"height":'84px',"backgroundColor":'white',"position":'relative'}}>
                            <p className="arrow-down" style={{"color": '#0000cc'}}>&#9989;</p>
                            </div>
                        </tr>
                        <tr>
                            <td>New Sales, Every Day</td>
                            <td style={{ "color": 'red',"textAlign":'center'  }}>&#9989;</td>
                            <td style={{ "color": '#0000cc', "textAlign":'center' }}>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Business Exclusive Products</td>
                            <td style={{"textAlign":'center' }}>&#x2716;</td>
                            <td style={{ "color": '#0000cc',"textAlign":'center'  }}>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Dedicated Concierge Account Services</td>
                            <td style={{"textAlign":'center' }}>&#10006;</td>
                            <td style={{ "color": '#0000cc',"textAlign":'center'  }}>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Approval Workflows</td>
                            <td style={{"textAlign":'center' }}>&#10006;</td>
                            <td style={{ "color": '#0000cc',"textAlign":'center'  }}>&#9989;</td>
                        </tr>
                        <tr>
                            <td>Business Tools and Analytics</td>
                            <td style={{"textAlign":'center' }}>&#10006;</td>
                            <td style={{ "color": 'blue',"textAlign":'center'  }}>&#9989;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }
}

export default TableInfo;