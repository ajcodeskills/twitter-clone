import React from "react";
import Modal from "react-modal";
import {useDispatch} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import {AiOutlineTwitter} from 'react-icons/ai';

import {registeruser} from '../../redux/Register/action'
import {
 style,
 Icons,
 Title,
 Input,
 Text,
 Button
} from './signup'

const initState = {
  name: "",
  phone:"",
  email:"",
  password:""
}
Modal.setAppElement('#root')
function Signup({open, handleClose}) {
  const [isOpen, setIsOpen] = React.useState(open);
  const [isEmail, setIsEmail] = React.useState(false);
  const [query, setQuery] = React.useState(initState);
  const {name, phone, email, password} = query;
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setQuery({...query, [name]: value});
  }
  const handleSubmit = () => {
    const payload = query;
    dispatch(registeruser(payload))
  }
  return (
    <Modal isOpen = {isOpen} onRequestClose={handleClose} style = {style}>
      <Icons>
        <AiOutlineTwitter color= "white" size= "2rem"/>
      </Icons>
      <Title primary>Create your account</Title>
      <Input placeholder = "Name" value = {name} name = "name" onChange = {handleChange}/>
      {!isEmail && <Input placeholder = "Phone" value = {phone} name = "phone" onChange = {handleChange} />}
      {isEmail && <Input placeholder = "Email" value = {email} name = "email" onChange = {handleChange}/>}
      <Input placeholder = "password" value = {password} name = "password" onChange = {handleChange}/>
      <Text primary onClick = {()=> setIsEmail(prev => !prev)}>{!isEmail ? "Use email instead" : "Use phone instead"}</Text>
      <Button primary onClick = {handleSubmit}>Signup</Button>
    </Modal>
  );
}

export default Signup;
