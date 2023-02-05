import React, {useState} from 'react';
import './ContactMe.css';
function ContactMe(){
    const [email , setEmail] = useState('');
    const [text,setText]=useState('');
    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
    const handleTextChange = (e)=>{
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        if(handleEmailChange =="")
        {
          alert("Email field is empty");
        }
    return(
        <div className='footer'>
            <h2>Contact me: </h2>
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>Email</label>
                <input type="email" value={email} required onChange={(e)=>{handleEmailChange(e)}}/><br/>
                <label>Write your message here :</label><br/>
                <input type="text" required onChange={(e)=>{handleTextChange(e)}}/><br/>
                <input type="submit" value="submit" onClick={handleSubmit(e)}/>
            </form>
        </div>
    )
}}

export default ContactMe