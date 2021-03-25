# js-specialcharacter-flter
this is the code for filtering out special characters and numbers in  react

##TS
it is in typescript js so props have to be declared with types.

##Code summary
I allow only alphabets, backspace and spacebar. to do this I ;
  1. filter onKeydown each character to make sure it is not a special character and number
  2. then I add the event.key to the current value of that input.
  3. if its a backspace button, I simply remove the last character from the inouts value.
 
 ##N/B: does not work on mobile and browsers.
