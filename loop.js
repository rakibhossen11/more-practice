var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var temp = [];

for (var i = 0; i <= numbers.length; i++){
    var element = numbers[i];
    if(element%2==0){
        temp.push(element);
    }
}

console.log(temp);