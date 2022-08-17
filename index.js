function receivesAFunction(myCallbackFuncton) {
  myCallbackFuncton();
}

function returnsANamedFunction() {
  return function callback(){}
}

function returnsAnAnonymousFunction() {
  return function () {};
}
