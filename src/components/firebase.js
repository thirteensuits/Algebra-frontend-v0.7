import React from 'react'
import { useState, useEffect } from 'react'

function FirebaseDemo() {
    const [submitting, setSubmitting] = useState(false);
    const [details, setDetails] = useState({
        Twitter: '',
        Email: '',
        Message: '',
    })

    const PostData =async(e)=>{
        e.preventDefault()
        
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
          },1500);

        const{Twitter,Email,Message}=details;

        const res=await fetch("https://algebra-ebfb9-default-rtdb.asia-southeast1.firebasedatabase.app/fat.json",
        {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            Twitter,
            Email,
            Message,
           })
        })
    }



  return (
        <form autoComplete="off" className='borders' onSubmit={PostData}>
            <label>Twitter</label>
            <input type='text' className='form-control' required placeholder='Enter your Twitter'
            onChange={(e)=>
            setDetails({...details,Twitter:e.target.value})} />
            <br></br>
            <label>Email</label>
            <input type='text' className='form-control' required placeholder='Enter your Email'
            onChange={(e)=>
            setDetails({...details,Email:e.target.value})}  />
            <br></br>
            <label>Comments</label>
            <textarea rows="3" className='form-control' placeholder='Anything thoughts you want to share?'
            onChange={(e)=>
            setDetails({...details,Message:e.target.value})} />
            <br></br>
            <div style={{textAlign: "center"}}>
            <button className="loginBtn" type='submit reset' style={{paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>Submit</button>
            <br></br>
            <br></br>
            {submitting ? (<h5 class="thanks">thank you, we will be in touch!</h5>) : ("")}
            </div>
        </form>
  )
}


export default FirebaseDemo