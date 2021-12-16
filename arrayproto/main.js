const people = ["Noah", "Candice", "Elias", "Julien", "Marc", "Emeric", "Raf"];

// slice prend du premier élement en param et exclu le dernier slice(start, end)
console.log(people.slice(2, 4))

// length renvoie le nb d'elements dans le tab permet aussi d'acceder à un element depuis son index
console.log(people.length)

let selectName = people[3];
console.log(selectName)

// select with length
let selectName2 = people[people.length, 5];
console.log(selectName2)

//foreach permet de faire une boucle pour tous les elements du tableau
people.forEach(elements => {
    console.log(elements)
})

// push ajouter un element à la fin du tableau
people.push("Marie")
console.log(people)

// pop supprimer le dernier element du tableau
people.pop()
console.log(people)

// shift supprimer le premier element du tableau
people.shift();
console.log(people)

// unshift ajouter au debut du tableau
people.unshift("Noah");
console.log(people)

// indexof trouver l'index d'un element dans le tableau permet de manipuler par l'index car unique
let position = people.indexOf("Julien");
console.log(position)

// splce upprimer les elements après un l'index donné
// people.splice(4);
console.log(people.splice(4))
console.log(people)

//  upprimer les elements à partir d'un index
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);

let removedItems = vegetables.splice(1, 2);
// n définit le nombre d'éléments à supprimer,
// à partir de la position du premier param

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

// slice permet également de copier un tableau
let newClass = people.slice();
console.log(newClass)

