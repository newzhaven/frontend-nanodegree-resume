/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Tanat Iempreedee",
	"role": "IT Business Analyst",
	"contacts": {
		"mobile": "+66 81 9399369",
		"email": "tanat.newz@gmail.com",
		"github": "newzhaven",
		"twitter": "@tanat",
		"location": "Bangkok"
	},
	"welcomeMessage": "Welcome!",
	"skills": [
		"Analysis", "Java", "SQL"
	],
	"bioPic": "images/fry.jpg"
};
var education = {
	"schools": [{
		"name": "Thammasat University",
		"location": "Bangkok",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2000,
		"url": "http://example.com"
	}, {
		"name": "Bodindecha 2",
		"location": "Bangkok",
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
		"title": "Basic Statistics",
		"school": "Udacity",
		"dates": 2016,
		"url": "http://example.com"
	}]
};

var work = {
	"jobs": [{
		"employer": "Ignify",
		"title": "Business Analyst",
		"location": "Bangkok",
		"dates": "Oct 2015 - Jun 2016",
		"description": "MS Dynamics AX"
	}, {
		"employer": "GoPomelo",
		"title": "Transformation Project Lead",
		"location": "Bangkok",
		"dates": "Oct 2014 - Mar 2015",
		"description": "Google Apps for Work"
	}, {
		"employer": "Brightstar",
		"title": "IT Business Analyst",
		"location": "Bangkok",
		"dates": "Jan 2012 - Oct 2014",
		"description": "Supply Chain Management systems"
	}]
};
var project = {
	"projects": [{
		"title": "DTAC",
		"dates": "2015",
		"description": "Serialized SCM",
		"images": []
	}, {
		"title": "EWS",
		"dates": "2015",
		"description": "Google Apps Deployment",
		"images": []
	}]
};



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

// for(i in work.jobs) {
// 	//work.jobs[i]
// 	$("#workExperience").append(HTMLworkStart);
// 	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
// 	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
// 	$(".work-entry:last").append(formattedEmployer + formattedTitle);
// }

/* Recommendation for using for-in
myObj = {'firstName':'Ada','lastName':'Lovelace'};
for (var key in myObj) {
    if (myObj.hasOwnProperty(key)) {
        console.log(myObj[key]);
    }
}
*/