import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {

  render() {
    const styles={
      fox:{
        width: "90%",
        // height: 700,
        display:"block",
        margin:"auto"
      },
      button:{
        display: "block",
        margin: "auto",
        padding: 10
      }
    }
    return (
      <div>
        <button style={styles.button} onClick={() => this.props.getFox()}>Another one</button>
        <br/>
        <img style={styles.fox} src={this.props.fox} alt=""/>
      </div>
    );
  }
}

export default withData(App);