import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import View from './View';
import { useDispatch, useSelector } from 'react-redux';
import { ad, increment,edit } from './App/Todo';

function App() {
  // localStorage.clear('data')
  // localStorage.clear('id')
  let task=useSelector((state)=>state.todo.task);
  let up=useSelector((state)=>state.todo.up);
  let dispatch=useDispatch()
  let [data,setdata]=useState([]);
  let [i,seti]=useState(0);
  let temp,id;

  useEffect(()=>{
      temp=JSON.parse(localStorage.getItem('temp'))
      id=localStorage.getItem('id')
  },[])

  useEffect(()=>{
    if(data!="")
    {
      localStorage.setItem('data', JSON.stringify(data)); 
      localStorage.setItem('temp', JSON.stringify(data)); 
      dispatch(increment(JSON.parse( localStorage.getItem('data'))))
      localStorage.setItem('id',i);    
    }
    else{
      if(temp!=null)
      {
        setdata(temp)
        seti(id)
      }
    }
  },[data])

  const add=()=>{
       if(up!="edit")
       {
        if(i!=0)
        {
            setdata([...JSON.parse( localStorage.getItem('temp')),{id:i,val:task,check:false}])
        }
        else
        {
            setdata([{id:i,val:task,check:false}]);
        }
          seti(parseInt(i)+1);
       }
       else{
         dispatch(edit(task))
       }
  }
  return (
    <>
      <input 
        type="text"
        value={task}
        onChange={(e) => dispatch(ad(e.target.value))}/>
      <input
        type="button"
        value='add'
        onClick={add}/>
      <br/><br/>
      <View></View>
    </>
  );
}

export default App;
