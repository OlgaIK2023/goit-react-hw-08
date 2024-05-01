// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";
// import {
//   MAX_CHAR_NAME_VALIDATION,
//   MIN_CHAR_PASSWORD_VALIDATION,
// } from "../utils/constants";


import { useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from '../redux/auth/selectors';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import Loader from '../components/Loader/Loader';
import { Helmet } from 'react-helmet-async';

const RegistrationPage = () => {
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);
    return (<>
        <Helmet>
                <title>Register Page</title>
        </Helmet>
          {loading && !error ? <Loader />:<RegistrationForm />}
        </>
          
        )
      }
  
  export default RegistrationPage