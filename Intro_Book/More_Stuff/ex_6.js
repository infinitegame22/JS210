function allMatches(array, regexMatch) {
    return array.filter((item) => {
        return item.match(regexMatch);
    })
}

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']