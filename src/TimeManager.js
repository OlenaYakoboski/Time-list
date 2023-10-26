import { Component } from 'react';
import done from './done.jpg';


export class TimeManager extends Component{

     state = {
     userInput:"",
     timeList: []
 
     }
 
     onChangeEvent(e){
         this.setState({userInput:e})
         
     }
 
     addItem(input){
         if (input === '') {
             alert('Please enter an etem')
         }
         else{
         let listArray=this.state.timeList;
         listArray.push(input);
         this.setState({timeList:listArray, userInput: ''})
       
 
     }}
 
     deleteItem(){
         let listArray=this.state.timeList;
         listArray=[]
         this.setState({timeList:listArray})
     }
 
     crossWord(event){
         const li=event.target;
         li.classList.toggle('crossed');
     }
 
     onFormSubmit(e){
         e.preventDefault();
     }
 
 
 
     render(){
         return(
             <div>
                 <form onSubmit={this.onFormSubmit}>
             
                 <div className="container">
                     <input type = "text" 
                 placeholder = "Plans for the day"
                 onChange={(e) => {this.onChangeEvent(e.target.value)}}
                 value = {this.state.userInput}/>
                 </div>
 
                 <div className="container">
                     <button onClick={() =>this.addItem(this.state.userInput)}className="Btn Add">Add</button>
 
                 </div>
 
                 <ul>
                     {this.state.timeList.map((item,index)=>(
                 <li onClick={this.crossWord} key={index}>
                     <img src={done}alt='done'width='40px'/>{item}</li>        
                     ))}
                 </ul>
                 <div className="container">
                 <button onClick={() =>this.deleteItem()}className="Btn Delete">Delete</button> 
                 </div>
                 </form>
                 </div>
            
         )
     }
 }