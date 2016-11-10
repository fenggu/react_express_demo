
/*
 * action 类型
 */ 
export const increase = 'increase';
export const incans = 'incans';
export const getlist = 'getlist';
export const addtest = 'addtest';
export const gettest = 'gettest';
export const question = 'question';
export const changetext='changetext'
export const changeqj='changeqj'
export const changett='changett'
export const changepid='changepid'
/*
 * action 创建函数
 */
export function increaseAction(num) {
  return { type: increase, num}
}
export function incansAction(num) {
  return { type: incans, num}
}
export function getlistAction(list) {
  return { type: getlist,list}
}
export function addtestAction() {
  return { type: addtest }
}
export function gettestAction(pid) {
  return { type: gettest ,pid}
}
export function cgTitle(text){
	return {type : changett,text}
}
export function cgPid(text){
	return {type : changepid,text}
}
export function cgquestionAction(qus,index,attr) {
  return { type: question,qus,index,attr}
}
export function cgtextAction(text,index) {
  return { type: changetext,text,index}
}
export function cgqjAction(text,index,child) {
  return { type:changeqj,text,index,child}
}