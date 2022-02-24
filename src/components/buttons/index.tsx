import React, {useContext} from 'react';

import { BiPencil } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import {TableContext} from '../../context/tableContext'

import './index.css';

export default function Buttons(props: any){
  const {data, setData, show, setShow, setEdit} = useContext(TableContext);


  const removeClient = (id: number) => {
    const existId = data.find(datas => {
      if(datas.id === id){
          return datas;
      }
      return 0;
    });
    if(existId){
      const removeArr = [...data].filter(datas => datas.id !== id);
      setData(removeArr)
      
    }
  }

  const showModal = () =>{
    setShow(!show)
    setEdit(data[props.removeClient - 1])
  }
    return (
      <div className="functionsTable">
        <button type="submit" className="editButton" onClick={showModal} >
          <BiPencil/>
        </button>
        <button type="submit" className="deleteButton" onClick={() => removeClient(props.removeClient)}>
          <MdOutlineClose />
        </button>
      </div>
    );
}