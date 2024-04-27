// import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiRequestContacts } from "./redux/contactsOps";
import { selectLoading,selectError } from './redux/selectors';



//APP code below

function App() { 

  const dispatch = useDispatch();
  
  // const loading = useSelector(state => state.contacts.loading);
  // const error = useSelector((state) => state.contacts.error);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect (() => {dispatch(apiRequestContacts())}, [dispatch]);

  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  {loading && !error && <Loader />}
  <ContactList />
</div>
  )
}

export default App