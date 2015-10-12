angular.module('contactApp',[])
	.controller('contactCtrl', function(){
		var contacts = this;

		contacts.entries = [
		{fName: 'Nathan', lName: 'Vann', email: 'nathanvann89@gmail.com', phone: '9187743621'},
		{fName: 'Cat', lName: 'Thomas', email: 'misscatthomas@gmail.com', phone: '1234567894'}
		];

		contacts.heading = ['Name', 'Email', 'Phone Number'];

		contacts.addEntry= function(){
			console.log('This fired');
			contacts.entries.push(
				{
				fName:contacts.entries.fName,
				lName:contacts.entries.lName,
				email:contacts.entries.email,
				phone:contacts.entries.phone
				});
			contacts.entries.fName = "";
			contacts.entries.lName = "";
			contacts.entries.email = "";
			contacts.entries.phone = "";
		};
		contacts.removeEntry= function(index){
			contacts.entries.splice(index,1);
		};
	});