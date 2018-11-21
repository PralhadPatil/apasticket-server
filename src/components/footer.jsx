import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div style={styles.footer}></div>
        );
    }
}

let styles = {
    footer : {
        bottom: "0",
        width: "100%",
        height: "200px",
        backgroundColor: "#414141"
    }
}