import './App.css';
import img from './images/fast_fashion6.jpg';
import img2 from './images/fast-fashion-dark.jpg'
import img3 from './images/19113940395211.webp'
import img4 from './images/descarte roupas iinspiradas.jpeg'
import img5 from './images/zara.webp'
import img6 from './images/fast_fashion4.jpg'
import img7 from './images/infinidade.png'

function App() {
  return (
    <div>
        <div className="App">
        <div className='backgroundIntroduct'>
          <div className='containerTitulo'>
            <h1 className='titulo'>Outra imagem do cotidiano</h1>
          </div>
          <div>
            <img className="imgPrincipal" src={img} alt='fast_fashion'/>
          </div>
          <div className='containerSubTitulo'>
            <h2 className='subTitulo'>Fast fashion: a moda rápida e descartável</h2>
          </div>
        </div>

        <div className='conteudo'>
          <h3>Os bastidores nada bonitos da indústria fashion</h3>
          <div className='parte1'>
            <div className='textos'>
              <p>Ao longo da história, a moda foi considerada uma manifestação cultural e um retrato das sociedades ao expressar seus hábitos, costumes e valores. Entretanto, essa visão veio sendo modificada com a inserção da ideia do "Fast Fashion", ou moda rápida em português, onde a fabricação de roupas em larga escala seguindo tendências, focada na padronização das mesmas e no consumo em massa, com consequente diminuição de qualidade e durabilidade são aspectos característicos desse ciclo produtivo.</p>
              <p>Em consequência disto a indústria da moda vem cresce em uma velocidade exponencial gerando US$ 525 bilhões de faturamento anual em todos seus segmentos.</p>
              <p>Para entender esse crescimento, é importante saber o que é fast fashion. Basicamente, trata-se de um modelo em que os produtos são fabricados, consumidos e descartados constantemente e com muita rapidez.</p>
              <p>Apesar dos benefícios que pode trazer ao mercado, como maior rentabilidade, geração de empregos e produtos a custo acessível, é necessário olhar para o sistema com responsabilidade, ciente dos impactos que pode causar no meio ambiente e nos hábitos de consumo.</p>
            </div>
            <img src={img2} className='imgParte1'/>
          </div>
          <h3>O que significa fast fashion?</h3>
          <div className='parte2'>
            <div className='textos'>
              <p>O conceito de fast fashion (ou “moda rápida”, em português) surgiria apenas na década de 1990, com o barateamento tanto da mão de obra quanto da matéria-prima na indústria têxtil. Lojas como Zara, H&M e Topshop investiram em peças que lembravam a alta costura, porém tinham custo baixo para o consumidor e um tempo de vida reduzido.</p>
              <p>Rapidamente, a fórmula se tornou um fenômeno entre o público e se expandiu por todo o mundo na década seguinte. O modelo fast fashion no Brasil pode ser observado em grandes fabricantes, como Renner, Riachuelo e Pernambucanas, além da presença de várias marcas estrangeiras no mercado nacional.</p>
            </div>
              <img src={img3} className='imgParte1'/>
          </div>
          <h3>O impacto do fast fashion</h3>
          <div className='parte3'>
            <div className='textos'>
              <p>Como se pode imaginar, esse tipo de produção de roupas possui muitos impactos negativos, sejam estes sociais ou ambientais. A indústria da moda tornou-se uma das mais poluentes do mundo, por se utilizar de tinturas de baixa qualidade, insolúveis ou produtos à base de metais pesados. Além disso, por serem de baixa qualidade, as roupas são descartadas muito rapidamente, o que gera uma quantidade de lixo absurda. São produzidas, apenas no Brasil, cerca de 170 mil toneladas de resíduos de tecidos todos os anos. </p>
            </div>
            <img src={img4} className='imgParte1'/>
          </div>

          <div className='parte4'>
            <div className='textos'>
              <p> Indubitavelmente, outro problema gravíssimo que as marcas de fast fashion trazem é o trabalho escravo. Em 2011, por exemplo, três oficinas de costura fornecedoras da Zara em São Paulo foram flagradas com 67 bolivianos e peruanos em condições análogas à de escravos. De acordo com matéria de moda da revista Marie Claire, estima-se que existem 100 mil bolivianos trabalhando em condições análogas à escravidão em 8 mil pequenas confecções na capital paulistana. Dessa forma, a grande maioria da mão de obra dessas indústrias de fast fashion são imigrantes. Isso ocorre pois, como explica Renato Bignami, auditor-fiscal do Ministério do Trabalho, os imigrantes já chegam ao Brasil devendo a seus patrões, pois eles cobrem os custos da viagem. Consequentemente, essa dívida gera uma relação de servidão, o que torna esses imigrantes presos a seus contratadores.</p>
            </div>
            <img src={img5} className='imgParte1'/>
          </div>
          <h3>A consequência da fast fashion na mentalidade do consumidor</h3>
          <div className='parte5'>
            <div className='textos'>
              <p>Por fim, é preciso falar sobre como o fast fashion afeta a mentalidade do consumidor. As roupas, que antigamente eram tratadas como bens duráveis, hoje são vistas como algo descartável, utilizadas por um período curto de tempo.</p>
              <p>Em consequência disto surgem muitos problemas como mencionados anteriormente. Agora vamos olhar como fast fashion afeta países menos desenvolvidos e o cotidiano de muitas pessoas, confira no vídeo abaixo.</p>
            </div>
            <img src={img6} className='imgParte1'/>
          </div>
          
          <div className='documentario'>
          <h3 className='h3Video'>O país que virou 'lixão' de roupas usadas dos países ricos</h3>
          <iframe  src="https://www.youtube.com/embed/enektksvTqI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div className='boxInfo'>
          <h2>Dados do grupo</h2>
          <p><span>Titulo:</span> Outra Imagem do Cotidiano.</p>
          <hr className='hr'/>
          <p><span>Subtítulo:</span> Fast fashion: a moda rápida e descartável</p>
          <hr className='hr'/>
          <p><span>Descrição:</span> O conceito de fast fashion (ou “moda rápida”, em português) surgiria apenas na década de 1990, com o barateamento tanto da mão de obra quanto da matéria-prima na indústria têxtil. Lojas como Zara, H&M e Topshop investiram em peças que lembravam a alta costura, porém tinham custo baixo para o consumidor e um tempo de vida reduzido.</p>
          <hr className='hr'/>
          <p><span>Materiais Utilizados:</span> Para desenvolvermos esse site foi utilizado Reactjs, que é uma biblioteca de JavaScript, utilizada para desenvolver web sites.</p>
          <hr className='hr'/>
          <p><span>Desenvolvido por:</span> Grupo 5</p>
          <p>Kaio Vinicius de Paiva Rodrigues, Isabelle Pinto Vargas, Mylena Eduarda Vogt Stuelp, Murilo Tatsch Pereira</p>
          <hr className='hr'/>
          <p><span>Referências:</span></p>
          <p>BRITO, Sabrina; Fast fashion: a moda rápida e descartável, agora em versão on-line; Veja. Disponível em: <a href="https://veja.abril.com.br/economia/fast-fashion-a-moda-rapida-e-descartavel-agora-em-versao-on-line/">https://veja.abril.com.br</a> Acesso em 26 de junho de 2022</p>
            <p>CARVALHO, Samanta; A indústria do fast-fashion e por que isso também é problema seu. Disponível em: <a href="https://sammy-carvalho.medium.com/a-ind%C3%BAstria-do-fast-fashion-e-por-que-isso-tamb%C3%A9m-%C3%A9-problema-seu-6e686fcdaa80#:~:text=Lojas%20como%20C%26A%2C%20Renner%2C%20Marisa,que%20se%20consome%20fast%2Dfashion">"https://sammy-carvalho.medium.com</a> Acesso em 26 de junho de 2022</p>
            <p>GOMES, MARCEL; A moda de explorar o trabalhador; Reporter Brasil. Disponível em: <a href="https://reporterbrasil.org.br/2016/08/a-moda-de-explorar-o-trabalhador/">https://reporterbrasil.org.br</a> Acesso em 26 de junho de 2022</p>
            <p>MESTRE, NATÁLIA; Os gigantes da moda rápida; ISTOÉ. Disponível em: <a href="https://istoe.com.br/332682_OS+GIGANTES+DA+MODA+RAPIDA/">https://istoe.com.br</a> Acesso em 26 de junho de 2022</p>
            <p>TANJI, THIAGO; Escravos da moda: os bastidores nada bonitos da indústria fashion; Revista Galileu. Disponível em: <a href="https://revistagalileu.globo.com/Revista/noticia/2016/06/escravos-da-moda-os-bastidores-nada-bonitos-da-industria-fashion.html">https://revistagalileu.globo.com</a> Acesso em 26 de junho de 2022</p>
            <p>DW Brasil; "Fast fashion": moda barata, rápida e sustentável; Disponível em: <a href="https://www.youtube.com/watch?v=U-FZnFcKEHA&ab_channel=DWBrasil/">https://www.youtube.com</a> Acesso em 26 de junho de 2022</p>
            <p>BBC News Brasil; O país que virou 'lixão' de roupas usadas dos países ricos; Disponível em:<a href="https://www.youtube.com/watch?v=enektksvTqI&ab_channel=BBCNewsBrasil/">https://www.youtube.com</a> Acesso em 26 de junho de 2022</p>        
            <hr className='hr'/>
        </div>
        </div>
    </div>
  );
}

export default App;
