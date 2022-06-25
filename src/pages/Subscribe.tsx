import { Logo } from "../components/logo";
import { useState,FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscribeMutation } from "../graphql/generated";
import imgVsCode from '../images/vscode.png'

export function Subscribe(){
    const navigate = useNavigate()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const [CreateSubscribe,{loading}] = useCreateSubscribeMutation()

    async function handleSubscribe(ev:FormEvent){
        ev.preventDefault();
        await CreateSubscribe({
            variables:{
                name,
                email
            }
        })
        navigate('/event')
    }
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-bue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana vocÊ vai aprender na prática uma das tecnologias mais utilizadas do mundo.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            placeholder="Seu nome completo"
                             className="bg-gray-900 rounded px-5 h-14"
                             onChange={event=> setName(event.target.value)}
                        />
                        <input 
                            type="email"
                             placeholder="digite seu e-mail"
                             className="bg-gray-900 rounded px-5 h-14"
                             onChange={event=> setEmail(event.target.value)}
                         />
                         <button disabled={loading} type="submit" 
                            className="bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                            Garantir minha vaga
                         </button>
                    </form>
                </div>
                <div className="">

                </div>
            </div>
            <img src={imgVsCode} alt=""  className="mt-10"/>
        </div>
    )
}