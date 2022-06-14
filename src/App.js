import './App.css';
import {useState} from 'react';
import FormInput from "./components/FormInput";


const App = () => {

  const[values,setValues]=useState({
    Firstname:"",
    Lastname:" ",
    email:"",
    password:"",
    confirmPassword:""

  });

  const inputs=[
    {
    id:1,
    name:"Firstname",
    type:"text",
    placeholder:"Firstname",
    errorMessage:"Firstname should be 3-16 characters and shouldn't include any special character!",
    label:"Firstname",
    pattern:"^[A-Za-z0-9]{3,16}$",  //regex code to search pattern code
    required:true  
  },

  {
    id:2,
    name:"Lastname",
    type:"text",
    placeholder:"Lastname",
    errorMessage:"Lastname should be 3-16 characters and shouldn't include any special character!",
    label:"Lastname",
    pattern:"^[A-Za-z0-9]{3,16}$",  //regex code to search pattern code
    required:true 

  },

  {
    id:3,
    name:"Email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    required:true  
  },

  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"password",
    errorMessage:"Password should be 8-20 characters and include atleast 1 letter,1 number,1 special character!",
    label:"password" ,   
    pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}",
    required:true  
 
  },

  {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Passwords don't match",
    label:"Confirm Password",
    pattern:values.password,
    required:true  
  
  }
  ]
 
const handleSubmit = (e)=> {
  e.preventDefault();
  
}

const onChange = (e) => {
  setValues({...values,[e.target.name]: e.target.value});
};
console.log(values);

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h1> Register </h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>

  )
}

export default App;

