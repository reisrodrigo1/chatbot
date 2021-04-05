import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';

// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};

class SimpleForm extends Component {
   render() {
    return (
      <ChatBot 
        steps={[
          {
            id:'q-name', 
            message:'Olá, meu nome é Rodrigo, sou Programador Front-End na WORKALOVE EDTECH. Tudo bem? Qual o seu nome?', 
            trigger:'name',
          },
          {
            id:'name', 
            user:true,
            trigger:'q-city'
          },
          {
            id:'q-city', 
            message:'Prazer {previousValue}. Em qual cidade você mora?', 
            trigger:'city',
          },
          {
            id:'city', 
            user:true,
            trigger:'q-birth'
          },
          {
            id:'q-birth', 
            message:'Nascimento?', 
            trigger:'birth',
          },
          {
            id:'birth',
            user:true,
            validator: (value) => {
                if (/^[a-zA-Z0-9]+\/.[a-zA-Z0-9]\/.+$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return "Insira formado. Utilize '/' 00/00/000";
                  }
                },
            trigger:'q-email'
          },
          {
            id:'q-email', 
            message:'Qual o seu email?', 
            trigger:'email',
          },
          {
            id:'email', 
            user:true,
            validator: (value) => {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return "Informe um email válido.";
                  }
                },
            trigger:'q-rating'
          },

          {
            id:'q-rating', 
            message:'Avalie', 
            trigger:'rating',
          },
          {
            id:'rating', 
            options: [
                { value: 1, label: "1", trigger: "q-submit" },
                { value: 2, label: "2", trigger: "q-submit" },
                { value: 3, label: "3", trigger: "q-submit" },
                { value: 4, label: "4", trigger: "q-submit" },
                { value: 5, label: "5", trigger: "q-submit" }
              ]
          },


          {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
          },      
          
          {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
          },
          {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
               },
                    {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
        {...config}
      />
        
        );
      }

    }

    export default SimpleForm;