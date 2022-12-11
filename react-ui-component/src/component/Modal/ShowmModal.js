import React,{useState} from 'react';
import Modal from './Modal';
import "./Modal.css"

const ShowmModal = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
    <button onClick={()=>{setShow(true)}} >Show Modal</button>
        <Modal show={show} onClose={()=>setShow(false)} >
            <h1>helloooo</h1>
        </Modal>
    </div>
  )
}

export default ShowmModal