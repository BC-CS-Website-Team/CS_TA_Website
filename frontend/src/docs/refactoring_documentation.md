# CS TA Website Refactoring Documentation

## Overview

This document details the refactoring process undertaken to convert the CS TA Website from using static JavaScript data to a more maintainable CSV-based system. The refactoring aimed to make the website easier to update without requiring direct code modifications.

## Files Created/Modified

### 1. Data Files
#### `frontend/src/data/team.csv`
- **Purpose**: Central storage for all TA information
- **Content**: Structured data including:
  - Personal information (id, name, email)
  - Role assignments
  - Office hours
  - Course information
  - Social links
- **Format**: CSV with JSON-encoded complex data
- **Replaces**: The static data previously in `teamData.js`

### 2. Utility Files
#### `frontend/src/utils/csvLoader.js`
- **Purpose**: Loads and parses the CSV data for use in React components
- **Key Features**:
  - Asynchronous CSV loading
  - JSON field parsing
  - Error handling
  - Image path resolution
- **Usage**: Imported by components needing TA data

### 3. Conversion Script
#### `frontend/src/scripts/convertTeamDataToCsv.js`
- **Purpose**: One-time conversion script to migrate from JS to CSV
- **Functionality**:
  - Extracts data from original `teamData.js`
  - Formats data for CSV structure
  - Handles image path conversions
  - Preserves JSON data structure
- **Note**: Not needed for regular maintenance, only for initial conversion

### 4. React Components
#### `frontend/src/pages/team/MeetTAs.jsx`
- **Modified to**:
  - Use the new CSV loader
  - Implement async data loading
  - Handle loading states
  - Maintain existing UI/UX

### 5. Documentation
#### `frontend/src/docs/managing_ta_data.md`
- **Purpose**: Guide for future maintainers
- **Content**: Comprehensive instructions for:
  - Data management
  - Adding/updating TAs
  - Image handling
  - Troubleshooting

## System Architecture

```
frontend/
├── src/
│   ├── data/
│   │   ├── team.csv           # Central data store
│   │   └── teamData.js        # (Original, now deprecated)
│   │
│   ├── utils/
│   │   └── csvLoader.js       # Data loading utility
│   │
│   ├── pages/
│   │   └── team/
│   │       └── MeetTAs.jsx    # Main TA display component
│   │
│   ├── scripts/
│   │   └── convertTeamDataToCsv.js  # Migration script
│   │
│   └── docs/
│       ├── managing_ta_data.md       # Maintenance guide
│       └── refactoring_documentation.md  # This file
```

## Data Flow

1. **Data Storage**:
   ```
   team.csv → csvLoader.js → React Components
   ```

2. **Update Process**:
   ```
   Edit CSV → Auto-reload in development → Changes visible in UI
   ```

## Technical Details

### CSV Structure
```csv
id,name,image,email,role,hours_json,courses_json,links_json
```

### JSON Fields
1. **hours_json**:
   ```json
   [
     [],  // Sunday
     [{"start": 10, "end": 12}],  // Monday
     // ... rest of week
   ]
   ```

2. **courses_json**:
   ```json
   [
     ["M/W/F", "CSC101", "10:00-12:00"]
   ]
   ```

3. **links_json**:
   ```json
   [
     ["Slack", ""],
     ["LinkedIn", "profile_url"]
   ]
   ```

## Dependencies Added
- `papaparse`: CSV parsing library
  - Installation: `npm install papaparse --save`
  - Usage: Handles CSV file loading and parsing

## Migration Process Executed

1. **Initial Setup**:
   - Created CSV structure
   - Implemented CSV loader utility
   - Added necessary dependencies

2. **Data Migration**:
   - Converted static JS data to CSV
   - Updated image references
   - Preserved JSON structures

3. **Component Updates**:
   - Modified React components for async data
   - Added loading states
   - Maintained existing functionality

4. **Documentation**:
   - Created maintenance guide
   - Documented technical implementation
   - Added troubleshooting information

## Benefits of New System

1. **Maintainability**:
   - Easy updates via CSV
   - No code changes needed for data updates
   - Spreadsheet software compatible

2. **Separation of Concerns**:
   - Data separate from code
   - Clear update processes
   - Reduced risk of code errors

3. **Future-Proofing**:
   - Easy to extend
   - Simple to backup
   - Clear documentation

## Future Considerations

1. **Potential Enhancements**:
   - CSV validation tools
   - Automated backup system
   - Web-based editing interface

2. **Maintenance Tasks**:
   - Regular CSV backups
   - Image optimization
   - Documentation updates

## Support and Maintenance

- Documentation is maintained in the `docs/` directory
- CSV format is human-readable and spreadsheet-compatible
- Image assets remain in their original location
- Original JavaScript data preserved for reference

## Conclusion

This refactoring significantly improves the maintainability of the CS TA Website by:
1. Simplifying data updates
2. Reducing technical knowledge requirements
3. Providing clear documentation
4. Maintaining existing functionality

Future maintainers should refer to `managing_ta_data.md` for day-to-day operations and this document for technical understanding of the system.
