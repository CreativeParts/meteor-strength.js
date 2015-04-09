# meteor-strength.js
A meteor implementation of Strength.js

###Introduction
Strength.js provides a toggle feature for password input fields that allows the user to view or asterisk the password. It also features a strength indicator to show how secure a users password is.

The password secuirty indicator is marked on 4 scores. These are

*   Password must contain 8 characters or more
*   Password must contain 1 lowercase letter
*   Password must contain 1 uppercase letter
*   Password must contain 1 number

#### ..:: Getting Started

##### Install meteor-strength.js package

     meteor add meteor-strength.js

##### Create a password input field

You must give your password input a unique ID.

	<input id="myPassword" type="password" name="" value="">

##### Initiate meteor-strength.js

At its most basic level you can initiate the meteor-strength.js like:
					
	Template.TemplateName.rendered = function() {
			$('#myPassword').strength();
	};
					

If you want to initiate the plugin with options then you can do so like:

					
	Template.TemplateName.rendered = function() {
			$('#myPassword').strength({
			            strengthClass: 'strength',
			            strengthMeterClass: 'strength_meter',
			            strengthButtonClass: 'button_strength',
			            strengthButtonText: 'Show Password',
			            strengthButtonTextToggle: 'Hide Password'
			 });
	};
