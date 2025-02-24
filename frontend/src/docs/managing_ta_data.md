# Managing the CS TA Website Data

This guide explains how to manage and update the CS TA Website data, particularly for new TAs taking over the website maintenance.

## Table of Contents
- [Overview](#overview)
- [File Structure](#file-structure)
- [Updating TA Information](#updating-ta-information)
- [Adding New TAs](#adding-new-tas)
- [Managing Images](#managing-images)
- [CSV Format Details](#csv-format-details)
- [Common Tasks](#common-tasks)
- [Managing Programmer Data](#managing-programmer-data)
- [Managing Robotics Team Data](#managing-robotics-team-data)
- [Managing Makerspace Team Data](#managing-makerspace-team-data)
- [Troubleshooting](#troubleshooting)

## Overview

The website uses a CSV-based system for managing TA information, making it easy to update without directly editing code. The main data file is located at:
```
frontend/src/data/team.csv
```

## File Structure

Important files and directories:
- `frontend/src/data/team.csv` - Main TA data file
- `frontend/src/assets/images/` - TA profile images
- `frontend/src/pages/team/MeetTAs.jsx` - Main TA page component
- `frontend/src/utils/csvLoader.js` - Utility for loading TA data

## Updating TA Information

### Using Excel/Google Sheets
1. Open `team.csv` in your preferred spreadsheet software
2. Make your changes
3. Save/export as CSV, ensuring to maintain the same filename and location
4. **Important**: Preserve the exact format of JSON fields (hours, courses, links)

### CSV Fields Explained
- `id`: Unique identifier (lowercase, hyphen-separated)
- `name`: Display name
- `image`: Image filename (must exist in assets/images/)
- `email`: Berea email address
- `role`: Either 'Lead' or 'TA'
- `hours_json`: Office hours in JSON format
- `courses_json`: Course information in JSON format
- `links_json`: Social/professional links in JSON format

## Adding New TAs

1. Add TA's image to `frontend/src/assets/images/`
2. Add a new row to `team.csv` with the following format:
```csv
john-doe,John Doe,JohnDoe.jpg,doej@berea.edu,TA,"[[],[],[{""start"":13,""end"":15}],[],[],[],[]]","[[""M/W/F"",""CSC###: Course Title"",""13:00-15:00""]]","[[""Slack"",""""]]"
```

### Hours Format Explained
The hours field uses a 7-element array representing days (Sunday to Saturday):
```json
[
  [], // Sunday
  [], // Monday
  [{"start": 13, "end": 15}], // Tuesday (1-3 PM)
  [], // Wednesday
  [], // Thursday
  [], // Friday
  []  // Saturday
]
```

### Courses Format
```json
[
  ["M/W/F", "CSC101: Intro to Programming", "10:00-12:00"]
]
```

## Managing Images

1. Image Requirements:
   - Professional headshot
   - Square aspect ratio recommended
   - Save in assets/images/
   - Supported formats: jpg, jpeg, png
   - Use consistent naming: FirstLast.jpg

2. Image Filename Tips:
   - Use the exact filename in the CSV
   - Case-sensitive (e.g., "Nicholas.jpg" not "nicholas.jpg")
   - Avoid spaces in filenames

## Common Tasks

### Semester Transition
1. Archive old TA data if needed
2. Update or remove graduated TAs
3. Add new TAs
4. Update office hours and courses
5. Verify all images are current

### Updating Office Hours
1. Locate the TA's row in the CSV
2. Update the `hours_json` field
3. Use 24-hour format for times
4. Example: `[[],[{"start":10,"end":12}],[],[],[],[],[]]` (Monday 10 AM-12 PM)

### Adding Social Links
1. Find the TA's row
2. Update the `links_json` field
3. Format: `[["Platform","URL"]]`
4. Example: `[["LinkedIn","https://linkedin.com/in/username"],["GitHub","https://github.com/username"]]`

## Managing Programmer Data

The programmer data is managed similarly to TA data, using a CSV-based system.

### Programmer CSV Structure
The programmer data is stored in `frontend/src/data/programmers.csv` with the following fields:
- `id`: Unique identifier (lowercase, hyphen-separated)
- `name`: Display name
- `image`: Image filename (must exist in assets/images/)
- `email`: Berea email address
- `role`: Usually 'Lead' or 'Programmer'
- `projects_json`: JSON array of projects
- `skills_json`: JSON array of programming skills
- `links_json`: JSON array of social/professional links

### Projects Format
```json
[
  {
    "name": "Project Name",
    "description": "Project Description",
    "tech": ["Technology1", "Technology2"]
  }
]
```

### Skills Format
```json
["Skill1", "Skill2", "Skill3"]
```

### Adding New Programmers
1. Add programmer's image to `frontend/src/assets/images/`
2. Add a new row to `programmers.csv` with the following format:
```csv
john-doe,John Doe,JohnDoe.jpg,doej@berea.edu,Programmer,"[{""name"":""Project1"",""description"":""Description"",""tech"":[""Tech1"",""Tech2""]}]","[""Skill1"",""Skill2""]","[[""GitHub"",""url""]]"
```

### Common Tasks for Programmers

#### Adding a New Project
1. Locate the programmer's row in the CSV
2. Update the `projects_json` field
3. Format: `[{"name":"Name","description":"Desc","tech":["Tech1","Tech2"]}]`

#### Updating Skills
1. Find the programmer's row
2. Update the `skills_json` field
3. Format: `["Skill1","Skill2","Skill3"]`

#### Adding Social Links
1. Locate the programmer's row
2. Update the `links_json` field
3. Format: `[["Platform","URL"]]`
4. Example: `[["GitHub","https://github.com/username"],["Portfolio","https://portfolio.com"]]`

## Managing Robotics Team Data

The robotics team data is stored in a CSV format similar to other teams.

### Robotics CSV Structure
The robotics data is stored in `frontend/src/data/robotics.csv` with the following fields:
- `id`: Unique identifier (lowercase, hyphen-separated)
- `name`: Display name
- `image`: Image filename (must exist in assets/images/)
- `email`: Berea email address
- `role`: Usually 'Lead' or 'Member'
- `projects_json`: JSON array of robotics projects
- `skills_json`: JSON array of technical skills
- `links_json`: JSON array of social/professional links

### Projects Format
```json
[
  {
    "name": "Project Name",
    "description": "Project Description",
    "tech": ["Technology1", "Technology2"]
  }
]
```

### Adding New Robotics Team Members
1. Add member's image to `frontend/src/assets/images/`
2. Add a new row to `robotics.csv` with the following format:
```csv
john-doe,John Doe,JohnDoe.jpg,doej@berea.edu,Member,"[{""name"":""Robot Project"",""description"":""Description"",""tech"":[""ROS"",""Python""]}]","[""Robotics"",""Python""]","[[""GitHub"",""url""]]"
```

## Managing Makerspace Team Data

The makerspace team has unique fields related to equipment expertise and certifications.

### Makerspace CSV Structure
The makerspace data is stored in `frontend/src/data/makerspace.csv` with the following fields:
- `id`: Unique identifier
- `name`: Display name
- `image`: Image filename
- `email`: Berea email address
- `role`: Usually 'Lead' or 'TA'
- `equipment_json`: JSON array of equipment expertise
- `certifications_json`: JSON array of certifications
- `hours_json`: JSON array of office hours
- `links_json`: JSON array of social/professional links

### Equipment Format
```json
[
  {
    "name": "Equipment Name",
    "expertise": "Expert|Advanced|Intermediate"
  }
]
```

### Adding New Makerspace TAs
1. Add TA's image to `frontend/src/assets/images/`
2. Add a new row to `makerspace.csv` with the following format:
```csv
jane-doe,Jane Doe,JaneDoe.jpg,doej@berea.edu,TA,"[{""name"":""3D Printer"",""expertise"":""Expert""}]","[""Safety Cert""]","[[],[{""start"":13,""end"":15}],[],[],[],[],[]]","[[""Slack"",""""]]"
```

### Common Tasks for Makerspace TAs

#### Updating Equipment Expertise
1. Find the TA's row in the CSV
2. Update the `equipment_json` field
3. Format: `[{"name":"Equipment","expertise":"Level"}]`
4. Expertise levels: "Expert", "Advanced", "Intermediate"

#### Adding Certifications
1. Locate the TA's row
2. Update the `certifications_json` field
3. Format: `["Cert1","Cert2"]`

## Troubleshooting

### Common Issues
1. **CSV Not Loading**
   - Check file permissions
   - Verify CSV format is correct
   - Look for missing commas or quotes

2. **Images Not Displaying**
   - Verify image exists in assets/images/
   - Check filename case sensitivity
   - Ensure image format is supported

3. **JSON Parse Errors**
   - Check for proper JSON formatting in hours/courses/links fields
   - Verify all quotes are properly escaped
   - Use double quotes for JSON strings

### Getting Help
- Review the React component code in `MeetTAs.jsx`
- Check the CSV loader utility in `csvLoader.js`
- Consult previous TA website maintainers
- Reference this documentation

## Best Practices

1. Always backup the CSV before making major changes
2. Test changes locally before deploying
3. Keep image files optimized and properly named
4. Maintain consistent formatting in the CSV
5. Document any custom modifications you make

Remember: The goal is to keep the website easily maintainable for future TAs. When in doubt, err on the side of clarity and documentation.
