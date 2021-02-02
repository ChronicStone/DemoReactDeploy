import React, { useState, useEffect } from 'react';
import Table2 from "../components/Table2.js"
import Header from "../components/Header.js"
import MyModal from "../components/Modal.js";
import MyModalButton from "../components/ModalButton.js";
import Counter from "../components/Counter.js"

const TableView = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    if(!data || !data.length) {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(apiRes => {
        setData(apiRes.map(user => {
          return {
            name: user.name,
            job: user.company.bs,
            email: user.email 
          }
        }))
      })
    }

    return (
        <div>
            <MyModal data={data} setData={setData} showModal={showModal} setShowModal={setShowModal}/>
            <MyModalButton type="modal" showModal={showModal} setShowModal={setShowModal}/>
            <MyModalButton type="random" data={data} setData={setData} showModal={showModal} setShowModal={setShowModal}/>
            <Table2 users={data}/>
        </div>
    )
}

export default TableView