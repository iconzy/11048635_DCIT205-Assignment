
function attemptLogin() {
    var studentID = document.getElementById("studentID").value;
    var pin = document.getElementById("pin").value;
    var errorMessageElement = document.getElementById("errorMessage");
  
    // Simulate backend validation
    if (studentID === "11048635" && pin === "57126") {
      // Successful login, you can redirect to another page or perform other actions
      alert("Login successful!");
    } else {
      // Display error message
      errorMessageElement.textContent = "Invalid Student ID or PIN. Please try again.";
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    // Simulated data (replace this with real data from your backend)
    const gradesData = {
      subjects: [
        { name: "Computer Organisation and Architecture", grade : 90 },
        { name: "Academic Writitng I" , grade : 85 },
        { name: "Web Design", grade : null },
        { name: "Programing I" , grade : 88 }, // Example of a repeated course
        // Add more subjects as needed
      ],
    };
  
    // Display grades overview
    displayGradesOverview(gradesData.subjects);
  
    // Check for missing grades
    checkMissingGrades(gradesData.subjects);
  });
  
  function displayGradesOverview(subjects) {
    const gradesOverviewElement = document.getElementById("gradesOverview");
    const uniqueCourses = new Set();
  
    subjects.forEach((subject) => {
      const gradeText = subject.grade !== null ? `${subject.grade}%` : "N/A";
      const subjectName = subject.name.toLowerCase(); // Convert to lowercase for case-insensitivity
  
      // Check if the course name already exists
      if (!uniqueCourses.has(subjectName)) {
        uniqueCourses.add(subjectName);
  
        const subjectElement = document.createElement("p");
        subjectElement.textContent = `${subject.name}: ${gradeText}`;
        gradesOverviewElement.appendChild(subjectElement);
      }
    });
  }
  
  function checkMissingGrades(subjects) {
    const missingGradesListElement = document.getElementById("missingGradesList");
    const missingGradesAlertElement = document.getElementById("missingGradesAlert");
    const uniqueMissingCourses = new Set();
  
    subjects.forEach((subject) => {
      if (subject.grade === null) {
        const subjectName = subject.name.toLowerCase(); // Convert to lowercase for case-insensitivity
  
        // Check if the missing course name already exists
        if (!uniqueMissingCourses.has(subjectName)) {
          uniqueMissingCourses.add(subjectName);
  
          const missingGradeItem = document.createElement("li");
          missingGradeItem.textContent = subject.name;
          missingGradesListElement.appendChild(missingGradeItem);
        }
      }
    });
  
    // Display alert if there are missing grades
    if (missingGradesListElement.children.length > 0) {
      missingGradesAlertElement.classList.remove("hidden");
    }
  }
  