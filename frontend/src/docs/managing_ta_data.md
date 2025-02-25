# Managing the CS TA Website Data

This guide explains how to manage and update the CS TA Website data, particularly for new TAs taking over the website maintenance.

## Table of Contents
- [Overview](#overview)
- [File Structure](#file-structure)
- [Managing Different Teams](#managing-different-teams)
  - [Teaching Assistants](#teaching-assistants)
  - [Programmers](#programmers)
  - [Robotics Team](#robotics-team)
  - [Makerspace Team](#makerspace-team)
  - [Faculty & Staff](#faculty--staff)
- [Managing Images](#managing-images)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## Overview

The website uses a CSV-based system for managing all team information, making it easy to update without directly editing code. The main data files are located in:
```
frontend/src/data/
```

## File Structure

Important files and directories:
- `frontend/src/data/` - Contains all CSV data files:
  - `team.csv` - Teaching Assistants data
  - `programmers.csv` - Student Programmers data
  - `robotics.csv` - Robotics Team data
  - `makerspace.csv` - Makerspace Team data
  - `faculty.csv` - Faculty & Staff data
- `frontend/src/assets/images/` - Profile images for all team members
- `frontend/src/utils/` - CSV loader utilities for each team
- `frontend/src/pages/team/` - Team display components

## Managing Different Teams

### Teaching Assistants (team.csv)
Basic fields:
- `id`: Unique identifier (lowercase, hyphen-separated)
- `name`: Display name
- `image`: Image filename (must exist in assets/images/)
- `email`: Berea email address
- `role`: Either 'Lead' or 'TA'
- `hours_json`: Office hours in JSON format
- `courses_json`: Course information in JSON format
- `links_json`: Social/professional links in JSON format

### Programmers (programmers.csv)
Basic fields:
- `id`: Unique identifier
- `name`: Display name
- `image`: Image filename
- `email`: Berea email address
- `role`: Role description
- `hours_json`: Office hours (if applicable)
- `links_json`: Project/portfolio links

### Robotics Team (robotics.csv)
Basic fields:
- `id`: Unique identifier
- `name`: Display name
- `image`: Image filename
- `email`: Berea email address
- `role`: Team role

### Makerspace Team (makerspace.csv)
Basic fields:
- `id`: Unique identifier
- `name`: Display name
- `image`: Image filename
- `email`: Berea email address
- `role`: Team role
- `hours_json`: Office hours (if applicable)

### Faculty & Staff (faculty.csv)
Basic fields:
- `id`: Unique identifier
- `name`: Display name
- `image`: Image filename
- `email`: Berea email address
- `role`: Academic role (e.g., Professor, Staff)

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

### Adding a New Team Member
1. Add their image to `frontend/src/assets/images/`
2. Add a new row to the appropriate CSV file
3. Fill in the required basic fields
4. Add any team-specific fields if applicable

### Semester Transition
1. Archive old data if needed
2. Update or remove graduated students
3. Add new team members
4. Update office hours and courses where applicable
5. Verify all images are current

### Updating Hours (where applicable)
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

## Troubleshooting

### Common Issues
1. **Image Not Loading**
   - Check if the image file exists in assets/images/
   - Verify the filename matches exactly (case-sensitive)
   - Ensure the image format is supported

2. **CSV Parse Errors**
   - Verify the CSV has all required columns
   - Check for missing commas or extra spaces
   - Ensure JSON fields are properly formatted

3. **Data Not Updating**
   - Clear your browser cache
   - Verify the CSV file was saved properly
   - Check the development server is running

### Getting Help
If you encounter issues not covered here, contact:
- The current website maintainer
- CS Department technical support
- Previous website maintainers
