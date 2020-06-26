import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //not required by react but belongs to js language
  //first function called before anything else
  //same props function we use with functional comp
  constructor(props){
    super(props);//must call this, con func overrides react.comp, we use super to reference react.comp
     
    this.state = {lat: null};
  }

  // React says we have to define render!! if we dont define react with throw error
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position)=> console.log(position),
      (err) => console.log(err)
  );
    return <div>Latitude: </div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root')) 