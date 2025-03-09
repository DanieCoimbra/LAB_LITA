import "./parceria.css";

export default function Parcerias() {
  return (
    <section>
    <div className="parc-container">
      <div className="parc-text">
      <ul>
        <li>ACESSO A TALENTOS INOVADORES</li>
        <li>AMBIENTE DE TESTES CONTROLADO</li>
        <li>FORTALECIMENTO DA MARCA E INOVAÇÃO CONTÍNUA</li>
      </ul>
    </div>
    
      <div className="pcard1">
        <div className="pcard2">
            <h1>Tenho interesse em:</h1> 
            <p>Participar como </p>
            <p>parceiro do LITA.</p>
          <div  className="parccard">
            <a href="https://forms.office.com/r/4JZaURjzgp" target="_blank">
            <button className="parcbutton">Contatar</button>
            </a>
          </div>
            
        </div>
      </div>
  </div>
  </section>
);
  }