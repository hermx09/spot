import emailjs from "@emailjs/browser";
import { init } from 'emailjs-com';
import React from 'react'; 
import { useState } from 'react';







const Form = () => {

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [message,setMessage] = useState("");


  const handleSubmit = (e) => {
    
    e.preventDefault();

    
    const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicId = import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_ID;
    
    
    init(publicId);

    const template_param = {
        name: name,
        email: email,
        message: message,
      
    };


    emailjs.send(serviceId,templateId,template_param,publicId)
    .then(() => {
      window.alert("送信が完了しました");

      setName ("");
      setEmail ("");
      setMessage ("");
    });
  };

  const disableSend = 
  name === "" ||
  message === "" ;
  

  
  
  return (
    <>
    <div className='bg-gray-400'>
    <a name = "Contact" className='text-center'><h4 className=' text-white opacity-80 '>Contact</h4></a>
    <form onSubmit={handleSubmit}>
    <div className='flex flex-col place-content-around flex-wrap'>
        <div className='mt-10 w-4/5'>
        <label htmlFor='name'>お名前</label>
        <input value={name} name='name' id = "name" type='text' autoComplete='off' onChange={(e) => setName(e.target.value)} className=' border-solid border-2 border-gray-700 rounded w-full  place-self-stretch' /> 
        </div>
        <div className='mt-10 w-4/5'>
        <label htmlFor='email'>e-mail</label>
        <input value={email} name='email'  id = "email" type='email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} className=' border-solid border-2 border-gray-700 rounded w-full' />
        </div>
        <div className='mt-10 w-4/5 flex flex-col  mb-10'>
        <label htmlFor='message' className='whitespace-nowrap'>お問い合わせ内容</label>
        <textarea value={message} name='message'   id = "message" rows={4} onChange={(e) => setMessage(e.target.value)}  className=' border-solid border-2 border-gray-700 rounded w-full'/>
        </div>
    </div>
    <div className='flex justify-center'>
        <button  disabled={disableSend} type='submit' className='boder-solid border-2 px-2 rounded mb-1 bg-cyan-400 hover:opacity-70'>送信</button>
    </div>   
    </form>
    <div className='flex flex-row justify-end'>
        <a href = "https://www.instagram.com/keio_jinryu/"><img src="insta.png" className='h-8 w-8 ml-3 rounded hover:opacity-50 duration-300' /></a><a href = "https://twitter.com/keio_jinryu"><img src="x.jpeg" className='h-8 w-8 ml-1 rounded hover:opacity-50 duration-300 mr-16' /></a>
    </div>

    
    </div>
    </>
  );

};

export default Form