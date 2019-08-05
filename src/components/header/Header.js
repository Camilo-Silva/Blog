import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            menuShow: "hide"
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        return (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
                ? this.setState({menuShow: "show"})
                : this.setState({menuShow: "hide"})
    }

    render() {
        return (
            <header className={`header ${this.state.menuShow}`}>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </header>
        );
    }
}

export default Header;
