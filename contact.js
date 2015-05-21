var _ = require('underscore');

var Contact = {}

Contact.parseName = function(str){
	var parts = str.split(',')//splits string str in 2 string(before and after ',')
	return parts[0]
}

Contact.parseNumber = function(str){
	var parts = str.split(',')
	return parts[1]
}

Contact.createContact = function(str) {
	var contact = {
		name: this.parseName(str),
		number: this.parseNumber(str)
	}
	return contact
}
Contact.loadContacts = function(done){
	var jsonfile = require('jsonfile')
	jsonfile.readFile('data.json', function(err, data){
		done(data, err)
	});
}

Contact.saveContacts = function(contacts, done) {
	var jf = require('jsonfile')
	jf.writeFile('data.json', contacts, function(err, obj) {
		if (err) {
			done(err);
		} else {
			done(null);
		}
	});
  // contacts is a JavaScript array containing contact objects
  // you need to write the contacts array to data.json and
  // call done(err) when the write operation is complete.
}

Contact.saveContact = function(contact, done) {
	  // contact is a JavaScript object containing the contact info
  // e.g. { name: 'John Smith', number: '604-123-9090' }
  //
  // you need to load the contacts array from `data.json`
  // append the new contact to it
  // store the contacts array to `data.json`
  // call done(err) when the operation is complete
  // err is the value of the error (null if no error was encountered)
	var _this = this;
	this.loadContacts( function(contacts, err) {
		if(err) {
		  done(err);
		} else {
			contacts.push(contact);
            _this.saveContacts(contacts, function(err) {
            	if (err) {
            		done(err);
            	} else {
            		done(null);
            	}
            });
		}
	});	
}

Contact.findContacts = function(name, done) {
  // name is a string value like "John Smith"
  //
  // you need to load the contacts array from `data.json`
  // search the ones matching the given name
  // and return them as an array of contacts via the done callback
  // e.g. done(err, foundContacts)
  // where foundContacts is the array of contacts that matched the search
  // err is the value for the error (null if no error was encountered)
  this.loadContacts( function(contacts, err) {
  	if(err) {
  		done(err);
	} else {
		var contactsFound = _.filter(contacts, function(contact) {
			return contact.name === name;
		});
		// console.log(JSON.stringify(contactsFound));
		done(err, contactsFound);
	}
  })
}
module.exports = Contact