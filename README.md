# Marvel Comix - React APP
Aplicação para listagem de Comics da Marvel.
## Instruções

Após clonar o projeto, para instalar as dependências, vá na pasta raiz e digite:
### `npm install`

Para rodar o projeto na pasta raiz digite no terminal:

### `npm start`

Irá rodar em modo desenvolvedor:
Abra [http://localhost:3000](http://localhost:3000) no browser para ver.

### Tecnologias utilizadas

- React;
- UseState e UseEffect Hooks;
- Sass;
- Axios;
- API da Marvel de Comics;


### Como foi feita

O foco foi componentizar bem o código, reutilizando componentes a medida do possível, também foi criado um service fetchComics que é importado no App.js

O state principal fica no App.js , sendo alterado por funções que são passadas para componentes filhos para que possam fazer com que o state da aplicação mude.
Alguns componentes filhos tem seu próprio state, é o caso do Comic.js que possuí um state para dizer se foi ou não clicado e exibir ou não as opções do Comic.


Foi utilizado o useEffect Hook para que logo após a aplicação ter sido mounted seja executado o service fetchComics e em seguida é usado o useState hooks para guardar os dados sobre os comics no estado do component principal App.js.
Enquanto não forem carregados o usuário verá uma mensagem Loading Comics...

Após serem carregados os Comics é possível filtrar digitando no topo da página alguma palavra, letra, nome de personagem, nome de HQ. Todas HQ'S que tiverem em seu título essa palavra serão exibidas, caso não haja resultados o usuário verá uma mensagem na tela dizendo que nenhuma HQ foi encontrada

Do App.js os dados das HQ's serão passados para outros componentes como o ComicList que irá por sua vez passar os dados de cada uma das HQ's com um map para um componente Comic que exibirá na tela inicial uma imagem vinda do componente ComicImage e o título da HQ.

Ao clicar em uma HQ na tela inicial o usuário verá duas opções:
- Details ( que abre uma modal com detalhes do Comic);
- Select/Unselect ( que seleciona a HQ para ser enviada via email);

Se o usuário clicar em Details aparecerá uma Modal com mais informações sobre aquela HQ.

Se ele clicar em Select a HQ ficará marcada na tela e poderá desmarcar clicando novamente e escolhendo Unselect.

Caso haja pelo menos uma HQ selecionada aparecerá um botão no final da lista para que o usuário possa enviar as HQ'S selecionadas via email.

A tela que aparece é o componente Mailer que valida com Regex se o usuário digitou um email válido, caso esteja válido é liberado o botão de envio,  do contrário ele não consegue enviar.

Ao clicar enviar o usuário recebe um alerta na tela dizendo que as HQ's foram enviadas.

Como esta é uma aplicação focada no Front-End foi até ai a aplicação. Para fazer um envio real teria que utilizar alguma API de envio de emails passando os dados salvos em selectedComics.

Thanks for reading!




