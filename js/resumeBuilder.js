/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName, formattedRole;

 formattedName = HTMLheaderName.replace("%data%", "Tanat Iempreedee");
 formattedRole = HTMLheaderRole.replace("%data%", "IT Business Analyst");

 $("#header").append(formattedName).append(formattedRole);
 //$("#header").prepend(formattedRole).prepend(formattedName);