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

    return(
        <div className='footer'>
            <h2>Contact me: </h2>
            <form>
                <label>Email</label>
                <input type="email" value={email} required onChange={(e)=>{handleEmailChange(e)}}/><br/>
                <label>Write your message here :</label><br/>
                <input className='message' type="text" required onChange={(e)=>{handleTextChange(e)}}/><br/>
                <input className='send' type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default ContactMe