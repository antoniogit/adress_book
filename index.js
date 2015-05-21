var Command = require('./command')
function handleResult(err) {
  if (err) {
    console.log('Error!')
  } else {
    console.log('OK! The command ran successfully!')
  }
}
function handleResult2(err, result) {
  if (err) {
    console.log('Error!')
  } else {
    console.log(result[0].number);
  }
}
Command.add(handleResult);
Command.find(handleResult2);