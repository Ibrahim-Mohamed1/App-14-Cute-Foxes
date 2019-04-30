import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            fox: []
        }
    }

    componentDidMount() {
        this.getFox()
    }

    getFox = () => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://randomfox.ca/floof/`).then(res => {
          console.log(res.data)
            this.setState({
                fox: res.data.image
            })
        })
    }

    render() {
        return (
            <Provider value={{
                getFox: this.getFox,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}