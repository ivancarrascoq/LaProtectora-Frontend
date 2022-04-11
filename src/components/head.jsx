import React, { Component } from 'react';

class Head extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="manifest" href="/docs/5.1/assets/img/favicons/manifest.json"/>
                    <link rel="mask-icon" href="/docs/5.1/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3"/>
                    <link rel="icon" href="/docs/5.1/assets/img/favicons/favicon.ico"/>
                    <meta name="theme-color" content="#7952b3"/>
                </head>
            </React.Fragment>
        );
    }
}

export default Head;