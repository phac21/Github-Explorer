import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {FiLogIn} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Container from './styles';


const Login: React.FC =  () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
      try {
        formRef.current?.setErrors({});
  
        const schema = Yup.object().shape({
          user: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });
  
        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
        //   const errors = getValidationErrors(err);
            
        //   formRef.current?.setErrors(errors);
        
        }
      }
    }, []);
    

        return (
            <Container>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                    <img src={logoImg} width="350" alt="Casa Thomas Jefferson"/> 
                        <h1>Faça seu logon</h1>
                        <input
                            name="user" 
                            type="text" 
                            placeholder="Usuário"
                            
                        />

                        <input
                            name="password" 
                            type="password" 
                            placeholder="Senha"                     
                        />
                    
                        <button type="submit">   
                            <FiLogIn/>Entrar
                        </button>
                    </Form>   

        </Container>
        )
};
export default Login;