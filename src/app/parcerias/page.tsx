import "./parceria.css";
import Image from "next/image";
export default function Parcerias() {
  return (
    <section>
    <div className="imgnupra">
    <div className="parc-container">
      <div className="parc-text">
      <h1>Junte-se ao LITA e aproveite um ecossistema</h1>
      <h1>único para transformar sua marca e explorar</h1>
      <h1>novas possibilidades.</h1>
    </div>
    
    <div className="beneficio">
      <div className="bn1">
        <div className="top1">
          <h1>Ambiente de testes controlados</h1>
          <Image className='teste' width={27} height={27} alt="" src="teste.svg" />
        </div>
      </div>  
      <div className="bn2">
        <div className="top2">
          <h1>Acesso a talentos inovadores</h1>
          <Image className='acessoicon' width={27} height={27} alt="" src="user centered.svg" />
        </div>
      <div className="bn3">
        <div className="top3">
        <h1>Fortalecimento da marca</h1>
        <Image className='radial' width={27} height={27} alt="" src="radial.svg" />
        </div>
      </div>
      </div>
      <div className="bn4">
        <div className="top4">
        <h1>Inovação contínua</h1>
        <Image className='brainai' width={27} height={27} alt="" src="brain AI.svg" />
        </div>
      </div>
    </div>
      <div className="pcard1">
        <div className="textcard">
          <h1>Tenho interesse em me tornar </h1>
          <h1>parceiro do LITA.</h1> 
          </div>
            
          <div  className="parccard">
            <a href="https://forms.office.com/r/4JZaURjzgp" target="_blank">
            <button className="parcbutton">Quero ser parceiro agora</button>
            </a>     
        </div>
      </div>
  </div>
  </div>
  </section>
);
  }