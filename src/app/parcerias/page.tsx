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
            <div className="bn">
              <Image className="icon" width={27} height={27} alt="" src="teste.svg" />
              <h1>Ambiente de testes controlados</h1>
            </div>
            <div className="bn">
              <Image className="icon" width={27} height={27} alt="" src="user centered.svg" />
              <h1>Acesso a talentos inovadores</h1>
            </div>
            <div className="bn">
              <Image className="icon" width={27} height={27} alt="" src="radial.svg" />
              <h1>Fortalecimento da marca</h1>
            </div>
            <div className="bn">
              <Image className="icon" width={27} height={27} alt="" src="brain AI.svg" />
              <h1>Inovação contínua</h1>
            </div>
          </div>

          <div className="pcard1">
            <div className="textcard">
              <h1>Tenho interesse em me tornar </h1>
              <h1>parceiro do LITA.</h1>
            </div>

            <div className="parccard">
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
