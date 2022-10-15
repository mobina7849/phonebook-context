import React,{useContext,useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ContactContext } from '../../component/context/Contact.provider';
import Form from "../../component/Form"
const AddContact = () => {
    const { contacts } = useContext(ContactContext);
    const[formStatus,setFormStatus]=useState('')
    const [formm , setFormm]=useState(    {  id: "0",
    userProfile: "img",
    name: "",
    email: "",
    phone: "",
    age: "",
    country: "",
    favorite: false,
  });
    const { updateID } = useParams();
    useEffect(() => {
        if(updateID){
            setFormm(contacts.filter((contact) => contact.id === Number(updateID))[0]);
            setFormStatus('update')
        }else{
            setFormStatus('add')
        }

        
    }, []);
    // console.log(formm)
    // console.log(formStatus)

    return ( 
        <Form setFormStatus={setFormStatus} formStatus={formStatus} formm={formm} setFormm={setFormm} />
       );
}
 
export default AddContact;