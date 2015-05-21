var Contact = require ('./contact')
var Command = require('./command')

//var contact = Contact.createContact("John Smith,604-123-9090")

//var name = Contact.parseName("John Smith, 604-123-9090")
//var number = Contact.parseNumber("John Smith, 604-123-9090")

/*Contact.loadContacts( function(err, data) {
	console.log(data)
})*///->task 8

/*var contacts = [ { name: "John Smith", number: "604-123-9090" } ]

Contact.saveContacts(contacts, function(err) {
  console.log('success')
  // after the 'success' message is printed
  // the contacts array
  // should be in your 'data.json'
})*///->task 9


//var contact = { name: "John Smith", number: "604-123-9090" }
/*var name = 'John Smith'

Contact.findContacts(name, function(err) {
  console.log(err);
  // once the 'success' message is printed
  // the contact above was appended to data.json
  // among the already existing contacts
})
//console.log(contact)*///->task 11

/*console.log(Command.getOperation())
console.log(Command.getOperationData())*///->task 12

/*Command.add(function(err) {
  console.log('Contact added!')
})*///->task 13
Command.find(function(err, results) {
  console.log('Find complete!')
})
