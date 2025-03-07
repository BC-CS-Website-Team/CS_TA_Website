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
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }], 
              [{ start: 13, end: 14 }]
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC226(A): Software Design and Implementation", 
              "9:20-10:30"
            ],
            [
              "M/W/F", 
              "CSC226(B): Software Design and Implementation", 
              "10:40-11:50"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "heggens@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/U3TH18WAC"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-scott-heggen"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Dr. Jan Pearce') {
          popupHeader.innerHTML = `<img src="/src/images/drPearce1.jpg" alt="Dr. Jan Pearce"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 13.33, end: 14 }], 
              [{ start: 14, end: 14.833 }], 
              [{ start: 13.33, end: 14 }], 
              [{ start: 14, end: 14.833 }], 
              [{ start: 13.33, end: 14 }], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "dropdown_menus(A): Data Structures",
              "9:20-10:30"
            ],
            [
              "M/W/F", 
              "dropdown_menus(B): Data Structures",
              "10:40-11:50"
            ],
            [
              "M/W/F", 
              "CSC246: Scalable Algorithms & Objects", 
              "8:00-9:10"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "pearcej@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/U6G45QE81"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jan-pearce-2"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Dr. Mario Nakazawa') {
          popupHeader.innerHTML = `<img src="/src/images/drNakazawa1.jpg" alt="Dr. Mario Nakazawa"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [], 
              [{ start: 13.5, end: 15 }], 
              [{ start: 22, end: 24 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC121: Introduction to Game Design", 
              "14:40-15:50"
            ],
            [
              "M/W/F", 
              "CSC440: Design & Analysis of Algorithm", 
              "14:40-15:50"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "nakazawam@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/UV6TL9057"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-mario-nakazawa-2"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Dr. Jasmine Jones') {
          popupHeader.innerHTML = `<img src="/src/images/drJones1.jpg" alt="Dr. Jasmine Jones"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 15, end: 17.5 }], 
              [], 
              [{ start: 15, end: 17.5 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "T/Th", 
              "CSC110: Craft of Computing", 
              "13:00-14:50"
            ],
            [
              "T/Th", 
              "CSC330: Database Systems", 
              "10:00-11:50"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "jonesj2@berea.edu", 
            [
              ["Slack", ""],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jasmine-jones"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Dr. Jacqueline "Jacci" Boggs') {
          popupHeader.innerHTML = `<img src="/src/images/drBoggs1.png" alt="Dr. Jacqueline Boggs"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 11, end: 12 }], 
              [], 
              [{ start: 11, end: 12 }], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "T/Th", 
              "CSC114: Business App & Prog(BUS)(A)", 
              "10:00-11:50"
            ],
            [
              "T/Th", 
              "CSC114: Business App & Prog(BUS)(B)", 
              "13:00-14:50"
            ],
            [
              "M/W", 
              "CSC328: Data Analytics(BUS)", 
              "12:40-14:30"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "boggsj2@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/U01BFDDRCL9"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/dr-jacqueline-jacci-boggs"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Prof. Deanna Wilborne') {
          popupHeader.innerHTML = `<img src="/src/images/profWilborne1.jpeg" alt="Prof. Deanna Wilborne"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [{ start: 9.5, end: 11.5 }], 
              [], 
              [{ start: 9.5, end: 11.5 }], 
              [], 
              [{ start: 9.5, end: 11.5 }], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([
            [
              "M/W/F", 
              "CSC246: Scalable Algorithms & Objects", 
              "8:00-9:10"
            ],
            [
              "M/W/F", 
              "CSC420: Programming Languages", 
              "9:20-10:30"
            ],
            [
              "T/Th", 
              "CSC486: Compiler Design & Impl.", 
              "8:00-9:50"
            ]
          ]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "wilborned@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/U02AJ4P07E2"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/deanna-wilborne"]
            ]
          );
          document.querySelector('.classes-section').hidden = false;
      } else if (name == 'Brian Ramsey') {
          popupHeader.innerHTML = `<img src="/src/images/brian1.png" alt="Brian Ramsey"></img>${name}`;
          popupHours.innerHTML = generateTableRow([
              [], 
              [], 
              [], 
              [], 
              [], 
              [], 
              []
          ]);
          popupClasses.innerHTML = generateCourseTabs([]);
          popupLinks.innerHTML = generateEmailAndLinks(
            "ramsayb2@berea.edu", 
            [
              ["Slack", "https://bereacs.slack.com/team/UUL38KWGN"],
              // ["Navigate", ""],
              ["Berea Profile", "https://www.berea.edu/academics/departments-programs/computer-science/faculty-staff/brian-ramsey"]
            ]
          );
          document.querySelector('.classes-section').hidden = true;
      }
      layer2.hidden = false;
    }); 
});

function generateTableRow(hoursPerDay = []) {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  let rowHTML = "<tr>";

  for (let i = 0; i < 7; i++) {
    const hours = hoursPerDay[i] || []; // Get hours for the day or default to an empty array

    // Initialize top and height variables
    let top = 0;
    let height = 0;

    // Generate grid-based time slots
    const timeSlots = hours.map(({ start, end }) => {
      if (start < 8) {
        falseStart = Math.max(start, 8);
      } else if (start > 20) {
        falseStart = 20 - (start - 20);
      } else {
        falseStart = start;
      }
      if (end > 20) {
        falseEnd = Math.min(end, 20);
      } else if (end < 8) {
        falseEnd = 8 + (8 - end);
      } else {
        falseEnd = end;
      }

      // Handle valid time range
      if (start < end) {
        top = ((falseStart - 8) / 12) * 100;  // Calculate start percentage
        height = ((falseEnd - falseStart) / 12) * 100;  // Calculate duration percentage
      }

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