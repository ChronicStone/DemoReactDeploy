import React, { useState } from "react"

const MyModal = ({data, setData, showModal, setShowModal}) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState(['email', 'job', 'name'])
    function changeName(event) {
      setName(event.target.value);
    }

    function changeJob(event) {
      setJob(event.target.value);
    }

    function changeEmail(event) {
      setEmail(event.target.value)
    }

    function closeModal() {
      setShowModal(false)
    }

    function clearModalInput() {
      setJob('')
      setName('')
      setEmail('')
    }

    function submitForm() {
      if(!name || !email || !job) return;
      else {
        setData([...data, {name: name, job: job, email: email}])
        clearModalInput()
        setShowModal(false)
      }
    }
    return (
      <>
        { showModal ? 
          <div className="modalContainer">
            <div className="modalBox">
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                <h4 style={{marginTop: "0"}}>Add new user :</h4>
                <p style={{cursor: "pointer", marginTop: "0"}} onClick={closeModal}>X</p>
              </div>
              <div className="customInput">
                <input value={name} onChange={changeName} type="text" required/>
                <label>Name</label>
                { !name ?<div className="errorNotif">The field name is required</div> : <></> }
              </div>
              <div className="customInput">
                <input value={job} onChange={changeJob} type="text" required/>
                <label>Job</label>
                { !job ?<div className="errorNotif">The field job is required</div> : <></> }
              </div>
              <div className="customInput">
                <input value={email} onChange={changeEmail} type="text" required/>
                <label>Email</label>
                { !email ?<div className="errorNotif">The field email is required</div> : <></> }
              </div>
              <button onClick={submitForm} className="myButton">Create user</button>
            </div>
          </div>
          : <></>
        }
      </>
      
    )
  }

  export default MyModal