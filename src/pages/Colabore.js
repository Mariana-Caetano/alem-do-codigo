import React from 'react'
import '../styles/colabore.css'

function Colabore() {
  return (
    <div className='colabore'>

            <h1>Colabore com o projeto</h1>
            <p>Você pode colaborar com o <code>Além do código</code> de três maneiras:</p>
            <ul>
              <li>Adicionando uma nova carreira.</li>
              <li>Criando uma issue no GitHub reportando bugs e sugerindo mudanças ou ideias.</li>
              <li>Entrando em contato para sugestões.</li>
            </ul>
            <p>Confira abaixo como colaborar com as três opções.</p>
            <h2>Adicionando uma nova carreira</h2>
            <ol>
                <li>Faça o fork do projeto no <a href='https://github.com/Mariana-Caetano/alem-do-codigo'>repo. do Github</a>.</li>
                <li>Abra o seu terminal e clone o projeto usando o seguinte comando: 
                  <div className='codeSnippet'>
                  <code>git clone https://github.com/Mariana-Caetano/alem-do-codigo.git</code>
                  </div>
                  </li>
                <li>Crie uma nova branch para as suas contribuições, usando o comando abaixo: 
                <div className='codeSnippet'>
                  <code>git checkout -b add-links-seu-nome</code>
                </div>
                  
                </li>
                <div className='callout'>
                  <p>ℹ Lembre-se de trocar <code>add-links-seu-nome</code> pelo nome que desejar.</p>
                </div>
                  
                <li>Escolha uma imagem do site <a href='https://undraw.co/illustrations'>unDraw</a> e adicione na pasta   <code>/src/assets</code>.</li>
                <li>Abra a pasta <code>/src/pages</code> e abra o arquivo <code>CarrersList.js</code>.</li>
                <li>No arquivo <code>CarrersList.js</code>, import a image que adicionou na pasta <code>assets</code>. Por exemplo: <code>import NomeDaCarreira from '../assets/nome-da-imagem.svg'.</code></li>
                <li>Dentro da <code>CarrersList</code> adicione a nova carreira seguindo <a href='https://github.com/Mariana-Caetano/alem-do-codigo/blob/master/src/carrers/CarrersList.js#L17-L23'>este formato</a>.</li>
                <div className='callout'>
                  <p>⚠ Coloque a carreira em ordem alfabética.</p>
                </div>
                
                <li>Salve as alterações e crie uma mensagem de commit contando o que você fez: <code>git commit -m "carreira adicionada: Nome da carreira"</code></li>
                <li>Envie as suas alterações usando o seguinte comando: 
                <div className='codeSnippet'>
                  <code>git push origin carreira-seu-nome</code>
                </div>
                  
                </li>
                <li>Aguarde para revisão e confirmação das alterações que seram feitas no seu Pull Request.</li>
            </ol>

            <h2>Criando uma issue no GitHub</h2>
            
            <div className='calloutIssue'>
              <p> ℹ Para saber mais sobre issues, acesse a <a href='https://docs.github.com/pt/issues/tracking-your-work-with-issues/creating-an-issue'>documentação oficial do GitHub</a>.</p>
            </div>
          
            <ol>
              <li>Acesse o <a href='https://github.com/Mariana-Caetano/alem-do-codigo'>repo. do Github</a> e clique em <code>Issues</code>.</li>
              <li>Escolha uma das opções para abrir uma issue:</li>
              <table>
                <tr>
                  <th>Tipo de issue</th>
                  <th>Descrição</th>
                </tr>
                <tr>
                  <td>Bug report</td>
                  <td>Report um erro que está no projeto.</td>
                </tr>
                <tr>
                  <td>Feature request</td>
                  <td>Sugira uma ideia para o projeto.</td>
                </tr>
              </table>
              <li>Após escolher, escreva o porque está criando uma issue e uma possível solução (se possível)</li>
              <li>Aguarde a revisão da issue para chegarmos na melhor solução.</li>
            </ol>

            <h2>Entrando em contato</h2>
            <p>Se você quer colaborar com o <code>Além do código</code>, mas prefere não usar o código, clique no botão abaixo e mande um email com sua ideia de colaboração:</p>
            <div className='buttonColab'>
              <button><a href='mailto:nanah.caetano@gmail.com?subject=[Além do Código]%20Quero%20colaborar'><p>ENTRE EM CONTATO</p></a></button>
            </div>
            
        
    </div>
  )
}

export default Colabore