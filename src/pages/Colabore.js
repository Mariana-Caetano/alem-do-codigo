import React from 'react'

function Colabore() {
  return (
    <div className='colabore'>
        <div>

            <h1>Quer adicionar uma carreira?</h1>
            <h2>Siga o passo-a-passo abaixo para adicionar</h2>
            <ol>
                <li>Fork o projeto no repo. do Github.</li>
                <li>Abra o seu terminal e clone o projeto usando o seguinte comando: <code>git clone https://github.com/Mariana-Caetano/alem-do-codigo.git</code></li>
                <li>Crie uma nova branch para as suas contribuições: <code>git checkout -b add-links-seu-nome</code>.</li>
                <li>Escolha uma imagem do site <a href='https://undraw.co/illustrations'>unDraw e adicione na pasta </a>  <code>/src/assets</code>.</li>
                <li>Abra a pasta <code>/src/pages</code> e abra o arquivo <code>CarrersList.js</code>.</li>
                <li>No arquivo <code>CarrersList.js</code>, import a image que adicionou na pasta <code>assets</code>. Por exemplo: <code>import NomeDaCarreira from '../assets/nome-da-imagem.svg';</code></li>
                <li>Dentro da <code>CarrersList</code> adicione a nova carreira seguindo o formato abaixo:
                  
                </li>
                <li>Coloque a carreira em ordem alfabética</li>
                <li>Salve as alterações e crie uma mensagem de commit contando o que você fez: git commit -m "carreira adicionada: Nome da carreira"</li>
                <li>Envie as suas alterações: git push origin carreira-seu-nome</li>
                <li>Aguarde para revisão e confirmação das alterações que seram feitas no seu Pull Request</li>
            </ol>
        </div>
        
    </div>
  )
}

export default Colabore