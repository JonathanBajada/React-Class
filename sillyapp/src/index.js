import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //not required by react but belongs to js language
  //first function called before anything else
  //same props function we use with functional comp
  constructor(props){
    super(props);//must call this, con func overrides react.comp, we use super to reference react.comp
     
    this.state = {
      lat: null,
      errorMessage: ""
    };//our state object

    //we put this here so that the location is updated before jsx is rendered second time
    window.navigator.geolocation.getCurrentPosition(
      (position) => { 
        console.log(position);
          this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message})
        console.log(err)
      }
    );
  }

  // React says we have to define render!! if we dont define react with throw error
  render() {
    return (
    <div>
      Latitude: {this.state.lat}
      <br/>
      Error: {this.state.errorMessage}
    </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root')) 