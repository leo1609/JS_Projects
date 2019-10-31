//    Coloquei na build em package.json que "cross-env NODE_ENV = production webpack", ouseja a varaivel NODE_ENV
//recebeu o modo production, no entanto abaixo a constante 'modoDev' recebe true se NODE_ENV for diferente de
//'production' e false se NODE_ENV é igual a 'production'.
//   Portanto quando efetuar 'npm start' executara no modo desenvolvimento e nao minificara o 'css' e nem o 'js', porem
//se eu efetuar no terminal 'npm run build' executara no modo producao e minificara os arquivos 'css' e 'js'. 
const modoDev = process.env.NODE_ENV !== 'production'

//Este arquivo que sera interpretado pelo node, portanto tenho
//que usar sintaxe que o node entende, o sistema de modulos que ele entende.
// Nao posso usar o sistema de modulos do EcmaSript que foi usado nos arquivos
//de 'pessoa' e 'principal'
const webpack = require('webpack')

//cria o css em um arquivo proprio. Melhor do que inseri-lo no principal.js do public
//atraves do webpack, como feito no exercicio anterior, porque fica melhor manutenivel, 
//porem tenho que escreve-lo no link do html para ele funcionar
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//minifica js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//minifica css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//O webpack é totalmente centrado no sistema de modulos do EcmaScript
//vou exportar o objeto que representa toda a configuracao para um
//arquivo criado pelo webpack chamado 'main.js' dentro da pasta 'dist'. 
module.exports = {
    //Se modoDev é true entao mode é development, se false entao é production.
    //se eu configurar como 'production' o arquivo sera minificado
    //'development' nao sera.
    mode: modoDev ?  'development' : 'production',
    //arquivo de entrada que o webpack usara para executar
    entry: './src/principal.js',
    //aqui configuro o nome da pasta no lugar de main.js coloco principal.js
    output: {
        filename: 'principal.js',
        //e aqui crio a pasta 'public' no lugar da 'dist'
        path: __dirname + '/public'
    }, 
    //precisei baixar a dependencia "webpack-dev-server": "3.1.4" para ter um servidor
    //de desenvolvimento. Ele executara a pasta public e na porta 9000. Este servidor
    //tem auto reload, pode fazer a mudanca no arquivo da pasta src e salvar, que ele automaticamente
    //carrega a pagina no browser sem precisar estartar o servidor novamente. Ele nao construira a public,
    //portanto para isso é necessario efetuar o comando 'npm run build' no terminal.
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                //configuracao que fara a minificacao mais rapida
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            //crio o arquivo na pasta 'public'
            filename: "estilo.css"
        })
    ],
    //cadastra os loaders para poder fazer o import do css na principal.js
    //preciso escreve-los nas dependencias no package.json e fazer o
    //comando 'npm i' no terminal para instala-los
    module:{
        rules:[{
            //pega arquivos com final .css, .sass e .scss
            test:/\.s?[ac]ss$/,
            use: [
                //MiniCssExtractPlugin.loader- este plugin é conflitante com 'style-loader',
                //por isso eu comentei-o. Este plugin ira carregar o 'estilo.css' para a pasta 'public' e nao minificara
                //somente carrega
                MiniCssExtractPlugin.loader,
                //adiciona o css a dom injetando na tag <style>, sem a necessidade de
                //importa-los atraves de link no html
                //'style-loader', 
                'css-loader', //interpreta @import, url()..... para carregar o  css
                'sass-loader',
            ]
        }, {
            //pega todo tipo de imagem
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}

//usando o comando 'npm start' na pasta 'webpack' no terminal, webpack interpreta o sistema de modulos do EcmaScript e 
//cria o arquivo main.js e a pasta 'dist'. Se eu executar o comando 'node dist/main.js' executara o main.js