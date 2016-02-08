  var bio = {
    name : "Son Truong",
    role : "Web Developer",
    contacts : {
      mobile: "888-888-8888",
      email: "sont85@gmail.com",
      github: "https://github.com/sont85",
      location: "San Jose, CA"
    },
    welcomeMessage: "Welcome",
    skills: ["HTML5", "jQuery", "CSS3", "Angular JS", "Node JS", "Bootstrap"],
    biopic: "images/fry.jpg",
    display: function() {
      var arrayHTML = [];
      arrayHTML.push(HTMLheaderName.replace("%data%", bio.name));
      arrayHTML.push(HTMLheaderRole.replace("%data%", bio.role));
      $("#header").prepend(arrayHTML);

      arrayHTML = [];
      arrayHTML.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
      arrayHTML.push(HTMLemail.replace("%data%", bio.contacts.email));
      arrayHTML.push(HTMLgithub.replace("%data%", bio.contacts.github));
      arrayHTML.push(HTMLlocation.replace("%data%", bio.contacts.location));
      $("#topContacts").append(arrayHTML);
      $("#footerContacts").append(arrayHTML);

      arrayHTML = [];
      arrayHTML.push(HTMLbioPic.replace("%data%", bio.biopic));
      arrayHTML.push(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
      arrayHTML.push(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        arrayHTML.push(HTMLskills.replace("%data%", skill));
      });
      $("#header").append(arrayHTML);
    }
  };

  var work = {
    jobs: [{
      employer: "Apple",
      title: 'Junior Developer',
      location: 'San Francisco, CA',
      dates: 'Aug. 2008 - Sept. 2010',
      description: 'Create amazing apps for the everyday user'
    }, {
      employer: "Google",
      title: 'Junior Developer',
      location: 'Mountain View, CA',
      dates: 'Aug. 2010 - Sept. 2014',
      description: 'Create apps that connect people'
    }],
    display: function(){
      var arrayHTML = [];
      if (work.jobs.length > 0) {
        for (var job in work.jobs) {
          arrayHTML.push(HTMLworkStart.replace("%data%", "WORK START"));
          arrayHTML.push(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
          arrayHTML.push(HTMLworkTitle.replace("%data%", work.jobs[job].title));
          arrayHTML.push(HTMLworkDates.replace("%data%", work.jobs[job].dates));
          arrayHTML.push(HTMLworkLocation.replace("%data%", work.jobs[job].location));
          arrayHTML.push(HTMLworkDescription.replace("%data%", work.jobs[job].description));
        }
        $("#workExperience").append(arrayHTML);
      }
    }
  };

  var projects = {
    project: [{
      title: 'Clarity App',
      dates: "Jan. 20015 - Jun. 2015",
      description: "Educational App",
      images: ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
      projects.project.forEach(function(project) {
        var arrayHTML = [];
        arrayHTML.push(HTMLprojectStart);
        arrayHTML.push(HTMLprojectTitle.replace("%data%", project.title));
        arrayHTML.push(HTMLprojectDates.replace("%data%", project.dates));
        arrayHTML.push(HTMLprojectDescription.replace("%data%", project.description));
        project.images.forEach(function(image) {
          arrayHTML.push(HTMLprojectImage.replace("%data%", image));
        });
        $("#projects").append(arrayHTML);
      });
    }
  };

  var education = {
    schools: [{
      name: "Solano Community College",
      location: "Fairfield, CA",
      degree: "Bachelor",
      majors: ["Computer Science", "Business"],
      dates: "Aug. 2006 - Sep. 2010",
      url: "www.scc.edu"
    }],
    onlineCourses: [{
      title: "Frontend Nanodegree",
      school: "Udacity",
      date: "Jan. 2016 - Feb. 2016",
      url: "www.udacity.com"
    }],
    display: function() {
      education.schools.forEach(function(school) {
        var arrayHTML = [];
        arrayHTML.push(HTMLschoolStart);
        arrayHTML.push(HTMLschoolName.replace("%data%", school.name));
        arrayHTML.push(HTMLschoolDegree.replace("%data%", school.degree));
        arrayHTML.push(HTMLschoolDates.replace("%data%", school.dates));
        arrayHTML.push(HTMLschoolLocation.replace("%data%", school.location));
        school.majors.forEach(function(major) {
          arrayHTML.push(HTMLschoolMajor.replace("%data%", major));
        });
        $("#education").append(arrayHTML);
      });

      education.onlineCourses.forEach(function(course) {
        var arrayHTML = [];
        arrayHTML.push(HTMLonlineClasses);
        arrayHTML.push(HTMLonlineTitle.replace("%data%", course.title));
        arrayHTML.push(HTMLonlineSchool.replace("%data%", course.school));
        arrayHTML.push(HTMLonlineDates.replace("%data%", course.date));
        arrayHTML.push(HTMLonlineURL.replace("%data%", course.url));
        $("#education").append(arrayHTML);
      });
    }
  };

  var mapping = {
    display: function() {
      $("#mapDiv").append(googleMap);
    }
  };


  $(document).ready(function() {
    bio.display();
    work.display();
    projects.display();
    education.display();
    mapping.display();
  });
