//nao aceita repeticao e nao tem indice
//estrutura de conjunto
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corinthias')
times.add('flamengo')
//nao aceita repeticao
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomeSet = new Set(nomes)
//ele nao repete o lucas
console.log(nomeSet)