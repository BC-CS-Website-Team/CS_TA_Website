const iconButton = document.querySelector('.icon-button');
const layer2 = document.querySelector('.layer2');
const photoCards = document.querySelectorAll('.photo-card');
const popupHeader = document.querySelector('.popup-content');
const popupHours = document.querySelector('.weekly-hours');
const popupClasses = document.querySelector('.popup-classes');
const popupLinks = document.querySelector('.popup-links');

iconButton.addEventListener('click', () => {
  layer2.hidden = true;
});

// Add event listeners to all photo cards to reveal layer2 and display the name
photoCards.forEach(card => {
  card.addEventListener('click', () => {
    const name = card.querySelector('h3').textContent; // Get the h3 text content
    if (name == 'Nicholas Hamilton') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Nicholas.jpg" alt="Nicholas Hamilton"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "hamiltonn@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Bishal Timalsina') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Bishal.JPG" alt="Bishal Timalsina"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "bishal@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Joseph Crubaugh') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/CrubaughD.jpg" alt="Joseph Crubaugh"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "crubaughj@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Mercy Eze') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Mercy-Eze.jpg" alt="Mercy Eze"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "eze@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Arbjosa') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Arbjosa-Halilaj.jpeg" alt="Arbjosa"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "arbjosa@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Bryanna Erickson') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Bryanna-Erickson.jpeg" alt="Bryanna Erickson"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "ericksonb@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'David Olorunpoju-Essang') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/David-Olorunpoju-Ess.png" alt="David Olorunpoju-Essang"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "olorunpoju@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Moise') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Profile.jpg" alt="Moise"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "moise@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Ali Ramazani') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Mohammad-Ali-Ramazan.jpg" alt="Ali Ramazani"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "ramazani@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Mahmoud') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Maumoud.jpg" alt="Mahmoud"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "mahmoud@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Tojo') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Tojo.jpg" alt="Tojo"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "tojo@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'America') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/America.jpg" alt="America"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "america@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Berhane') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Berhane.png" alt="Berhane"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "berhane@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'John Cox') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/John.png" alt="John Cox"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "johncox@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;

    } else if (name == 'Gagan Phuyal') {
      popupHeader.innerHTML = `<img class="staff-image" src="../../images/Gagan.jpg" alt="Gagan Phuyal"></img>${name}`;
      popupHours.innerHTML = generateTableRow([
        [],
        [{ start: 10, end: 12 },{ start: 12, end: 14 }],
        [],
        [],
        [],
        [],
        []
      ]);
      popupClasses.innerHTML = generateCourseTabs([
        ["M/W/F", "CSC###: Course Title", "10:00-12:00"]
      ]);
      popupLinks.innerHTML = generateEmailAndLinks(
        "gagan@berea.edu",
        [
          ["Slack", ""],
          ["LinkedIn", ""]
        ]
      );
      document.querySelector('.classes-section').hidden = false;
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