import logo from './logo.svg';
import './App.css';
import react from './react2.png';
import biblioteca from'./abra-o-livro.png';
import vantagem2 from './cubo-3d.png';
import vantagem3 from './aprendizado-de-maquina.png';

function App() {
  return (
    <div className="App">
        <header>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </header>
        <main>
          <div className="title">
            <h3>React.Js</h3>
          </div>
          <div className="react-img">
            <img src={react} />
            <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
          </div>                    
        </main>
        <section>
          <h2>Vantagens do React.Js</h2>
          <div className="vantage-one" >
            <img className="icon-biblio" src={biblioteca} />
            <p>Uma biblioteca gratuita e de código aberto.</p>
          </div>
          <div className="vantage-two" >
            <img className="icon-biblio" src={vantagem2} />
            <p>A capacidade de criar, reutilizar e combinar componentes no seu código.</p>
          </div>
          <div className="vantage-tree" >
            <img className="icon-biblio" src={vantagem3} />
            <p>Uma curva de aprendizado direta, simplificando a adoção.</p>
          </div>
        </section>
        <footer>
          @Copyrigth 2022 - Todos os Direitos autorais reservados 
        </footer>

    </div>
  );
}

export default App;
