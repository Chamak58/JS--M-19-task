/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.**///

let numbers = 81;
let sum = 0;
while(numbers <= 131){
    console.log(numbers);
    if(numbers % 2 === 1){
        console.log('odd numbers:', numbers);

        sum = sum + numbers;
        console.log('sum of odd numbers:', sum);
    }
    numbers++;
}


///**
// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

/*programming hero*/
///

let numbers2 = 206;
let sum2 = 0;
while(numbers2 <= 311){
    console.log(numbers2);

    if(numbers2 % 2 === 0){
        console.log('even numbers', numbers2);

        sum2 = sum2 + numbers2;
        console.log('sum of even numbers:', sum2);

        
    }
    numbers2++;
    
}