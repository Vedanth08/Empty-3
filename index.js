var profile_intro_fieldElement = document.getElementById("profile-intro-field");

var about_horizontal_lineElement = document.getElementById("about-horizontal-line");

var abouttextElement = document.getElementById("selfpromotion-abouttext");


var experience_fieldElement = document.getElementById("experience-field");

var experience_horizontal_lineElement = document.getElementById("experience-horizontal-line");

var experiencetextElement = document.getElementById("selfpromotion-experiencetext");


var project_sectionfieldElement = document.getElementById("project-sectionfield");

var projects_horizontal_lineElement = document.getElementById("projects-horizontal-line");

var projectstextElement = document.getElementById("selfpromotion-projectstext");




// On mouseover the horizonatal line will be increased

profile_intro_fieldElement.onmouseover = function(){
    let value = 100;
    about_horizontal_lineElement.style.width = value+"px";
    abouttextElement.style.color = "black";
};

profile_intro_fieldElement.onmouseout = function(){
    let value = 50;
    about_horizontal_lineElement.style.width = value+"px";
    abouttextElement.style.color = "#64675f";
};


experience_fieldElement.onmouseover = function(){
    let value = 100;
    experience_horizontal_lineElement.style.width = value+"px";
    experiencetextElement.style.color = "black";
}

experience_fieldElement.onmouseout = function(){
    let value = 50;
    experience_horizontal_lineElement.style.width = value+"px";
    experiencetextElement.style.color = "#64675f";
}


project_sectionfieldElement.onmouseover = function(){
    let value = 100;
    projects_horizontal_lineElement.style.width = value+"px";
    projectstextElement.style.color = "black";
}

project_sectionfieldElement.onmouseout = function(){
    let value = 50;
    projects_horizontal_lineElement.style.width = value+"px";
    projectstextElement.style.color = "#64675f";
}
