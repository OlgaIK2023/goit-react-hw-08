import Contact from "../Contact/Contact";


import css from "./ContactList.module.css";
import { useSelector } from 'react-redux'

import {selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from "../../redux/filtersSlice"


const ContactList=() =>{
  const contacts = useSelector(selectContacts);

  

  const filters = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filters .toLowerCase()));
  

  

  return (
    <div>
    
      <ul className={css.contact_list}>
      {(filteredContacts.length===0)? (<p>You do not have any contact!</p> ):
        filteredContacts.map(contact => {
              return (<Contact key={contact.id} contact={contact} />)
          })} 
    </ul>
    </div>
  )
}

export default ContactList