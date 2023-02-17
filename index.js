// feet to inche 
/* function feetToInche(feet){
    let inche = feet * 12;
    return inche;
}

const inche = feetToInche(12);
console.log(inche); */

// centimiter to meter

/* function cintimertToMeter(cintimeter){
    let meter = cintimeter / 100;
    return meter;
}

const meter = cintimertToMeter(122);
console.log(meter,'meter'); */

//  calculate book paper 

const firstBookPage = 100;
const secondBookPage = 200;
const thirdBookPage = 300;

function paperRequirements(firstBook,secondBook,thirdBook){
    const totalFirstBook = firstBook * firstBookPage;
    const totalSecondBook = secondBook * secondBookPage;
    const totalThirdBook = thirdBook * thirdBookPage;
    const totalPageNeed = totalFirstBook + totalSecondBook + totalThirdBook;
    return totalPageNeed;
}

const totalPage = paperRequirements(3,2,5);
console.log(totalPage);