import React, { Component } from 'react'; 
import './index.css';
import { cgtextAction } from '../../Redux/actions.js'; 
import { cgqjAction } from '../../Redux/actions.js'; 
import {  connect } from 'react-redux';

class RootAnsDeail extends Component {

  render() {
    const{handleTextChange,handleQjchange}=this.props
    return ( 
      <div className="ansdetail" data-num={this.props.num}>
          <input type="text" type="number" value={this.props.ansdeqj1} data-num="0" onChange={handleQjchange}/>至 <input type="text" data-num
          ="1"  type="number"  onChange={handleQjchange} value={this.props.ansdeqj2}/> <br/>
          <textarea defaultValue={this.props.ansdetext} value={this.props.ansdetext} onChange={handleTextChange}></textarea>
      </div>
    )	
  }

}
function mapStateToProps(state) {
  // 这里拿到的state就是store里面给的state
  return {  
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {  
    handleTextChange:(e)=>{ 
      var target=e.target;
      var inner=target.value;  
      var p=target.parentNode
      var index=parseInt(p.getAttribute("data-num"));
     dispatch(cgtextAction(inner,index)) 
    },
    handleQjchange:(e)=>{ 
      var target=e.target;
      var inner=target.value;  
      var child=target.getAttribute("data-num")
      var p=target.parentNode
      var index=parseInt(p.getAttribute("data-num"));
     dispatch(cgqjAction(inner,index,child)) 
    }
  }
}
// Connected Component
let AnsDeail = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootAnsDeail)

export default AnsDeail;