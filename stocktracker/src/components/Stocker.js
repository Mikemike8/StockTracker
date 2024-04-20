import React, { Component } from 'react';
import { iex } from '../config/iex.js';
import {stock} from '../resources/stock.js'
class StockRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }


    applyData(data){
        this.setState({
            data: data[data.length - 1]
        })

    }

    componentDidMount() {
        // query API
        // const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`

        // fetch(url)
        //     .then(response => response.json())
            stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() {
        return (
            <tr>
                {/* equal sign from app js ticker */}
                <td>{this.props.ticker}</td>
                {/* this.state.price from constructor */}
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
            </tr>
        );
    }
}

export default StockRow;
