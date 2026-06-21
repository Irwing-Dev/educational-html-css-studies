export default [
`<!DOCTYPE html>
<html lang="pt-br"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formatação de textos</title>
</head>
<body>
    <h1>Formatações</h1>
    <h2>Texto itálico</h2>
    <p>Para deixar um texto em italico, usa-se o <em>em</em></p>
    <h2>Texto inserido</h2>
    <p>Para sublinhar um texto é utilizado o <ins>ins</ins></p>
    <h2>Texto sobrescrito</h2>
    <p>x<sup>20</sup>+3<sup>10</sup></p>
    <h2>Texto subscrito</h2>
    <p>h<sub>2</sub>O</p>
    <h1>Outras formatações</h1>
    <h2>Códigos fontes e pré-formatados</h2>
    <p><code>Palavras com o mesmo espaçamento</code></p>
    <p></p><pre>        <code>
Porém, alguns textos ficam "quebrados" dando um efeito visual indesejado, para isso há
outra solução.
        </code>
    </pre>
    <p></p>
    <h2>Citações</h2>
    <p>Para citações como por exemplo: <q>A arte é uma esxplosão</q></p>
    <h2>Citações completas</h2>
    <pre>
        <blockquote cite="aqui só serve para colocar algum link e não se ferrar com direitos autorais">
Algum ensinamento
Minhas aulas voltam amanhã
Só posso chorar
        </blockquote>
    </pre>
    <h2>Abreviações</h2>
    <p>Sei nem onde eu tô mais em <abbr title="Hypertext Markup Language" >Html5</abbr> e <abbr title="Cascading Style Sheets">CSS</abbr></p>
    <h2>Texto invertido</h2>
    <p><bdo dir="rtl">Samerda nem tem utilidade</bdo></p>
</body>
</html>
`,
`<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Listas</title>
    </head>
    <body>
        <h1>Trabalhando com listas</h1>
        <h2>Listas ordenadas - Variáveis</h2>
        <ol type="1" start="4"> <!-- types: 1, A, a, I, i -->
            <li>Acordar</li>
            <li>Desligar o alarme</li>
            <li>Ficar puto com o alarme</li>
        </ol>
        <ol type="A">
            <li>Acordar</li>
            <li>Desligar o alarme</li>
            <li>Ficar puto com o alarme</li>
        </ol>
        <ol type="I">
            <li>Acordar</li>
            <li>Desligar o alarme</li>
            <li>Ficar puto com o alarme</li>
        </ol>
        <h2>Listas não ordenadas - Variáveis</h2>
        <ul type="circle"> <!-- disc(padrão), circle, square -->
            <li>Pão</li>
            <li>Ovos</li>
            <li>Banana</li>
            <li>Aveia</li>
        </ul>
        <ul type="square">
            <li>Pão</li>
            <li>Ovos</li>
            <li>Banana</li>
            <li>Aveia</li>
        </ul>
        <h2>Juntando listas</h2>
        <ol>
            <li>Linguagens</li>
            <ol type="A">
                <li>Antigas</li>
                <li>Novas</li>
            </ol>
            <li>Coódigos</li>
            <ol type="A" start="3">
                <li>Html</li>
                <li>CSS</li>
            </ol>
        </ol>
        <h2>Jogos Favoritos</h2>
        <ol>
            <li>Xbox 360</li>
            <ul type="square">
                <li>Minecraft</li>
                <li>Dragon Ball Raging Blast 2</li>
                <li>Forza Horizon</li>
                <ul type="circle">
                    <li>Forza Horizon 1</li>
                </ul>
            </ul>
            <li>PS3</li>
            <ul type="square">
                <li>Street Fighter IV</li>
                <li>GTA V</li>
            </ul>
        </ol>
        <h2>Listas de definições</h2>
        <dl>
            <dt>Html</dt> <!-- Termo -->
            <dd>Linguagem de marcação usada para colocar a parte de conteúdo em um site</dd> <!-- Descrição -->
            <dd>Utilizada pela maioria dos programadores Front-end</dd>
            <dt>CSS</dt>
            <dd>Linguagem usada para a estilização de um site</dd>
            <dt>Javascript</dt>
            <dd>Linguagem de programação para a criação de interatividade de um site</dd>
        </dl>
    </body>
</html>`,
`<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Links</title>
</head>
<body>
    
    <h1>Usando links internos</h1>
    <p>Para mais fontes, clique <a href="https://developer.mozilla.org/pt-BR/" target="_blank" rel="external">aqui</a></p>
    <p>Essa é a primeira página, caso queira ir para a segunda página. Clique <a href="./pag002.html" rel="next">aqui</a></p>
    <h1>Links para download</h1>
    <ul>
        <li>
            <a href="../ex003/download/10 - Ligações em toda parte.pdf" download="10 - Ligações em toda parte.pdf" type="application/pdf">Baixar repósitório do curso em vídeo</a>
        </li>
    </ul>
</body>
</html>

pag002.html

<!DOCTYPE html>
<html lang="ept-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página 2</title>
</head>
<body>
    
    <p>Essa é a segunda página. Aprete <a href="./links.html" rel="prev">aqui</a> e volte para a primeira página</p>

</body>
</html>
`,
`<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mídia</title>
</head>
<body>
    
    <h1>Exportando vídeos</h1> <!--Consume sua banda e te faz pagar taxas altas-->
    <p>Este vídeo está hospedado no meu própio servidor</p>
    <video poster="imagens/postergaivota.jpg" width="310" controls loop>
        <source src="midia/meuvideo.mp4" type="video/mp4">
        <!--<source src="midia/meuvideo.m4v" type="video/mp4">
        <source src="midia/meuvideo.webm" type="video/webm">
        <source src="midia/meuvideo.ogv" type="video/ogg">-->
    </video>

    <h1>exportando vídeos do Youtube e outros sites de vídeos</h1> <!--Não consume sua banda-->
    <iframe width="450" height="315" src="https://www.youtube.com/embed/FdE5G95B7Mg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe src="https://player.vimeo.com/video/140561159?h=a0c2e2f789&loop=1&color=c9ff23" width="400" height="225" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <!--<p><a href="https://vimeo.com/140561159">2D Animation Reel</a> from <a href="https://vimeo.com/joshschneideranimation">Joshua Schneider</a> on <a href="https://vimeo.com">Vimeo</a>.</p>-->

</body>
</html>
`,
`<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Site de exemplo</title>
</head>
<body>
    
    <main>
        <h1>Exemplo de cores</h1>
        <h2>Título 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ut in itaque natus possimus enim placeat dolorum similique quasi quam inventore qui aspernatur, iste hic omnis facilis dolorem est?</p>
        <h2>Título 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ut in itaque natus possimus enim placeat dolorum similique quasi quam inventore qui aspernatur, iste hic omnis facilis dolorem est?</p>
        <h2>Título 3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ut in itaque natus possimus enim placeat dolorum similique quasi quam inventore qui aspernatur, iste hic omnis facilis dolorem est?</p>
        <h2>Título 4</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ut in itaque natus possimus enim placeat dolorum similique quasi quam inventore qui aspernatur, iste hic omnis facilis dolorem est?</p>
   </main>

</body>
</html>

style.css:

@charset "UTF-8";

* {
    font-family: Arial, Helvetica, sans-serif;
    background-attachment: fixed;
}

body {
    background-image: linear-gradient(to bottom, #e9bb80, #d49a4d, #bb853e, #da8b24);
}

main {
    background-color: white;
    width: 600px;
    padding: 10px;
    margin: auto;
    border-radius: 15px;
    box-shadow: 10px 10px 5px goldenrod;
}

h1 {
    color: goldenrod;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(179, 136, 26, 0.61);
}

h2 {
    color: rgba(218, 165, 32, 0.308)
}

p {
    text-align: justify;
}
`,
`<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabelas</title>
    <style>
        table {
            width: 50vw;            
            border-collapse: collapse;
        }

        th, td {
            padding: 0.5em;
            border: 0.1em solid black;
        }

        .populacao {
            text-align: end;
        }

        tfoot tr td {
            text-align: end;
        }
    </style>
</head>
<body>
    
    <h1>Primeira Tabela</h1>

    <table>
        <thead>
            <tr> <!--Table row = linhas de tabela-->
                <th>Estado</th> <!--Título da tabela, aacho que nem eu nem você sabemos qual a tradução dessa merda-->
                <th>População</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>São Paulo</td> <!--Table datas = dados de tabela-->
                <td class="populacao">21 000 000</td>
            </tr>
            <tr>
                <td>Minas Gerais</td>
                <td class="populacao">2 000 000</td>
            </tr>
            <tr>
                <td>Rio de Janeiro</td>
                <td class="populacao">13 000 000</td>
        </tbody>
        <tfoot>
            <tr>
            <th>Total de habitantes</th>
                <td>210.147.125</td>
            </tr>
        </tfoot>
    </table>

</body>
</html>`
]