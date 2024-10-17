import React from 'react'
import log from '../assets/styles/LogIn.module.css'
import { useForm } from 'react-hook-form';

export const LogIn = () => {
    const {register, handleSubmit, formState:{errors},watch, setValue, reset}  =useForm();
    console.log(errors);
    
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        alert("Sending data");
        reset();
        
    })
  return (
     <div className={log.containerForm}>
        <form className={log.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id='email' placeholder='your@email.com' {...register('email',{required:{
                value:true,
                message: 'Por favor introduce un correo'
            },pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:'Por favor introduce un correo válido'
            }})}/>
           {errors.email && <span className={log.spanAlert}>{errors.email.message}</span> }
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' placeholder='*********' {...register('password',{required:{value:true, message:'Debes introducir una contraseña'}, minLength:{
                value:9,
                message:'La contraseña debe tener álmenos 9 carácteres'
            }})} />
            {errors.password && <span className={log.spanAlert}>{errors.password.message}</span> }
            
            <button className={log.buttom}>Iniciar Sesión</button>
        </form>
    </div>
  )
}
