import React, {useState} from "react";
import shortid from 'shortid'

import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { addContact } from "../../actions/contactAction";

const AddContact = () => {

    let history = useHistory()

    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const createContact = (e) => {
        e.preventDefault()
        const new_contact = {
            id: shortid.generate(),
            name,
            phone,
            email
        }
        dispatch(addContact(new_contact))
        // setName("")
        // setPhone("")
        // setEmail("")
        history.push('/')
    }
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add A Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
