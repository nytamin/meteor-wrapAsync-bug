# Meteor.wrapAsync bug reproduce repo

Test code is in myapp/main.js

```
cd myapp
meteor
```

The output in console is:
```
Running test to check Meteor.wrapAsync...
myWrapFunction()
arguments received in wrapped function: [ [Function] ] // This is good
myWrapFunction(1)
arguments received in wrapped function: [ 1, [Function] ] // This is good
myWrapFunction(1, undefined)
arguments received in wrapped function: [ 1, [Function] ] // This is not good, callback function is not inserted at the end
myWrapFunction(1, undefined, undefined)
arguments received in wrapped function: [ 1, [Function], undefined ] // This is not good, callback function is not inserted at the end
(STDERR) errorClass [Error]: Callback function is not a function! [500]
```
