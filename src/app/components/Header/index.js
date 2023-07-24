export default function Header() {
  return (
    <header className="flex items-center justify-center px-4 py-2 bg-slate-100 text-white">
      <img
        src="logovem.svg"
        alt="LogoVEM"
        className="w-16 h-16 rounded-full mr-4"
      />

      <ul className="flex space-x-4">
        <li className="text-orange-400">Inicio</li>
        <li className="text-orange-400">Bem-vindo a Casa</li>
        <li className="text-orange-400">Resumos</li>
        <li className="text-orange-400">Podcast</li>
        <li className="text-orange-400">Contato</li>
        <li className="text-orange-400">Nos conheça</li>
      </ul>
    </header>
  )
  
}
