import React,{Component} from 'react';
import GoogleApiComponent from '../../js/GoogleApiComponent'

export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div>Map will go here</div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: __GAPI_KEY__
  })(Container)
  