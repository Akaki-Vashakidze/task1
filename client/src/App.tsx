import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import useStore from './store';
import DataList from './components/list';

function App() {
  
  const data = useStore((state) => state.data)
  useEffect(()=> {
    getData()
  },[])
  console.log(data)
  const onDataChange = () => {
    console.log('data changed')
  }
  const saveServerData = useStore((state) => state.loadData)

  const getData = () => {
    axios.get('api')
    .then(res => {
      saveServerData(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <DataList onDataChange = {onDataChange} />
    </>

  );
}

export default App;


