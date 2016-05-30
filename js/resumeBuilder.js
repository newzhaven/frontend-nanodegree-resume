/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Tanat Iempreedee",
	"role": "IT Business Analyst",
	"contacts": {
		"mobile": "+66 555-5555",
		"email": "tanat.newz@gmail.com",
		"github": "newzhaven",
		"twitter": "@tanat",
		"location": "Huai Khwang, Bangkok"
	},
	"welcomeMessage": "Welcome!",
	"skills": [
		"Requirement Analysis", "Java", "SQL", "HTML", "Javascript"
	],
	"bioPic": "images/fry.jpg"
};
var education = {
	"schools": [{
		"name": "Thammasat University",
		"location": "Thammasat University - Rangsit Campus",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2000,
		"url": "http://example.com"
	}, {
		"name": "Bodindecha 2",
		"location": "333 Nawamin, Khlong Kum, Bueng Kum, Bangkok 10230, Thailand",
		"degree": "High School",
		"major": ["Math", "Science"],
		"dates": 1996,
		"url": "http://example.com"
	}],
	"onlineCourses": [{
		"title": "Javascript Basic",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://www.udacity.com/course/ud804"
	}, {
		"title": "Intro to Statistics",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://example.com"
	}]
};

var work = {
	"jobs": [{
		"employer": "Hitachi Solutions - Ignify",
		"title": "Business Analyst",
		"location": "Chitlom, Bangkok",
		"dates": "Oct 2015 - Jun 2016",
		"description": 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dignissim purus. \
			Mauris cursus dui non sodales mattis. Aliquam erat volutpat. Aliquam felis lacus, \
			aliquam vitae lorem a, condimentum laoreet tellus. Vestibulum ut mollis metus. \
			Nullam consectetur lorem vel pulvinar facilisis. Aenean tincidunt elementum tortor. \
			Sed quis eros vel dui efficitur ullamcorper. Quisque lectus libero, aliquet et ex vitae, \
			mattis sollicitudin ante. Sed id sollicitudin urna, sed interdum ex."
	}, {
		"employer": "GoPomelo",
		"title": "Transformation Project Lead",
		"location": "Ploenchit, Bangkok",
		"dates": "Oct 2014 - Mar 2015",
		"description": 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dignissim purus. \
			Mauris cursus dui non sodales mattis. Aliquam erat volutpat. Aliquam felis lacus, \
			aliquam vitae lorem a, condimentum laoreet tellus. Vestibulum ut mollis metus. \
			Nullam consectetur lorem vel pulvinar facilisis. Aenean tincidunt elementum tortor. \
			Sed quis eros vel dui efficitur ullamcorper. Quisque lectus libero, aliquet et ex vitae, \
			mattis sollicitudin ante. Sed id sollicitudin urna, sed interdum ex."
	}, {
		"employer": "Brightstar",
		"title": "IT Business Analyst",
		"location": "Chamchuri Square, Bangkok",
		"dates": "Jan 2012 - Oct 2014",
		"description": 
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dignissim purus. \
			Mauris cursus dui non sodales mattis. Aliquam erat volutpat. Aliquam felis lacus, \
			aliquam vitae lorem a, condimentum laoreet tellus. Vestibulum ut mollis metus. \
			Nullam consectetur lorem vel pulvinar facilisis. Aenean tincidunt elementum tortor. \
			Sed quis eros vel dui efficitur ullamcorper. Quisque lectus libero, aliquet et ex vitae, \
			mattis sollicitudin ante. Sed id sollicitudin urna, sed interdum ex."
	}]
};
var projects = {
	"projects": [{
		"title": "DTAC",
		"dates": "Oct 2015 - Mar 2016",
		"description": "Serialized SCM - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dignissim purus.",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	}, {
		"title": "EWS",
		"dates": "2015",
		"description": "Google Apps Deployment - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dignissim purus.",
		"images": ["images/197x148.gif", "images/197x148.gif"]
	}]
};

projects.display = function() {
	this.projects.forEach(function(p) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', p.title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', p.dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', p.description);

		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);

		p.images.forEach(function(img) {
			var formattedProjectImage = HTMLprojectImage.replace('%data%', img);
			$('.project-entry:last').append(formattedProjectImage)
		});
	});
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContacts = {
	"mobile": HTMLmobile.replace("%data%", bio.contacts.mobile),
	"email": HTMLemail.replace("%data%", bio.contacts.email),
	"github": HTMLgithub.replace("%data%", bio.contacts.github),
	"twitter": HTMLtwitter.replace("%data%", bio.contacts.twitter),
	"location": HTMLlocation.replace("%data%", bio.contacts.location)
};
//var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



//Rendering Name and Role
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedContacts.mobile);
$("#topContacts").append(formattedContacts.email);
$("#topContacts").append(formattedContacts.github);
$("#topContacts").append(formattedContacts.twitter);
$("#topContacts").append(formattedContacts.location);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

// Displaying skilss
if(bio.skills != null && bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i])
	 	$("#skills").append(formattedSkill);
	}
}
function displayWork() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);

		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);

	});
}

displayWork();
projects.display();

// Display map
$('#mapDiv').append(googleMap);

/* Internationalization Quiz
$('#main').append(internationalizeButton);
function inName(name) {
	var names = name.trim().split(' ');
	var firstName = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lastName = names[1].toUpperCase();
	return firstName + ' ' + lastName;
}*/
