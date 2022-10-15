import DetailCard from "../../component/DetailCard";
import {useState,useContext,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {ContactContext} from "../../component/context/Contact.provider";

const InfoContact = () => {
    const { contacts } = useContext(ContactContext);
    const [info,setInfo]=useState({});
    const { infoID } = useParams();
    useEffect(() => {
      setInfo(contacts.filter((contact) => contact.id === Number(infoID))[0]);
    }, []);
    return ( 
        <DetailCard info={info} />
     );
}
 
export default InfoContact;