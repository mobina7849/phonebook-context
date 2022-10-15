
import './Form.style.css'
import phonebook from "../images/phonebook.jpg";
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import React, { useContext,useState } from "react";
import {contactActions} from "./context/contact.reducer";
import { ContactContext } from './context/Contact.provider';
const Form = ({formm,setFormm,formStatus,setFormStatus}) => {
    const { contacts,contactDispatch } = useContext(ContactContext);
    const [formData, setFormData] = useState({
      id: "0",
      userProfile: "img",
      name: "",
      email: "",
      phone: "",
      age: "",
      country: "",
      favorite: false,
    });

    const nav=useNavigate()
    const handleInputs = (e) => {
        setFormm({ ...formm, [e.target.name]: e.target.value });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("kjhgfd")
        if(formStatus==="add"){
          // setContacts([
          //...contacts,
         // {
           // id: Math.floor(Math.random() *1000),
            //userProfile:"",
            //name: formData.name,
            //email: formData.email,
            //phone: formData.phone,
            //age: formData.age,
            //country: formData.country,
            //favorite: false,
          //},
          //]);
          contactDispatch({type:contactActions.add,payload:{...formm, id:Math.floor(Math.random() *1000),favorite: false}})

        }else{
          //setContacts(contacts.map(item=>(item.id===formData.id ?formData : item)))
          contactDispatch({type:contactActions.update,payload:formm})
          
        }
        setFormm({
          name: "",
          email: "",
          phone: "",
          age: "",
          country: "",
        });
        setFormStatus('add')
        nav("/")
      };
      
    return ( 
        <div className="form">
            <picture>
                <img className='imgPhone' src={phonebook}alt="phonebook" />
            </picture>
            <form className='contentForm' onSubmit={handleSubmit}>
          <input
            onChange={handleInputs}
            type="text"
            className="input fa"
            name="name"
            value={formm.name}
            placeholder="&#xf007; Name"
          />
          <input
            onChange={handleInputs}
            type="email"
            className="input fa"
            name="email"
            value={formm.email}
            placeholder="&#xf0e0; @Email"
          />
          <input
            onChange={handleInputs}
            type="number"
            className="input fa"
            name="phone"
            value={formm.phone}
            placeholder="&#xf3cd; Phone Number"
          />
          <input
            onChange={handleInputs}
            type="number"
            className="input fa"
            name="age"
            value={formm.age}
            placeholder="&#xf073; Age"
          />
          <input
            onChange={handleInputs}
            type="text"
            className="input fa"
            name="country"
            value={formm.country}
            placeholder="&#xf024; Country"
          />
          <button   type="submit" className="btnSubmit">
            {formStatus==="add"?<iconify-icon icon="carbon:user-follow" style={{color: "white", width:"40", height:"40"}}></iconify-icon>:'Update'}
          </button>
            </form>
        </div>
     );
}
 
export default Form;