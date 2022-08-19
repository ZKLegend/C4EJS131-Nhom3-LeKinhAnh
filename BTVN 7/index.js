// BÀI 1:
// let sum = 0;
// for (let x = 100; x > 0; x--) {
//     sum = (sum + x)**(1/2);
// }
// console.log(sum);


//BÀI 2:

//Cách 1
// for (let x = 1; x < 10000; x++) {
//     for (let y = 1; y < 10000; y++) {
//         if (x == y**2) {
//             console.log(x);
//         }
//     }
// }

//Cách 2
// for (let x = 1; x < 10000; x++) {
//         if (Number.isInteger(x**(1/2)) == true) {
//             console.log(x);
//         }
//     }