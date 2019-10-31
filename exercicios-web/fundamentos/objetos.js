const prod1 = {}
prod1.nome = 'celular ultra mega'

prod1.preco = 4998.90

//evitar colocar atributo com espaco
prod1['desconto legal'] = 0.40

console.log(prod1)

const prod2 = {
    nome: 'camisa',
    preco: 80.0,
    obj: {
        blabla:1,
        obj: {
            blabla:2
        }
    }
}
console.log(prod2)

//isto é um json. Nao é um objeto, é um formato textual
//serve para trocar dados entre sistemas
'{"nome": "camisa","preco": 80.0 }'
