A todolist using [jspm](http://jspm.io), [react](https://facebook.github.io/react/), and [reflux](https://github.com/spoike/refluxjs). Lets you create, update, list, and delete todos.

## Setup
* `npm install` to get jspm, [bower](http://bower.io), and [json-server](https://github.com/typicode/json-server)
* `./node_modules/.bin/jspm install` to set up jspm packages
* `./node_modules/.bin/bower install` just for [zurb foundation](http://foundation.zurb.com/)
* `./node_modules/.bin/json-server todos.json` to get the api server running
* Wasn't that easy? :sweat: now just browse to the index and you're good!

## Using jspm with react and reflux in another project
1. `npm init` and hit enter a bunch
2. `npm install --save-dev jspm`
3. `jspm init` and hit enter a bunch
4. `jspm install react reflux jsx`
5. Now add [this boilerplate](https://github.com/mikedfunk/flux-todo-over-api/blob/master/index.html#L10-L14) to bootstrap your app with jspm. _(NOTE: require() and jsx is all done by the browser with this technique. In production, use jspm cli to create a buildfile instead.)_
6. that app.js file will instantiate the main app react component and call React.render(). 
7. From here on you can just `var MyComponent = require('./MyComponent.jsx!')`. Note the !, it's required for the jspm jsx plugin to work.
8. Require plain old javascript modules by defining `module.exports = MyModule;` at the bottom of module files and `var MyModule = require('./MyModule')` for each one.
9. By the way you can also do `jspm install jquery` and `var $ = require('jquery');`! SOOO much easier than [browserify-shim](https://github.com/thlorenz/browserify-shim). Same with lodash, etc.
10. Reflux apps eschew the dispatcher - they just use Components, Actions, and Stores. Components are react components. Stores are like models in MVC. And actions are event-driven glue between the two. Actions are really just strings in a file.
11. Example workflow: you click a button and it adds 1 to a global state object called count. First you define a `getInitialState()` function in your component which returns something like `{count: 1}`. With reflux/react the incrementer button has an `onClick` property which calls `this.handleClick.` In that function you call `AppActions.incrementCount()`. It finds the action defined in the actions file, which you'll need to add yourself (just an array of strings). The Store is listening to that action with a function called `onIncrementCount`. It increments the counter and updates the state. This state is linked with the react component state. Back in that component you display the count with something like `<p>{this.state.count}</p>`. This linked state is updated in that component and now the value shows the updated value from the store.
12. There are 3 bits of glue to make this happen:
 1. In your [main App component](https://github.com/mikedfunk/flux-todo-over-api/blob/master/lib/TodoApp.jsx) where you want the linked state to the store [it needs a mixin from reflux](https://github.com/mikedfunk/flux-todo-over-api/blob/master/lib/TodoApp.jsx#L15-L19). This listens for triggering of events by the Store and responds by setting the state.
 2. You need a [matching key in TodoActions](https://github.com/mikedfunk/flux-todo-over-api/blob/master/lib/TodoActions.js#L10-L13) that matches the TodoAction you call from your component (e.g. `whatever`, which would be called by the component via `TodoActions.whatever()`) and matches the `onWhatever` method name in the Store.
 3. [Add a listenables element in the Store](https://github.com/mikedfunk/flux-todo-over-api/blob/master/lib/TodoStore.js#L12-L15) to automatically link `whatever` action with `onWhatever` method in the Store. There are other ways to link actions which is why they are abstracted. You could link multiple actions, add logic, do whatever. But this is the simplest way that keeps it flexible.

Questions? Comments? Hatemail? Hugs? [mikefunk.com](http://mikefunk.com)

## Todo

- [ ] Write front-end tests with cucumber.js
