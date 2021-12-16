console.log("coucou")

// math

//abs renvoie la valeur absolue d'un nb
console.log(Math.abs(12))
console.log(Math.abs('-1'))
console.log(Math.abs(-2))
console.log(Math.abs(null))

// ceil nb arrondi au dessus
console.log(Math.ceil(9.2))
console.log(Math.ceil(12.5))
console.log(Math.ceil(-12.05))

// floor l'inverse de ceil
console.log(Math.floor(12.5))
console.log(Math.floor(12.5))
console.log(Math.floor(-12.05))

// round arrondi au plus proche
console.log(Math.round(12.5))

// max ressort le + grand
console.log(Math.max(12, 13, 98, -49))
console.log(Math.max(-12, -13, -98, -49))

const arr = [1, 18, 97, 72, 83, 67];

//pas oublier le ... avant d'add le tableau
console.log(Math.max(...arr))

//min inverse de max
console.log(Math.min(12, 13, 98, -49))
console.log(Math.min(-12, -13, -98, -49))

const arr2 = [1, 18, 97, 72, 83, 67];

console.log(Math.min(...arr2))

// random nous envoie un nb aléatoire entre 0 et 1 (loterie, dés etc)
console.log(Math.random())

// pow calcule la puissance 2 puissance 4
console.log(Math.pow(2,4))

