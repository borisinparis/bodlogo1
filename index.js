// Exercise 1
 
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.
 
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------



// for (let i = 1 ; i<=10 ; i++) {
//     if (i%2===0) {
//         console.log(i +" even numbers");
        
//     }
//     else {
//         console.log(i + " odd number ");
        
//     }
// }
  // *********** bodlogo 2 ***********
// for (i=0; i<=100; i++) 
// {
//     if (i%3===0 && i%5===0){
//         console.log(i + " fizzbuzz");
        
//     } else if(i%5===0) {
//         console.log(i+ " buzz ");
        

//     } else if (i%3===0 )
//         console.log(i+ " fizzs ");
        
// }


// *********** bodlogo 3 *************

// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
 
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627 

//******* bodlogo */
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
// let sum1 = 0
// let sum2 = 0 
// for ( i=0 ; i<=arr_1.length ; i++) {

//     if ( arr_1.length > i )
//     {
//         sum1 =  sum1 +arr_1[i] 
//     }
// }
// for(j=0; j<=arr_2.length; j++) {
// if ( arr_2.length> j)
// {
//     sum2= sum2+ arr_2[j]
// }
    
// }
// console.log(sum1);
// console.log(sum2);


// console.log(sum1 + sum2);



// Using a for loop print all even numbers up to and including n. Don’t include 0.
 
// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

//***** bodlogo */
// for (i=2 ; i<=22 ; i++ )
// {
//     if (i%2===0 ) {

//         console.log(i);
        
//     }
// }


// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
 
// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes




//******* bodlogo */
// let str1= "javascript";
// let str2 = ""
// for ( i=0 ; str1.length> i ; i++) {
//     if (i % 2 == 0) {
//         str2=str2 + str1[i]

//     }else {
//         str2=str2 + 'Z'
//     }
// }
// console.log(str2);




// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
// let str2 = "don’t know why";
// Example output:
// “yes”

// let str2 = "don't know why";
// let sum = ""
// for ( i =0 ; str2.length>i ; i++) {

// if (str2[i]=="y" || str2[i]=="Y"){ 
//     sum=sum + 1
// } }
// if(sum==1) {
//  console.log("yes");
 
// }
//  else {
//     console.log("no");
    
//  }


// Given a number n Calculate the factorial of the number
 
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24



//***** bodlogo */


// let n2 = 1;
// let sum=1
//  for( i=4 ; i>n2; i--) {
//     sum=sum*i
//  }
//  console.log(sum);
 


//  Exercise 8
 
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

// for(i=1 ; i<10 ; i++)
//     {
//         for (j =1 ; j <10 ; j++)
//         {
//             let sum = i * j
//             console.log( i + " * " + j + " = " + sum );
            
//         }
//     } 


 
// Exercise 9
 
// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.
// for ( i=60 ; i<100 ; i++ ){
//     if (i >= 60 && i <69) {
//         console.log(i + " D ");
//     } else if ( i > 70 || i<79)
//         console.log(i + " C ");   
// }

 
// Exercise 10
 
//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.
 
// Example Output:
// 1 2 3 4 5 6 7 8 9 10
// let sum = ""
// for (i=1; i<=10 ; i++) {
    
// sum = sum + " " + i
// }
// console.log(sum);


 
// Exercise 11
 
// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.
 
// Example Output:
// The sum is 210
// let sum = 0 ;
// for ( i=1 ; i<=20 ; i ++) {
// sum = sum + i
// }
// console.log(sum);

 
// Exercise 12
 
// Count Vowels in a String Write a loop to count how many vowels are in a given string.
 
// let str = "hello world";
// Example Output:
// Number of vowels: 3

// let str = "hello world";
// let sum = 0 
// for(i=0 ; i<str.length ;  i++) {
//     if ( str[i] == "l") {
//         sum += 1
//     }
// }
// console.log(sum);




 
// Exercise 13
 
// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.



 
// Example Output:
// 1 3 5 7 9 11 13 15


// for (i =1 ; i<=15 ; i++){
//     if(i%2===1) {
//         console.log(i);
        
//     }
// }
 
// Exercise 14
 
// Check if a Number is Prime Write a loop to check if a number n is prime.
 
// let n = 7;
// Example Output:
// 7 is a prime number

// for(i=2 ; i<10 ; i++)
// {
//   if(anhniitoomon(i) === true) console.log(i + " too anhniii too ");
// }
// function anhniitoomon(too) {
//   var anhniitoomon = true;
//   for(let x = 2; x < too ; x++)
//   {
// if(too % x === 0) {
//   anhniitoomon = false;
// break;

// }
//   }
//   return anhniitoomon;
// }
 
// Exercise 15
 
// Reverse a String Write a loop to reverse the characters in a string.
 
// let str = "javascript";
// Example Output:
// tpircsavaj


// let str = "javascript"
// let sum = ""
// for(i=str.length-1 ; i>=0 ; i--) {
//     sum = sum + str[i]
    

// }
// console.log(sum);
 
// Exercise 16
 
// Calculate Power of a Number Write a loop to calculate base^exponent.
 
// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32


// let base = 2 ;
// let exponent = 5;
// let sum = 1 ;
//     for( i =1 ; i<=exponent ; i ++ )
//     {
//         sum = sum * base
//     }
//     console.log(sum);
    
 
// Exercise 17
 
// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.


// let a = 5
// let sum = 1
// let arr=[]
// for (i=1 ; i<=10 ; i++ ) {
//  sum=i * a
//  arr.pop=[sum]
//  console.log(sum);
 
// }





 
// Example Output:
// 5 10 15 20 25 30 35 40 45 50
 
// Exercise 18
 
// Find the Largest Number in an Array Write a loop to find the largest number in an array.
 
// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98
// let array = [3, 67, 15, 98, 23];
// function biggestNumberInArray(arr) {
//   let maxNumber;
//   for(let i = 0; i < arr.length; i++){
//       if(!maxNumber){ // protect against an array of values less than 0
//           maxNumber = arr[i]
//       }
//       if(arr[i] > maxNumber){
//           maxNumber = arr[i];
//       }
//   }
//   return maxNumber
// }
// console.log(biggestNumberInArray(array));

 
// Exercise 19
 
// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.
 
// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4


// let str = "javascript is amazing";
// let sum =0
//  for(i=0 ; i <= str.length ; i++) {
//   if ( str[i] == "a") {
//     sum= sum +1
//   }
//  }
//  console.log(sum + " nomber of 'a' ");
 
////////// ********* asuuh 
// Exercise 20
 
// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.
 
// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8
// let a = 0 ;
// let b = 1;
// let sum = 0 ;
// console.log(a);
// console.log(b);
// for (i=3 ; i<=7 ; i++) {
// sum=a+b
// a=b
// b=sum
// console.log(sum);

// }



 
// Exercise 21
 
// Find All Divisors Write a loop to find all divisors of a number n.
 
// let n = 28;
// Example Output:
// 1 2 4 7 14 28


// for (i=1 ; i<=28 ; i++) {
//   if (28%i===0) {
//     console.log(i);
    
//   }
// }
 
// Exercise 22
 
// Check Palindrome Write a loop to check if a string is a palindrome.
 
// let str = "radar";
// Example Output:
// radar is a palindrome

// let str = "rqdtr"
// for (i=0 ; i<=str.length ; i++) {
// sum1=str[i]
//   for ( j=str.length ; j >=str.length-i ; j--)
//   {
//     if(str[i]===str[j]) { 
//       console.log("palindrom mon ");
//     }
//     else {
//       console.log("bish ");
      
//     }
//   }
// }



 
// Exercise 23
 
// Count Words in a Sentence Write a loop to count the number of words in a sentence.
 
// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

// const count = (s) => {
//   let c = 0;
//   let inWord = false;

//   for (const char of s) {
//       if (/\s/.test(char)) {
//           inWord = false;
//       } else if (!inWord) {
//           inWord = true;
//           c++;
//       }
//   }

//   return c;
// };

// const s = "Loops are fun to learn.";
// console.log(count(s));




 




// Exercise 24
 
// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.
 
// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4

 //buruuu bodson asuuh


// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// for (i=0 ; i<=arr.length ; i++) {
//   if(i!==" " + arr[i]) {
//     console.log("4 missin");
//   }
//   else {
//     console.log("buren bna");
    
//   }
// }
 
// Exercise 25
 
// Filter Positive Numbers Write a loop to filter out positive numbers from an array.
 
// let arr = [-3, 5, -2, 0, 9, -8];
// // Example Output:
// // [5, 9]
// for (i=0 ; i<= arr.length ; i++) {
//   if(arr[i]>0) {
//     console.log(arr[i]);
    
//   }

// }
 
// Exercise 26
 
// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****


// bodlogo ***********


// let a = "*"
// let sum=[]
// for (i=0 ; i<1 ; i++)
// {
//   for(j=0 ; j<5 ; j++){
//     sum +=a
//     console.log(sum);
    
//   }
// }


 
// Exercise 27
 
// Sum of Digits Write a loop to calculate the sum of the digits of a number.
 
// let num = 12345;
// Example Output:
// Sum of digits: 15
 
// let sum = 12345;
// let text = sum.toString();
// let a=0
// for (let i = 0 ; i<text.length ; i++) {
//   console.log(i);
  
//   a+=parseInt(text[i])
//   console.log(a);
// }

// yagaad nan bolson be

 
// Exercise 28
 
// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.
 
// let arr = [1, 2, 3, 2, 1, 4];   
// Example Output:
// let c;
// // [1, 2, 3, 4]
// for(i=0 ; i<arr.length ; i++) {
//   if (arr[i]!= arr[i+1]) {
//     c+=arr[i].toString()
//     if (arr[i])
    
//   }
// }

// let a = [1, 2, 3, 2, 1, 4];
// let a1 = [];
// a.forEach(element => {
//     if (!a1.includes(element)) {
//         a1.push(element);
//     }
// });

// console.log(a1);

 
// Exercise 29
 
// Find Second Largest Number Write a loop to find the second largest number in an array.
 
// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9


 
// Exercise 30
 
// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.
 
// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]
 
// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *
// let n = 3; 
// for (let i = 1; i <= 3; i++) { 
// 	let str = "*"; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// } 
// for (let i = n - 1; i >= 1; i--) { 
// 	let str = "*"; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }



// let a = "*"
// let sum=[]
// for (i=0 ; i<1 ; i++)
// {
//   for(j=0 ; j<5 ; j++){
//     sum +=a
//     console.log(sum);
    
//   }
// }









//***************** bodlogo part2 */




// 1. 3 оронтой той ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
 
// let sum = 123;
// let text = sum.toString();
// let a=0
// for (let i = 0 ; i<text.length ; i++) {
  
//   a+=parseInt(text[i])
//   console.log(a);
// }

// 2. Монгол улсын иргэний бүртгэлийн дугаар болох регистрийн дугаар нь 10 оронтой эхний 2 орон нь үсэг үлдсэн нь тоо байдаг билээ.
//    Тэгвэл хэрвээ хэрэглэгч гараас 10 тэмдэгт оруулахад эхлээд тухайн оруулсан утганы урт нь 10 байгаа эсэх дараа нь эхний 2 орон нь зөвхөн үсэг эсэх хамгийн эцэст нь үлдсэн 8 тэмдэгт нь 
// бүхэлдээ тоо эсэхийг шалгана уу. Хэрвээ энэ бүх нөхцлүүд биелж байвал та монгол улсын регистрийн дугаарыг зөв орууллаа гэж харуулна уу. Хэрвээ аль нэг нөхцөл нь буруу байвал та монгол 
// улсын иргэний бүртгэлийн дугаарыг буруу орууллаа гэж харуулна уу.
//  on = hed ? log
//  sar 12,10, 11, 
// hednii 


// let register = prompt(" registeraa oruulna uu ");
// const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
// const numbers = /[1234567890]+/;
// const hasText = /[A-z]/;  


// if(register.length==10) {

//   if(hasText.test(register[0]) && hasText.test(register[1]))  {
//     if(numbers.test(register.substring(2,11)))
//     {
//       console.log("ta mongol ulsiin irgen mon bna");
      
//     }

//   }
//   else{ 
//     console.log("ta buruu gazraaa registeriin textee bichsen bna");
    
//   }

// }else {
//   console.log("ta buruu register oruulsan bnaa");
  
// }






// 3. While loop ашиглан пирамид хийх. 
  //     \*
  //   **\*
  //   \*\*\***
  //   **\*\*\*** \***\*\*\*\***s
  //    \***\*\*\*\*\*\***
  //    **\*\***\***\*\***
  //  **\*\***\*\*\***\*\***
//   let n=0;
//   let i=1
//   let str = "*"; 
//   let space = ' '; 
// while (10>=i) {

//    i++;
//    n=0

//    console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 

//   // for (let i = 1; i <= 10; i++) { 
//   //   let str = "*"; 
//   //   let space = ' '; 
//   //   console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
//   // }

// }



// 4. While loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.
// let sum = 0, num = 0;

// do {
//     sum += num;
//     num = parseInt(prompt("Enter a number: "));
// } while (num >= 0);
// console.log(`The sum is ${sum}`);

// 5. Анх нэг тоо хадгалаад дараа нь Prompt ашиглан 1 утга аваад тэр тоог таах хүртэл зогсолтгүй ажиллах loop бичээрэй.
// let i = 25;
// const r = Number(prompt("neg tooo oruulna uuu"));

// for ( i = 0 ; i<Infinity ; i++) {
//   if (i===r) {
//     console.log(" break " + i);
//     break
    
//   }
//   else {
//     console.log(i);
  
//   }
// }
// 6. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга. Example: input = 1234567; digit: = 7;
// let num = 12345678;
// let text = num.toString();
// let a=0
// let sum = 0;
// for (let i = 0 ; i<text.length ; i++) {
// a++;
// }
// console.log(a + ": hamgiin suuliin ooron");
  
// if()

// 7. n - д prompt ашиглан утга оруулахад n\*n харьцаатай дөрвөлжин хэвлэх.

// 8. prompt ашиглан n -д утга орууlахад palindrome тоо мөн эсэхийг шалгах.
//    Example1 : input: 111, output: true
//    Example2 : input: 110, output: false
//    Example3 : input: 101, output: true
//    https://en.wikipedia.org/wiki/Palindromic_number

// function palindromeCheck(number) {
//   let numStr = number.toString();
//   return isPalindrome(numStr, 0, numStr.length - 1);
// }

// function isPalindrome(str, start, end) {
//   if (start >= end) return true;
//   if (str[start] !== str[end]) return false;
//   return isPalindrome(str, start + 1, end - 1);
// }

// // Checking the given number is palindrome or not
// console.log(palindromeCheck(121));    // true
// console.log(palindromeCheck(12321));  // true
// console.log(palindromeCheck(12345));  // false
// console.log(palindromeCheck(1221));   // true



// let n = Number(prompt("too oruulah"));
// for(i=0 ; i<n ; i++){
//   if (i===n) {

//   }
// }


// 9. Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна
//    n!=1⋅2⋅3⋅⋯⋅n

//    5! = 120 / 1*2*3*4*5/

//    Бодлого :
//    prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.



// let numberfa= Number(prompt("too oruulna uu"))
// let sum = 1;
// for(i=1 ; i<numberfa+1 ; i++)
// {
// sum=i*sum
// }
// console.log(sum);

// 10. example 1: input = "Hello World", output = "hELLO wORLD"
//     example 2: input = "This Is STRING!", output = "tHIS iS string!"

// let input = "This Is STRING!";
// let sum=[];
// let a=''
// for(i=0 ; i<input.length ; i++) {
//   if(input[i]=== input[i].toUpperCase()){
//     a=input[i].toLowerCase();
//     sum+=a
    
//   }
//   else {
//    a=input[i].toUpperCase();
//     sum+=a
//   }
// }
// console.log(sum);

// 11. Prompt - оор тоо авна. 1 ээс promp оор авсан тоо хүртэлх нийлбэрийг ол. example: input = 10 1+2+3+4+5+6+7+8+9+10 = 55;
// let a = Number(prompt("too oruulna uu")) 
// let sum = 0;
// for(i = 0 ; i<a+1 ; i++) {
// sum+=i
// }
// console.log(sum);


// 12. 3-аас дээш оронтой тоо зарлаад тухайн тоогоо тонгоргож харуулна уу. Жишээ нв Ийм утга 12345 -> 54321.

// let a = 12345
// let b=a.toString();
// let check = 10;
// let sum = [];
// for(i=0 ; i <= a ; i++) {
//   if (i>check) {
//     sum=a%check
//     check=check*10
//     console.log(sum);
    
//   }
// }
// console.log(sum);



// 13. Өгөгдсөн тоо хүртлэх цифрүүдийг зайгаар тусгаарлан хэвлээрэй. Жишээ нь:
//     Input: 4  
//     Output: 0 1 2 3


// let input = 4;
// let space = " "
// let sum=[]
// for(i=0 ; i<=input-1 ; i++) {
//     i+=space
//     sum += i
// }
// console.log(sum);


// 14. Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
//     Input: 5
//     Output: - 1 - 1 2 - 1 2 3 - 1 2 3 4 - 1 2 3 4 5
//     15в

// let a = 5
// let check = " "
// let space = "-"
// let sum1=[]
// let sum=[]
// for (i=0 ; i<1 ; i++)
// {
//   for(j=1 ; j<=5 ; j++){
//     j+=check
//     sum +=j
//     console.log(space +sum);
    
//   }
// }


// 15. Бүхэл тоо өгөгдөнө. Жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.
//     Input: 5
//     Output:
//     - 5 4 3 2 1
//     - 5 4 3 2
//     - 5 4 3
//     - 5 4
//     - 5
let = 5;
for (let i = n ; i >= 1; i--) { 
	console.log(i); 
}

// Palindromic number
// A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number (such as 16461) that remains the same when its digits are