let Counter = React.createClass({
  getInitialState: function(){
    return {count: this.props.initialCount}
  }, 
  
  inc: function(){
    this.setState({count: this.state.count + 1})
  },
  dec: function(){
    this.setState({count: this.state.count - 1})
  },
  render: function(){
    return (
      <div className="the-app">
        <button onClick={this.dec} className="popped button is-info">-</button>
        <Num count={this.state.count} />
        <button onClick={this.inc} className="popped button is-info">+</button>
      </div>
    )
  }
});
    
let Num = React.createClass({
  render: function(){
    return <div className="boom">{this.props.count}</div>
  }
})
    
  
ReactDOM.render(
  <Counter initialCount={0}/>,
  document.getElementById('app')
);