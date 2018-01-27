import React ,{Component}from 'react';
import {mapStateToProps} from '../common';
const key='Example';

class Example extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentWillMount(){
  	this.init()
  }
  init(){

  }
  render(){
  	const {}=this.state;
  	const {}=this.props;
  	return (<div>例子</div>)
  }
}




export default mapStateToProps(key)(Example);
