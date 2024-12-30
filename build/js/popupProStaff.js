const iconButton = document.querySelector('.icon-button');
const layer2 = document.querySelector('.layer2');
const photoCards = document.querySelectorAll('.photo-card');
const popupHeader = document.querySelector('.popup-content');
const popupHours = document.querySelector('.weekly-hours');
const popupClasses = document.querySelector('.popup-classes');
const popupLinks = document.querySelector('.popup-links');


// Add an event listener to the button to hide layer2
iconButton.addEventListener('click', () => {
    layer2.hidden = true;
});

// Add event listeners to all photo cards to reveal layer2 and display the name
photoCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').textContent; // Get the h3 text content
        if (name == 'Dr. Scott Heggen') {
          popupHeader.innerHTML = `<img class="staff-image" src="/src/images/drHeggen1.jpeg" alt="Dr. Heggen"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [{ start: 8.5, end: 11.5 }], 
              [{ start: 13, end: 16 }], 
              [], 
              [{ start: 10, end: 12 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC330: Human-Centered Computing", 
              "12:00-15:00"
            ],
            [
              "T/Th", 
              "CSC420: History of Computers", 
              "13:00-15:00"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "heggens@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-scott-heggen"]
            ]
          );
      } else if (name == 'Dr. Jan Pearce') {
          popupHeader.innerHTML = `<img src="/src/images/drPearce1.jpg" alt="Dr. Jan Pearce"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 9, end: 11.5 }], 
              [], 
              [{ start: 13, end: 15 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC250: Data Structures", 
              "10:00-12:00"
            ],
            [
              "T/Th", 
              "CSC340: Software Engineering", 
              "14:00-16:00"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "pearcej@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jan-pearce-2"]
            ]
          );
      } else if (name == 'Dr. Mario Nakazawa') {
          popupHeader.innerHTML = `<img src="/src/images/drNakazawa1.jpg" alt="Dr. Mario Nakazawa"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 9.5, end: 11 }], 
              [], 
              [{ start: 14, end: 16 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC220: Introduction to Algorithms", 
              "09:00-11:00"
            ],
            [
              "T/Th", 
              "CSC310: Artificial Intelligence", 
              "13:00-15:00"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "nakazawam@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-mario-nakazawa-2"]
            ]
          );
      } else if (name == 'Dr. Jasmine Jones') {
          popupHeader.innerHTML = `<img src="/src/images/drJones1.jpg" alt="Dr. Jasmine Jones"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [], 
              [{ start: 10, end: 12 }], 
              [{ start: 13, end: 15.5 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC120: Introduction to Programming", 
              "08:30-10:00"
            ],
            [
              "T/Th", 
              "CSC410: Machine Learning", 
              "14:30-16:30"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "jonesj2@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jasmine-jones"]
            ]
          );
      } else if (name == 'Dr. Jacqueline "Jacci" Boggs') {
          popupHeader.innerHTML = `<img src="/src/images/drBoggs1.png" alt="Dr. Jacqueline Boggs"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [], 
              [], 
              [{ start: 9, end: 12 }], 
              [{ start: 13.5, end: 16.5 }], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC300: Operating Systems", 
              "11:00-13:00"
            ],
            [
              "T/Th", 
              "CSC420: Advanced Databases", 
              "10:00-12:00"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "boggsj2@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jacqueline-jacci-boggs"]
            ]
          );
      } else if (name == 'Prof. Deanna Wilborne') {
          popupHeader.innerHTML = `<img src="/src/images/profWilborne1.jpeg" alt="Prof. Deanna Wilborne"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 10, end: 12.5 }], 
              [], 
              [{ start: 14, end: 16 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC150: Introduction to Web Development", 
              "09:30-11:30"],
            [
              "T/Th", 
              "CSC210: Computer Graphics", 
              "12:30-14:30"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "wilborned@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/deanna-wilborne"]
            ]
          );
      } else if (name == 'Brian Ramsey') {
          popupHeader.innerHTML = `<img src="/src/images/brian1.png" alt="Brian Ramsey"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [{ start: 8, end: 12 }], 
              [{ start: 14, end: 18 }], 
              [], 
              [{ start: 10, end: 14 }], 
              [{ start: 9, end: 11.5 }], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC110: Fundamentals of Computing", 
              "08:00-09:30"
            ],
            [
              "T/Th", 
              "CSC320: Cybersecurity", 
              "15:00-17:00"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "ramsayb2@berea.edu", 
            [
              ["Slack", ""],
              ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/brian-ramsey"]
            ]
          );
      }
      layer2.hidden = false;
    }); 
});

function generateTableRow(hoursPerDay = []) {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  let rowHTML = "<tr>";

  for (let i = 0; i < 7; i++) {
    const hours = hoursPerDay[i] || []; // Get hours for the day or default to an empty array

    // Generate grid-based time slots
    const timeSlots = hours.map(({ start, end }) => {
      const top = ((start - 8) / 12) * 100; // Calculate start percentage (6:00 is the base start)
      const height = ((end - start) / 12) * 100; // Calculate duration percentage
      const formattedStart = formatTime(start);
      const formattedEnd = formatTime(end);
      return `<div class="time-slot" style="top: ${top}%; height: ${height}%;">${formattedStart}-${formattedEnd}</div>`;
    }).join("");

    // Add the grid container for the day
    const grid = `<div class="time-slot-grid">${timeSlots}</div>`;
    rowHTML += `<td id="${days[i]}">${grid}</td>`;
  }

  rowHTML += "</tr>";
  return rowHTML;
}

// Helper function to format fractional hours into "HH:MM"
function formatTime(decimalTime) {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime - hours) * 60);
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

function generateCourseTabs(scheduleArray) {
  // scheduleArray should be an array of arrays like:
  // [["M/W/F", "CSC330: Human-Centered Computing", "12:00-15:00"], ...]

  return scheduleArray.map(schedule => {
      const [days, courseTitle, time] = schedule;
      return `<div class="course-tab">\t- ${days} | ${courseTitle} | ${time}</div>`;
  }).join('');
}

function generateEmailAndLinks(email, linksArray) {
  // email: a string representing the email address
  // linksArray: an array of arrays like [["Link1", "https://example.com/link1"], ["Link2", "https://example.com/link2"]]

  let result = `${email}\n`;
  result += linksArray.map(link => {
      const [name, url] = link;
      return `- <a href="${url}" target="_blank">${name}</a>`;
  }).join('\n');

  return result;
}