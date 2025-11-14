import Evento from "../componentes/Evento";
import "../paginas/home.css";

function Home() {
  return (
    <div className="inicio">
      <h1> Página Inicial</h1>
      <p>Bem-vindo ao Gerenciador de Eventos SENAI!</p>


      <Evento nome="Mundo SENAI" 
      data="15/11/2025" local="Auditório 1" />
      
      <Evento nome="Semana da Indústria" data="22/11/2025"local="Laboratório 2"
      />
    </div>
  );
}


export default Home;
