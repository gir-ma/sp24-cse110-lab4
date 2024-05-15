1. ```3``` after the loop completes ```i``` will be ```3``` because it is increamented until ```i < 3``` is false.  <br>
2. ```150```<br>
3. ```150```<br>
4. It retuns nothing. It doesn't log anything to the console, but its calculating those values. ```Console.log``` is like a ```System.out.print``` in java<br>
5. ```ReferenceError: i is not defined``` this is because ```i``` is defined only in the for loop block by ```let``` so it's not accessible to the ```console.log```<br>[correct answer 50, 100, 150]
6. ```ReferenceError: discountedPrice is not defined``` in the same way, this happen because ```discountedPrice``` is defined only in the for loop block by ```let``` so it's not accessible to the ```console.log```<br>
7. ```150``` <br>
8. It retuns nothing. It doesn't log anything to the console, but its calculating those values. ```Console.log``` is like a ```System.out.print``` in java<br>
9. ```TypeError: Assignment to constant variable.``` because we have declared the values of finalPrice and discounted with ```const``` it causes error while we try to reassign insied the for loop.<br>
10. ``` 3```<br>
11. It retuns nothing. It doesn't log anything to the console,<br>
12. A.```student.name``` <br> B. ```student['Grad Year']```<br> C.```student.greeting()```<br> D. ```student['Favorite Teacher'].name```<br> E. ```student.courseLoad[0]```.<br>
13. a. Result of ```'3' + 2```: ```32``` because js performs string concatenation as one of the operand ```'3'``` is string.<br>
b. Result of ```'3' - 2```: ```1``` js converts the string ```'3'```to a number and performs subtraction<br>
c. Result of ```3 + null```: ```3``` js treats ```null``` as ```0``` in arithmetic operations<br>
d. Result of ```'3' + null```: ```3null``` js performs string concatenation because one operand is a string. <br>
e. Result of ```true + 3```: ```4``` js treat ```true``` as ```1``` in arithmetic operations.<br>
f. Result of ```false + null```: ```0``` js treats both ```false``` as ```0``` and ```null``` as ```0``` in arithmetic operations.<br>
g. Result of ```'3' + undefined```: ```3undefined``` js performs string concatenation because one operand is a string.<br>
h. Result of ```'3' - undefined```: ```NaN```  attempts to convert ```'3'``` to a number, then subtracts ```undefined```, resulting in NaN (Not a Number).<br>
14. A. Result of ```'2' > 1```: ```true``` When comparing ```'2'``` and ```1```, JavaScript sees ```'2'``` as a number and ```1``` as a number. Since 2 is greater than 1, the result is ```true```.<br> 
    B. Result of```'2' < '12'```: ```false``` JavaScript compares each character of the strings ```'2'``` and ```'1'```. Since '2' is not less than '1', the result is ```false```.<br>
    C. Result of ```2 == '2'```: ```true``` JavaScript treats ```2``` as a number and ```'2'``` as a string. Since they represent the same number, the result is true.<br>
    D. Result of ```2 === '2'```: ```false``` JavaScript compares both value and type. Since 2 is a number and '2' is a string, they are not exactly the same, so the result is false.<br> 
    E. Result of ```true == 2```: ```false``` JavaScript converts true to 1 when compared with a number. Since 1 is not equal to 2, the result is ```false```.<br> 
    F. Result of ```true === Boolean(2)```: ```true``` Both sides are the same type (boolean). ```Boolean(2)``` evaluates to ```true```, so both sides match, and the result is ```true```.<br>
15. The ```==``` and ```===``` operators are both used for comparison in JavaScript, but they behave differently in terms of type coercion and strictness of comparison.<br> 
    - we use ```==``` when we want JavaScript to perform type coercion and convert operands to the same type before comparison.
    - we use ```===``` when you want a strict comparison without type coercion, where both the value and the type must be the same for the comparison to be ```true```.<br>
For example in the exercise above, <br>
    * ```2 == '2'``` would evaluate to ```true``` because of type coercion.
    * ```2 === '2'``` would evaluate to ```false``` because of the strict comparison.
16. Answered in ```part2-question16.js```.
17. The ```modifyArray``` function takes an array and a callback function as parameters. It iterates through each element of the array, applies the callback function to each element, and stores the result in a new array. So if we go through step by step, first We have a function called modifyArray that takes an array and another function as input.
It goes through each number in the array and applies the provided function to it.
The provided function, doSomething, doubles each number.
So, if we call modifyArray([1, 2, 3], doSomething), it will double each number in the array.
And the result will be [2, 4, 6].<br>
18. Answered in ```part2-question18.js```.
19. -  ```1``` 
    -  ```4``` 
    -  ```3``` 
    -  ```2```
