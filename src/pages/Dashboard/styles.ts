import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 32px;
    color: #173B66;
    max-width: 450px;
    line-height: 56px;

    margin-top: 40px;
`;

 export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 960px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #a8a8b3;
        border: 2px solid #FFF;
        border-right: 0;

        ${(props) => props.hasError && `
        border-color: #c53030;
        `}
        &::placeholder {
            color: #a8a8b3;
        }
    }

    button{
        width: 210px;
        height: 70px;
        background: #143b67;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#143b67')};
        }
    }
`;

export const Error =styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;
`;
export const Info = styled.section`
    display:block;
    margin-top: 40px;
    

    a{  
        max-width: 960px;
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        cursor: default;

        & + a {
            margin-top: 40px;
            
        }

        p {
            font-size: 18px;
            color: #6c6c80;
            margin-top: 4px;
        }
        }
        ul{
            display:flex;
            list-style: none;

            & + ul{
                margin-top: 20px;
            }
            
    
            li{
    
                & + li {
                    margin-left: 80px;
                }
    
                strong{
                    display: block;
                    font-size: 22px;
                    color: #3d3d4d;
                }
            }
            button{

                width: 360px;
                height: 70px;
                background: #143b67;
                border-radius: 5px;
                border: 0;
                color: #FFF;
                font-weight: bold;
                font-size: 28px;
                transition: background-color 0.2s;
            
            
            
                &:hover{
                    background: ${shade(0.2, '#143b67')};
                }
    }


`;
 export const InfoTurma = styled.div`
    max-width: 1280px;
    

        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        
        & + div {
            margin-left: 40px;
        }

        p {
            font-size: 18px;
            color: #6c6c80;
            margin-top: 4px;
        }
        }
        ul{
            display:flex;
            list-style: none;

            & + ul{
                margin-top: 20px;
            }
            
    
            li{
    
                & + li {
                    margin-left: 80px;
                }
    
                strong{
                    display: block;
                    font-size: 22px;
                    color: #3d3d4d;
                }
            }
            button{

                width: 360px;
                height: 70px;
                background: #143b67;
                border-radius: 5px;
                border: 0;
                color: #FFF;
                font-weight: bold;
                font-size: 28px;
                transition: background-color 0.2s;
            
            
            
                &:hover{
                    background: ${shade(0.2, '#143b67')};
                }
        }

    
    
 `;

 
 export const InfoAluno = styled.div`
    margin-left: 40px;
    max-width: 410px;
    display: flex;

    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    align-items: center;

        div {
      
            strong{
                font-size: 22px;
                color: #3D3D4D;
            }

        ul{
            display:flex;
            list-style: none;

            & + ul{
                margin-top: 20px;
            }
            
    
            li{
        
                span {
                    display: block;
                    margin-top: 4px;
                    color: #6c6c80;
                    font-size: 18px;
                }
                button{

                    width: 360px;
                    height: 70px;
                    background: #143b67;
                    border-radius: 5px;
                    border: 0;
                    color: #FFF;
                    font-weight: bold;
                    font-size: 28px;
                    transition: background-color 0.2s;
                
                
                
                    &:hover{
                        background: ${shade(0.2, '#143b67')};
                    }
                    }
            }
        }

    
    }
 `;
