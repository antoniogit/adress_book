var Command = {};
var Contact = require ('./contact')

Command.getOperation = function() {
  // return the value from the list of command line arguments
  // representing the operation to be performed (add or find)
 return process.argv[2];
}

Command.getOperationData = function() {
  // return the value from the list of command line arguments
  // representing the data to be used for the operation
  return process.argv[3];
}

Command.add = function(done) {	
		var contactString = Command.getOperationData();
		var contact1 = Contact.createContact(contactString);
		Contact.saveContact(contact1, function(err, contact1) {
			if(err) {
				//console.log('err');
				done(err);
			} else {
				done(err, contact1);
			}

		})

  // extracts the contact string from the command line arguments
  // converts the contact string into a contact object using Contact.createContact
  // appends the contact object to data.json
  // calls the callback done(err)
  // err represents the error which will be null if no errors were encountered
}

Command.find = function(done) {
	var contactString = Command.getOperationData();
	Contact.findContacts(contactString, function(err, contactString) {
		if(err) {
		//	console.log('err');
			done(err);
		} else {
		//	console.log()
			done(err, contactString);
		}
	});


  // extracts the name from the command line arguments e.g. "John Smith"
  // searches for the contacts matching the given name using Contact.findContacts
  // prints the matched contacts
  // returns the matched contacts array via done callback
  // e.g. done(err, foundContacts)
  // where foundContacts is the array of contacts that matched the search
  // err is the value for the error (null if no error was encountered)
}
module.exports = Command