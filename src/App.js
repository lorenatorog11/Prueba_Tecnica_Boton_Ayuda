import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false
     }
  }

  showInfo = () => {
    this.setState({
      show: true
    })
  } 

  hideInfo = () => {
    this.setState({
      show: false
    })
  }
  render() { 
    const { show } = this.state
    return ( 
      <div className="App">
      <h1>Lorem ipsum </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio est. Mauris vulputate justo augue, in bibendum orci iaculis a. Donec congue bibendum elit faucibus efficitur. Etiam pellentesque nulla in libero dictum sollicitudin. Ut feugiat, velit eget finibus consectetur, libero turpis convallis arcu, non mollis dolor massa vel nisi. Aliquam venenatis risus quam, vitae rhoncus nibh congue nec. Vivamus accumsan efficitur sodales. Fusce gravida urna nec purus bibendum bibendum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio est. Mauris vulputate justo augue, in bibendum orci iaculis a. Donec congue bibendum elit faucibus efficitur. Etiam pellentesque nulla in libero dictum sollicitudin. Ut feugiat, velit eget finibus consectetur, libero turpis convallis arcu, non mollis dolor massa vel nisi. Aliquam venenatis risus quam, vitae rhoncus nibh congue nec. Vivamus accumsan efficitur sodales. Fusce gravida urna nec purus bibendum bibendum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio est. Mauris vulputate justo augue, in bibendum orci iaculis a. Donec congue bibendum elit faucibus efficitur. Etiam pellentesque nulla in libero dictum sollicitudin. Ut feugiat, velit eget finibus consectetur, libero turpis convallis arcu, non mollis dolor massa vel nisi. Aliquam venenatis risus quam, vitae rhoncus nibh congue nec. Vivamus accumsan efficitur sodales. Fusce gravida urna nec purus bibendum bibendum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio est. Mauris vulputate justo augue, in bibendum orci iaculis a. Donec congue bibendum elit faucibus efficitur. Etiam pellentesque nulla in libero dictum sollicitudin. Ut feugiat, velit eget finibus consectetur, libero turpis convallis arcu, non mollis dolor massa vel nisi. Aliquam venenatis risus quam, vitae rhoncus nibh congue nec. Vivamus accumsan efficitur sodales. Fusce gravida urna nec purus bibendum bibendum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id odio est. Mauris vulputate justo augue, in bibendum orci iaculis a. Donec congue bibendum elit faucibus efficitur. Etiam pellentesque nulla in libero dictum sollicitudin. Ut feugiat, velit eget finibus consectetur, libero turpis convallis arcu, non mollis dolor massa vel nisi. Aliquam venenatis risus quam, vitae rhoncus nibh congue nec. Vivamus accumsan efficitur sodales. Fusce gravida urna nec purus bibendum bibendum.</p>
      <div id='info'>
      { show ? <p id='msn'><strong>¿Necesita Ayuda?</strong></p> : null }
      <button id="btn" onMouseOver={this.showInfo} onMouseOut={this.hideInfo} type="submit"></button>
      </div>    
    </div>
     );
  }
}

export default App;
