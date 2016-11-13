import React, { Component } from 'react'; 
import './index.css';
import {  connect } from 'react-redux'; 
import { cgquestionAction } from '../../Redux/actions.js'; 

class RootQuestion extends Component {
  
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.text
        });
    }
  render() {
    const{changeQus}=this.props
    const {ques}=this.props 
    const {num}=this.props  
    return ( 
      <div className="input-group qustion  form-group" id={num}>
        <div> 
         第<span className="num">{num}</span>题： 
         <input className="qustitle" type="text" placeholder="请输入测试名称" id="content"  onChange={changeQus}  value={ques.content} name=""/><br/>   
        </div>
        <div className="qusansDiv form-group">
          A:<input type="text" id="answer.A"  className="qusans  form-control" onChange={changeQus} value={ques.answer.A} name=""/>  <br/>
          B:<input type="text"  id="answer.B" className="qusans  form-control" onChange={changeQus} value={ques.answer.B} name=""/> <br/>
          C:<input type="text"  id="answer.C"   className="qusans  form-control" onChange={changeQus} value={ques.answer.C}  name=""/> <br/>
          D:<input type="text"    id="answer.D" className="qusans  form-control" onChange={changeQus} value={ques.answer.D} name=""/> 
        </div>   
        <div className="input-group inputdetails form-group">
          每项得分(1,2,3,4)：
          <span>A:</span><input type="" name="" id="detail.a"  onChange={changeQus} value={ques.detail.a}/>
          B:<input type="" name="" id="detail.b" onChange={changeQus} value={ques.detail.b}/>
          C:<input type="" name="" id="detail.c" onChange={changeQus}  value={ques.detail.c}/>
          D:<input type="" name="" id="detail.d" onChange={changeQus}  value={ques.detail.d}/>
        </div> 
      </div>  
    )	
  }

}
function mapStateToProps(state,ownProps) {
  // 这里拿到的state就是store里面给的state
  return {    
    ques:ownProps.question,
    num:ownProps.num
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return { 
    changeQus:(e)=> {  
      var target=e.target;
      var inner=target.value; 
      var attr=target.getAttribute("id")
      var question={};
      question.id=attr 
      var p=target.parentNode.parentNode
      var index=parseInt(p.getAttribute("id"))-1;
      dispatch(cgquestionAction(inner,index,attr))
    },
  }
}

// Connected Component
let Question = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootQuestion)

export default Question;