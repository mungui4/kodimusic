import React from 'react'
import { useForm } from 'react-hook-form';
import sign from'../assets/styles/SignUp.module.css'


export const SignUp = () => {
    const {register, handleSubmit, formState:{errors},watch, setValue, reset}  =useForm();
    console.log(errors);
    
    const onSubmit = handleSubmit((data)=>{
        console.log(data);
        alert("Sending data");
        reset();
        
    })
  return (
    <>
   <div className={sign.containerForm}>
        <form className={sign.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id='email' placeholder='your@email.com' {...register('email',{required:{
                value:true,
                message: 'Por favor introduce un correo'
            },pattern:{
                value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:'Por favor ingrese un correo válido'
            }})}/>
           {errors.email && <span className={sign.spanAlert}>{errors.email.message}</span> }
            <label htmlFor="password">Contraseña</label>
            <input type="password" id='password' placeholder='*********' {...register('password',{required:{value:true, message:'Debes introducir una contraseña'}, minLength:{
                value:9,
                message:'La contraseña debe tener álmenos 9 carácteres'
            }})} />
            {errors.password && <span className={sign.spanAlert}>{errors.password.message}</span> }
            <label htmlFor="confirmPassword">Confirma la contraseña</label>
            <input type="password" id='confirmPassword' placeholder='*********' {...register('confirmPassword',{
                required:{
                    value:true, message:  'La confirmación de la contraseña es necesaria'
                },validate: value => value === watch('password') || "Las contraseñas no coinciden"
            })}/>
            {errors.confirmPassword && <span className={sign.spanAlert}>{errors.confirmPassword.message}</span>}
            <label htmlFor="birthdate">Fecha de Nacimiento</label>
            <input type="date" id='birthdate' className={sign.birthdate} {...register('birthdate',{required:{
                value:true,
                message: 'Debe introducir la fecha de nacimiento'
            },validate:(value)=>{
                const birthdate = new Date(value);
                const actualDay = new Date;
                const age= actualDay.getFullYear() - birthdate.getFullYear()
                return age >= 18 || "Debes tener álmenos 18 años de edad"
            
            }})}/>
            {errors.birthdate &&<span className={sign.spanAlert}>{errors.birthdate.message}</span>}
            <label htmlFor="country">País</label>
            <select className={sign.options} name="" id="selectOptions" {...register('country',{required:{
                value:true, message: 'Debes seleccionar tu país'
            }})} defaultValue="" >
                <option  value="" disabled>Seleciona tu país</option>
                <option value="Es">El Salvador</option>
                <option value="Gt">El Guatemala</option>
                <option value="Hn">Honduras</option>
            </select>
            {errors.country && <span className={sign.spanAlert}>{errors.country.message}</span>
            }
            {watch('country')=== "Es" && (
                <>
                <select className={sign.options} name="" id="selectCity" {...register('city',{required:{value: true, message: 'Debes seleccionar un distrito'}
                    
                })} defaultValue="" >
                <option  value="" disabled>Selecciona tu distrito</option>
                <option value="Ahuachapán">Ahuachapán</option>
<option value="Sonsonate">Sonsonate</option>
<option value="Santa Ana">Santa Ana</option>
<option value="Cabañas">Cabañas</option>
<option value="Chalatenango">Chalatenango</option>
<option value="Cuscatlán">Cuscatlán</option>
<option value="La Libertad">La Libertad</option>
<option value="La Paz">La Paz</option>
<option value="San Salvador">San Salvador</option>
<option value="San Vicente">San Vicente</option>
<option value="Morazán">Morazán</option>
<option value="San Miguel">San Miguel</option>
<option value="Usulután">Usulután</option>
<option value="La Unión">La Unión</option>


            </select>
            {errors.city && <span className={sign.spanAlert}>{errors.city.message}</span>}
                </>
            )}

           
            <label htmlFor="terms">Terminos y condiciones</label>
            <input type="checkbox" name="" id="terms" {...register('terms',{required:true,})}/>
            {errors.terms && <span className={sign.spanAlert}>Por favor lee y acepte los terminos y condiciones</span> }
            <button className={sign.buttom}>Registrarse</button>
        </form>
    </div>
    </>
   
  )
}
