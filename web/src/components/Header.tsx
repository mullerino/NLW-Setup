import logoImg from '../assets/logo.svg'
import { Plus } from 'phosphor-react'

const Header = ()=>{
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={logoImg} alt="logo"></img>
          <button 
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-3 items-center hover:border-violet-300"
          >
            <Plus size={20} className="text-violet-500"/>Novo habito
          </button>
        </div>
    )
}

export default Header