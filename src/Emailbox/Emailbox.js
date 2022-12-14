import React, { useState } from 'react'
import './Emailbox.css'
import {Link  } from 'react-router-dom'
import {GiRotaryPhone}from 'react-icons/gi'
import {FiPhone}from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 export default function Emailbox() {
  const [show, setShow] = useState(false);
  const [show2, setshow2] = useState(false);
  const handleClose = () => setShow(false);

  const [namevalue,setnamevalue]=useState('')
  const [emailvalue,setemailvalue]=useState('')
  const [numbervalue,setnumbervalue]=useState('')
  const [emailcorrect,setemailcorrect]=useState(false)
  const [namecorrect,setnamecorrect]=useState(false)
  const [textcorrect,settextcorrect]=useState(false)
const namechange= (e) => {
setnamevalue(e.target.value)
const regexname=  regEx2.test(e.target.value)
if (regexname) {
  setnamecorrect(true)
}else(
  setnamecorrect(false)
)
}
const emailchange= (e) => {
  setemailvalue(e.target.value)
  const regexemail=  regEx3.test(e.target.value)
  if (regexemail) {
      setemailcorrect(true)
  }else(
      setemailcorrect(false)
  )
  }

const textchange= (e) => {
  setnumbervalue(e.target.value)
const regexnumber=  regExp.test(e.target.value)
if (regexnumber) {
  settextcorrect(true)
}else(
  settextcorrect(false)
)
      }

const formsubmit=(e)=>{
    if (emailcorrect && textcorrect && namecorrect ) {
      setshow2(true)
    } else {
         e.preventDefault()
         setShow(true)
    }
    
      }


     const regExp = RegExp(
          /\w?\W?/
      )
     const regEx2=RegExp(
      /\w?\W?/
     )
     const regEx3=RegExp(
      /\w{2,9}\-?\S?@gmail\.\w{2,4}/
     )            



  return (
    <div className='body-email' >
    <form class="email-box animate__animated animate__flash" onSubmit={formsubmit}>
    <div className="login-title  mb-3">
<h4 className='mx-2 title-email'>ایمیل</h4>

</div>
<input   class="input-box" id="nameinput" onChange={namechange} placeholder='نام شما' value={namevalue} type="text"/><br />
<input  class="input-box" id="textinput"  onChange={textchange} placeholder='متن' value={numbervalue} type="text"/><br />
<input   class="input-box" id="emailinput"onChange={emailchange} placeholder='ایمیل' value={emailvalue} type="text"/><br />
<div className="btn-email">
 

 <div class="form-check " >
<input class="form-check-input my-1" type="checkbox" value="" id="reverseCheck1"/>
<label class="form-check-label" for="reverseCheck1">
اطلاع از جدید ترین محصولات
</label>
</div><button className="btn btn-outline-dark my-3">ارسال</button>
</div>
</form>

<Modal show={show2} onHide={handleClose}>
   <Modal.Header >
     <Modal.Title>ایول :)</Modal.Title>
   </Modal.Header>
   <Modal.Body>ایمیل شما با موفقیت ارسال شد.</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
  
   </Modal.Footer>
 </Modal>

<Modal show={show} onHide={handleClose}>
   <Modal.Header >
     <Modal.Title>خطا :(</Modal.Title>
   </Modal.Header>
   <Modal.Body>لطفا اطلاعات را کامل و به درستی وارد کنید.</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
  
   </Modal.Footer>
 </Modal>
</div>
  )
}
