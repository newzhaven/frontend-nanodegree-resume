/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Tanat Iempreedee",
	"role" : "IT Business Analyst",
	"contact" : "tanat.newz@gmail.com",
	"pic" : "images/fry.jpg",
	"welcomeMsg" : "Welcome!",
	"skills" : [
		"Requirement Analysis","Java","SQL"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLemail.replace("%data%", bio.contact);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);



//Rendering Name and Role
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedContact);
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
for(i = 0; i < bio.skills.length; i++) {
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
	$("#header").append(formattedSkill);
}

// from helper.js 
/*
HTMLcontactGeneric
HTMLmobile
HTMLemail
HTMLtwitter
HTMLgithub
HTMLblog
HTMLlocation

HTMLbioPic
HTMLwelcomeMsg
HTMLskillsStart
HTMLskills
*/