import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.div`

        form{
            img{
                margin-top: 60px;
            }
            margin: auto;
            width: 350px;
            text-align: center;
    
            h1{
                margin: 24px 0;
                font-size: 32px;
                color: #173B66;  
                margin-top: 40px;
            }
            input{
                
                border-radius: 5px;
                border: 2px solid #FFF;
                padding: 16px;
                width: 100%;
    
                & + input{
                    margin-top: 8px;
                }
            }
            button{
                background: #143b67;
                height: 56px;
                color: #fff;
                border-radius: 5px;
                border: 0;
                padding: 0 16px;
                width: 100%;
                margin-top: 8px;
                font-weight: 500;
                transition: background-color 0.2s;
    
                svg{
                    margin-right: 16px;
                    align-items: center;
                }
    
                &:hover{
                    background: ${shade(0.2, '#143b67')};
                }
            }
    
        }

`;

export default Container;
