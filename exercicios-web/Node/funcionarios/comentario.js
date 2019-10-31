//para eu implementar o servidor node na pasta funcionarios, eu preciso
//criar o mesmo dentro da pasta, para isto eu entro no terminal,
//entro na pasta node 'cd node' depois 'cd funcionarios', entao eu ai
//consigo criar a pasta de pacotes 'json' pelo comando npm init -y
//apos criar esta pasta eu preciso reiniciar o visual code
//para a pasta do json aparecer.
//Da para implementar o node usando o comando
//npm init, porem o mesmo fara um monte de perguntas,
//portanto com o intuito de não precisar preencher as 
//perguntas usa se o comando npm init -y

//para instalar uma dependencia(é uma biblioteca com varios funcoes que posso
//utilizar), ou seja um node_module(pasta que contera varias bibliotecas dentro 
//dela), dentro da pasta funcionarios,
// eu devo executar o comando npm i --save axios dentro
//da pasta funcionarios. Axios é o nome da dependencia
//que quero instalar

//o arquivo package-lock.json nada mais é que uma versao 
// do json mais completa da pasta funcionarios

//o nodemon foi instalado de forma global. Ele serve para identificar qualquer mudanca no 
//codigo e executar no browser sem a necessidade de iniciar o node (npm start) toda vez
//que houver uma mudança no programa. O mesmo pode ser executado sem escrever o 'npm start'
//toda hora que houver mudança no programa.
//poderia instala-lo novamente aqui dentro de funcionarios,neste caso ele
//estaria dentro de package-json nas dependencias e dentro da 
//pasta node_modules.Dentro de package.json eu chamo ele pelo start -  que é um comando
//que existe no node - "start": 'nodemon',
//onde ele iniciara sempre que chamado o nodemon dentro
//de funcionarios, porque funcionarios.js foi escrito no 'main' do 'package.json', 
//sem fazer isso o nodemon nao funcionara.
//'dev' é um comando criado pelo programador e pode ser escrito qualquer
//coisa no lugar dele que ira funcionar, tipo 'blabla. Ele
// faz a mesma coisa que o start porem é preciso escrever o 
//comando da seguinte forma: 'npm run dev' ou 'npm run blabla'

//o 'node_modules', se ele for apagado, é instalado pelo comando npm i
//ele sera instalado com todas as bibliotecas que foram
//escritas nas dependencias de package.json

//para instalar as bibliotecas sem estarem escritas no package.json e para serem
//escritas na mesma é necessario baixar usando o comando 'npm i --save axios' por 
//exemplo. O 'i' serve para instala-lo no node_modules e o '--save' para escreve-lo
//no package.json em suas dependencias.
//Posso usar o comando npm i --save-dev axios@0.17.1 -E, onde o '--save-dev' escreve a 
//biblioteca axios na devDependencies na pasata package.json o que idica que esta 
//biblioteca somente sera usada durante a fase de desenvolvimento do programa e que nao sera
//usada depois que o software estiver acabado, pronto. o '-E' indica que a biblioteca nao sofrera 
//upgrade automatico de uma nova versao e ficara fixa na versao '0.17.1', porque se ela sofre um 
//upgrade pode ser que os comandos usados do axios, nao estejam mais funcionando em uma nova versao
//e portanto pode quebrar toda a execução do programa.
//Quando se usa o circunflexo na versao ex: '^0.17.1' significa que a versao pode ser atualizada
//automaticamente, porem a pasta 'package-lock.json', que ja é instalada automaticamente quando se instala as bibliotecas, nao deixa a versao ser mudada automaticamente mesmo assim,
//pois todas as versoes que eu baixei inicialmente das bibliotecas ficam escritas nela e impedem que o
//execução possa ser quebrada por alguma atualização de biblbioteca. Ela serve como uma garantia para
//quando for necessario reinstalar as biblbiotecas novamaente, elas sejam baixadas identicas as da primeira
//vez quando foram baixadas 
//para iniciar o nodemon em funcionarios.js é so escrever 
//o camando 'npm start' dentro da pasta funcionarios no  terminal

// no site 'npm-scripts' tem um monte de comandos que podem ser 
//usados no script