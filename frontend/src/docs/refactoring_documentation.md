# CS TA Website Refactoring Documentation

## Overview

This document details the refactoring process undertaken to convert the CS TA Website from using static JavaScript data to a more maintainable CSV-based system. The refactoring aimed to make the website easier to update without requiring direct code modifications.

## Files Created/Modified

### 1. Data Files
All static JavaScript data has been converted to CSV format:

#### Teaching Assistants
- **File**: `frontend/src/data/team.csv`
- **Purpose**: Central storage for all TA information
- **Replaces**: `teamData.js`

#### Student Programmers
- **File**: `frontend/src/data/programmers.csv`
- **Purpose**: Information about student programmers
- **Replaces**: Static programmer data

#### Robotics Team
- **File**: `frontend/src/data/robotics.csv`
- **Purpose**: Robotics team member information
- **Replaces**: Static robotics data

#### Makerspace Team
- **File**: `frontend/src/data/makerspace.csv`
- **Purpose**: Makerspace TA information
- **Replaces**: Static makerspace data

#### Faculty & Staff
- **File**: `frontend/src/data/faculty.csv`
- **Purpose**: Faculty and staff information
- **Replaces**: `facultyData.js`

### 2. Utility Files
#### CSV Loaders
- `frontend/src/utils/csvLoader.js` - Base TA data loader
- `frontend/src/utils/programmersCsvLoader.js` - Programmer data loader
- `frontend/src/utils/roboticsCsvLoader.js` - Robotics team data loader
- `frontend/src/utils/makerspaceCsvLoader.js` - Makerspace data loader
- `frontend/src/utils/facultyCsvLoader.js` - Faculty data loader

Each loader handles:
- Asynchronous CSV loading
- JSON field parsing
- Error handling
- Image path resolution

### 3. React Components
Modified components to use CSV data:
- `frontend/src/pages/team/MeetTAs.jsx`
- `frontend/src/pages/team/MeetProgrammers.jsx`
- `frontend/src/pages/team/MeetRobotics.jsx`
- `frontend/src/pages/team/MeetMakerspace.jsx`
- `frontend/src/pages/Home.jsx` (for faculty data)

Changes include:
- Async data loading
- Loading states
- Error handling
- Maintaining existing UI/UX

### 4. Documentation
- `frontend/src/docs/managing_ta_data.md` - Comprehensive guide for all team data management
- `frontend/src/docs/refactoring_documentation.md` - This file

## System Architecture

```
frontend/
├── src/
│   ├── data/
│   │   ├── team.csv           # TA data
│   │   ├── programmers.csv    # Programmer data
│   │   ├── robotics.csv       # Robotics team data
│   │   ├── makerspace.csv     # Makerspace data
│   │   └── faculty.csv        # Faculty & staff data
│   │
│   ├── utils/
│   │   ├── csvLoader.js           # Base TA loader
│   │   ├── programmersCsvLoader.js # Programmer loader
│   │   ├── roboticsCsvLoader.js    # Robotics loader
│   │   ├── makerspaceCsvLoader.js  # Makerspace loader
│   │   └── facultyCsvLoader.js     # Faculty loader
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Faculty display
│   │   └── team/
│   │       ├── MeetTAs.jsx       # TA display
│   │       ├── MeetProgrammers.jsx # Programmer display
│   │       ├── MeetRobotics.jsx  # Robotics display
│   │       └── MeetMakerspace.jsx # Makerspace display
│   │
│   └── docs/
│       ├── managing_ta_data.md   # Data management guide
│       └── refactoring_documentation.md  # This file
```

## Data Flow

1. **Data Storage**:
   ```
   CSV Files → CSV Loaders → React Components → UI Display
   ```

2. **Update Process**:
   ```
   Edit CSV → Auto-reload in development → Changes visible in UI
   ```

## CSV Structures

### Basic Fields (Common to All)
```csv
id,name,image,email,role
```

### Team-Specific Fields
- TAs: hours_json, courses_json, links_json
- Programmers: projects_json, skills_json, links_json
- Robotics: projects_json, skills_json
- Makerspace: hours_json
- Faculty: Basic fields only

## Benefits of Refactoring

1. **Simplified Data Management**
   - Easy updates via CSV files
   - No code changes needed for data updates
   - Consistent data format across teams

2. **Improved Maintainability**
   - Clear separation of data and code
   - Standardized data loading process
   - Comprehensive documentation

3. **Enhanced Reliability**
   - Built-in error handling
   - Data validation
   - Consistent image handling

4. **Future-Proofing**
   - Easy to extend for new team types
   - Simple to add new fields
   - Clear upgrade path
