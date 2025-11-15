
 <!--! how to declare variable  -->

for declaring variable we have 3 keywords.

1. let 
2. var 
3. const 

    <!--! let vs var -->

in let keyword re-declarion is not possible.
in var keyword re-declarion is possible


<!-- ! const -->

it is used to take constant value.
here we can not do re-declarion and re-initialization.
here declarion and initialization we have to do in the same line.


<!-- !  Datatype  -->

in javascript we have two types of datatypes. 
1. primitive 
2. non-primitive 


<!-- ! 1. Primitive Datatypes -->

1. number 
2. boolean
3. string
4. undefined 
5. null 
6. bigint


<!-- !  difference between null and undefined -->

   * undefined means variable is declared but not initialized.
    null means varible is initialized with null. 

   * typeof undefined is => undefined. 
    typeof null is => object

<!-- ! 2. Non-Primitive Datatypes -->

   i. array 
  ii. Object
 iii. Function


<!-- !  typeof  -->

  typeof operator is used to know the datatype of the variable.


<!-- !  Function -->

⚫ function is set of code , used for doing some perticular task.
⚫ it is used for code reusability.
⚫ whenever we are creating function, if we want to execute we have to call  the function.

<!-- Types Of Function  -->

<!-- !  1. Named Function  -->

  the function that having some name, is called named function.

 <!-- ? syntax -->

  function funtionName()
  {
      code....
  }


  <!-- ! 2. Anonymous function -->

 ⚫ the function that does not have any name, is called Anonymous Function.

 <!-- ? syntax -->
 
  function()
  {

  }

  <!-- ! Lexical Scopping -->

  in nested function inner function can access all the properties of outer function but the outer function can not access the properties of inner function , this is called Lexical Scopping.


  <!-- ! Higher order Function -->

  Function that takes another function as parameter, is called higher order function.

  <!-- !  callback function -->

  The Function that is sent as a parameter to the higher order function , is called Callback function.