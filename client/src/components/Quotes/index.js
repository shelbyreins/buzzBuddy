import React, { Component } from 'react';

class Quotes extends Component {
    state = {
        quotes: [],
        counter: 0
    }

    componentDidMount() {
        fetch(
            "https://quote-garden.herokuapp.com/quotes/search/successful"
        )
            .then(response => response.json())

            .then(data => {
                let results = data.results
                results = results.map(result => {
                    result = {
                        quote: result.quoteText,
                        author: result.quoteAuthor
                    }
                    return result;
                })
                this.setState({
                    quotes: results
                });
                this.counter()

            });
    }

    setCounter = () => {
        this.setState({ counter: this.state.counter >= this.state.quotes.length - 1 ? 0 : this.state.counter + 1 })
    }

    counter = () => {
        setInterval(() => { this.setCounter() }, 10000)
    }

    render() {
        return (
            <div className="jumbotron" id="quotes-container">
                <div className="container">
                    <h4 id="quotes">{this.state.quotes[this.state.counter] ? this.state.quotes[this.state.counter].quote : ''}</h4>
                </div>
            </div>
        );
    }
}

export default Quotes;