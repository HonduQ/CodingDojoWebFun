//Print out all odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (i=1; i<21; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}

//Sum and Print 1-5
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
var str = "Num ";
var sum = 0;
for (i=1; i<6; i++){
    console.log(str + i);
    sum += i;
    console.log(sum);
}
