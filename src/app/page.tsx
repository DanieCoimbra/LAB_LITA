import Image from "next/image";
import "./page.css";
export default function Home() {
  return (
    <div className="fundo">
      <h1 className="nome">L.I.T.A.</h1>
      <div className="home">      
        <h2>Laboratório Integrado de Tecnologia Avançada</h2>
        <p>O caminho </p>
        <p>PARA INOVAÇÃO</p>
        <Image 
          src="/Vector.png" 
          alt="Wave Line" 
          width={500} 
          height={100} 
          priority 
          className="wave-line"
        />
      </div>         
    </div>
  );
}
