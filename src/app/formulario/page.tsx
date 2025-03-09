import "./formulario.css";
export default function Formulario() {
  return (
    <section id="projects" className="fundof">
      <div className="block">
      
        <div className="fcontainer">
          <div className="text">
            <h2>NOSSO OBJETIVO É TORNAR-NOS UM VERDADEIRO  HUB</h2>
            <h2>DE INOVAÇÃO E TECNOLOGIA, ONDE CRIATIVIDADE E</h2>
            <h2>PRÁTICA SE UNEM PARA DAR VIDA A IDEIAS QUE PODEM SE</h2>
            <h2>TRANSFORMAR EM STARTUPS DE SUCESSO.</h2>                
        </div>               
        </div>
        <div className="fcontainer1">
        <div className="fcard1">
          <div className="card1">
            <h1>Tenho interesse em:</h1> 
            <p>Liderar uma equipe e </p>
            <p>criar meu projeto.</p>

            <a href="https://forms.office.com/r/AUJy811Rqe" target="_blank">
            <button className="projbutton">Candidatar</button>
            </a>
          </div>
          </div>
        <div className="fcard2">
          <div className="card2">
            <h1>Tenho interesse em:</h1>  
            <p>Participar de uma</p>
            <p>equipe e ajudar a </p>
            <p>desenvolver projetos.</p>

            <a href='https://forms.office.com/r/yKzyhz8v4d' target="_blank">
            <button className="vonbutton">Candidatar</button>
            </a>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
  }
  