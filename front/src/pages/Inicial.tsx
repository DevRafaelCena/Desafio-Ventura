import React from 'react';

import '../styles/pages/inicial.css';


import { Link } from 'react-router-dom';

const Inicial: React.FC = () => {
  return (
    <div id="page-inicial">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div id="page-main"  > 
        <div id="page-corpo" >
          <h1 id="textoh1" >ACADEMIIO</h1> 
          
          <p id="textop1" >Faça login para continuar</p>

          <form>
            <p>Email:</p>
          <label id="email-label">
                <input type="text" id="email" placeholder="Insere seu email" />
                
              </label>          
              <p>Senha:</p>
          <label id="senha-label">
                <input type="text" id="senha" placeholder="Informe sua senha" />
                
              </label>  
              <br/>              
              <input type="checkbox" id="conectado"/>
              <label > Manter conectado </label>
              <input type="submit" value="ENTRAR" id="entrar" />
          </form>
          <br/>
          <br/>


          <p>Ainda não tem conta? <a href="http://">Cadastre-se</a></p>



            
        </div>
        
     
      </div>
    </div>
  );
}

export default Inicial;