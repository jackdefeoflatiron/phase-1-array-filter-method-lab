function findMatching(arrayWords, drivername){
    let drivers= arrayWords.filter(x => drivername.toUpperCase() == x.toUpperCase());
    return drivers
}
function fuzzyMatch(arrayWords, letters) {
    let drivers = arrayWords.filter(x => x.indexOf(letters) === 0)
    return drivers
}
function  matchName(arrayObjects,string){
    let nameMatch = arrayObjects.filter(x => x.name === string )
    return nameMatch
}
