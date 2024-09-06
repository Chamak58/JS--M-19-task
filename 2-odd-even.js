/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

//-------subtask-1----------
let numbers = 61;
while(numbers <= 100){
    console.log(numbers);
    numbers++;

    if(numbers % 2 === 1){
        console.log('Odd Numbers:', numbers);
    }
}

//-----subtask-2------------
let evenNum = 78;
while(evenNum <= 98){
    console.log(evenNum);
    evenNum++;

    if(evenNum % 2 === 0){
        console.log('Even Numbers:', evenNum);
    }
}