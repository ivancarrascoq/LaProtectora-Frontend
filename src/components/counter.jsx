import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    handleIncrement = p => {
        console.log(p);
        this.setState({ count: this.state.count+1 });
    };
    

    renderTags(){
        if (this.state.tags.length === 0) return <p>No records</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    render() {
        
        return (
            <div>
                <span className={ this.getBadgeClasses()} >{ this.formatCount() }</span>
                <button 
                    onClick={ () => this.handleIncrement({ id: 1 }) } 
                    className="btn btn-secondary btn-sm">Increment</button>
                { this.state.tags.length === 0 && 'Please enter new tag!'}
                { this.renderTags() }
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }
        
    formatCount() {
        const { count } = this.state;
        console.log(count);
        return count === 0 ? "Zero" : count;
        }
    }
    
    export default Counter;