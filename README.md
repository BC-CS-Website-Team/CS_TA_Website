# CS TA Website Project

## Overview
This project is a collaborative web development effort to create a comprehensive website for our Computer Science Teaching Assistant (TA) program. It serves as both a learning experience for TAs of various skill levels and a practical tool for showcasing our program.

## Features
- Home page with program overview
- Committee pages (Tech Career Dev, Creative Space, Stars)
- Clubs information page (NSBE, Code Together, Girls Who Code)
- TA profiles page
- Contributions page for program impact
- Alumni showcase
- Evening Lab information and schedules
- Responsive design for mobile and desktop viewing

## Project Structure
```
.
├── assets/
├── src/
│   ├── components/
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── navigation.html
│   ├── css/
│   │   ├── main.css
│   │   └── responsive.css
│   ├── images/
│   ├── js/
│   │   ├── main.js
│   │   └── navigation.js
│   └── pages/
│       ├── evening-lab.html
│       ├── alumni.html
│       └── ...
├── scripts/
│   └── server.py
├── tests/
├── index.html
└── README.md
```

## Getting Started

### Prerequisites
- Git
- Python 3.x
- A modern web browser
- Text editor (e.g., VSCode, etc.)

### Setup
1. Clone the repository:
   ```
   git clone https://github.com/BC-CS-Website-Team/CS_TA_Website.git
   ```
2. Navigate to the project directory:
   ```
   cd CS_TA_Website
   ```

### Running the Site
We provide two options for running the site locally:

#### Option 1: Using our Custom Server (Recommended)
1. From the project root, run:
   ```bash
   python scripts/server.py
   ```
2. You'll see a clickable link in your terminal to access the site at `http://localhost:8000`
3. The server will provide timestamped logs of all requests
4. Press Ctrl+C to stop the server

#### Option 2: Basic Python Server
1. From the project root, run:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser

#### Option 3: Direct File Access
You can also open `index.html` directly in your web browser, but some features may not work correctly without a server.

#### Development Workflow
When making changes:
1. Start the server using Option 1 or 2 above
2. Edit the HTML, CSS, or JavaScript files in your text editor
3. Save the changes
4. Refresh the page in your browser to see the updates

For VSCode users, you can alternatively use the "Live Server" extension.

## Development Workflow
1. Create a new branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```
2. Make your changes in the appropriate files
3. Test your changes locally using one of the server options above
4. Commit your changes:
   ```
   git add .
   git commit -m "Add a descriptive commit message"
   ```
5. Push your branch to GitHub:
   ```
   git push origin feature/your-feature-name
   ```
6. Create a Pull Request on GitHub for review

## Contributing
We welcome contributions from all team members, regardless of experience level. Please read our CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## Learning Resources
- [HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Git and GitHub for Beginners](https://www.freecodecamp.org/news/git-and-github-for-beginners/)

## Project Management
We use GitHub Projects for task management. Check the [project board](https://github.com/BC-CS-Website-Team/CS_TA_Website/projects) for current tasks and their status.

## Support
If you need help or have questions, please:
1. Check the existing [issues](https://github.com/BC-CS-Website-Team/CS_TA_Website/issues) for similar problems or questions
2. If your issue isn't addressed, create a new issue with a descriptive title and detailed description
3. For urgent matters, contact Nicholas Hamilton at hamiltonn@berea.edu

---

Happy coding! Remember, every contribution, no matter how small, is valuable. Let's learn and build together!