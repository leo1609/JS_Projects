const obj = {a:1, b: 2, c: 3, soma(){return a+b+c}}
//json gera um texto em formato de dados
//e naõ passa funções  
console.log(JSON.stringify(obj))

//nao é um formato valido para virar json
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1,'b': 2, 'c': 3  }"))
//agora funciona
console.log(JSON.parse('{ "a": 1,"b": 2, "c": 3  }'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))
