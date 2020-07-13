import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  console.log('Running test to check Meteor.wrapAsync...')

  const myWrapFunction = Meteor.wrapAsync((...args) => {
    console.log('arguments received in wrapped function:', args)
    const expectedCallbackFunction = args[args.length - 1]
    if (typeof expectedCallbackFunction !== 'function') {
      throw new Meteor.Error(500, `Callback function is not a function!`)
    }
    expectedCallbackFunction() // to return
	})

	console.log('myWrapFunction()')
  myWrapFunction()
	console.log('myWrapFunction(1)')
	myWrapFunction(1)
	console.log('myWrapFunction(1, undefined)')
	myWrapFunction(1, undefined)
	console.log('myWrapFunction(1, undefined, undefined)')
	myWrapFunction(1, undefined, undefined)
	console.log('myWrapFunction(1, undefined, undefined, undefined)')
	myWrapFunction(1, undefined, undefined, undefined)

  console.log('Test passed successfully!')
});
