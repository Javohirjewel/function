
// while(num <= son){
//     if(num >= 10 && num < 100 && num % 8 == 0){
//         console.log(num);
//     }
    
//     num ++;
// }
// while(num < son){
//     if(num >= 10 && num < 100 && num != 44){
//         console.log(num);
//     }
//     num ++;
// }

// let num = 0;
// do{
//     console.log(num);
//     num ++;

// }
// // while(num < 0)
// let chegara = prompt('Qaysi songacha hisoblaylik')
// let diff = prompt('nechchiga bulinadigan sonlarni chiqaramiz!')
// let summa = 0

// for(let i = 0; i < chegara; i ++){
//     if(i % diff == 0 && i !== 0){
//         summa += i
//         console.log(i);
//     }
// }

// console.log(`biz kiritgan ${chegara} gacha bo'lgan ${diff} ga bo'linadigan sonlarni yig'indisi ${summa} ga teng`);

// let son = prompt('son kiritamiz')

// let cout = 0;
// for(let i = 0; i <= son; i++){
//     if(i % 2 == 0 &&  i !== 0){
//         cout = cout + i
//     }
// }
// alert(`bu kiritgan sonimizgacha juft sonlar yi'gindisi ${cout} ga teng`)

// function showMessage(number) {
//     alert(number);
// }

// showMessage(80)


// let userName = 'John';

// function showMessage() {
//     let ok = 'Hamamsi yaxshi'
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
// function Great(){

//     alert("Great " + userName)
// }

// showMessage()
// Great()

// function showMessage(from, text){
// // let from;
// // let text; 
//     alert(from + ' : ' + text);
// }

// showMessage('Kanada', 'very good')

// function kopaytirgich(num1, num2){
//     for(let i = num1; i <= num2; i++){
//         if(i % 2 == 1){
//             console.log(i);
//         }
//     }
// }

// kopaytirgich(5, 15)

// kopaytirgich(90, 100)

// function showMessage(text, name){
//     alert(text + ' ' + name )
// }

// let name = "john"

// showMessage("Hello", name)

// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Harry"); 



function showMessage(text) {
    if (typeof(text) == 'number'){
        alert('Bu son number kiritilgan argument esa ' + text)
    }
    else{
        alert("Bu ma'lumot string kiritilgan argument esa " + text)
    }

  }
let son = prompt('Biror son kiritin')
let number = Number(prompt('Biror son kiritin'))

showMessage(number)
showMessage(son)