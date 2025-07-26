# Student Dashboard

A responsive student dashboard web page built with HTML, Tailwind CSS, and JavaScript. This dashboard provides a comprehensive view of a student's academic progress, attendance, and assignments.

## Features

### 🎯 Dashboard Overview
- **Quick Stats Cards**: Overall attendance percentage, total assignments, pending assignments, and number of subjects
- **Monthly Attendance Summary**: Visual cards showing attendance percentages for each subject with progress bars
- **Recent Assignments**: Table displaying the latest assignments with status indicators

### 📊 Attendance Tracking
- **Attendance by Subject Table**: Detailed breakdown showing:
  - Subject name
  - Total classes
  - Classes attended
  - Attendance percentage
  - Status indicators (Excellent/Good/Needs Improvement)
- **Visual Status Indicators**: Color-coded percentages and status badges

### 📝 Assignment Management
- **Comprehensive Assignment Table**: Lists all assignments with:
  - Assignment title
  - Subject
  - Due date (with overdue highlighting)
  - Status (Pending/Submitted)
  - Action buttons (View/Submit)
- **Filtering Options**: Filter assignments by All, Pending, or Submitted status
- **Overdue Detection**: Automatically highlights overdue assignments

### 🧭 Navigation
- **Sidebar Navigation**: Clean, modern navigation with icons
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Active State Indicators**: Visual feedback for current section
- **No Profile Section**: The dashboard is focused on academic data only

## Current Subjects
- Statistics
- Operating Systems
- Java
- Software Engineering
- Lab on Oracle
- Yoga and Meditation

## Technical Features

### 🎨 Styling
- **Tailwind CSS**: Modern utility-first CSS framework
- **Dark Theme**: Consistent dark blue/purple palette for all UI elements
- **Responsive Design**: Mobile-first approach with breakpoints
- **Color-coded Status**: Green for success, yellow for warning, red for danger
- **Smooth Transitions**: Hover effects and state changes

### ⚡ JavaScript Functionality
- **Dynamic Data Population**: All data is populated via JavaScript
- **Interactive Navigation**: Smooth section switching
- **Real-time Filtering**: Assignment filtering without page reload
- **Data Management**: Sample data structure for easy customization

### 📱 Responsive Layout
- **Flexible Grid System**: Adapts to different screen sizes
- **Mobile Navigation**: Optimized for touch devices
- **Table Responsiveness**: Horizontal scrolling on small screens

## File Structure

```
CMS/
├── index.html          # Main dashboard file
├── css/
│   └── tailwind-custom.css  # Tailwind and custom dark theme styles
├── js/
│   └── dashboard.js         # All dashboard logic and data
└── README.md          # This documentation file
```

## Usage

1. **Open the Dashboard**: Simply open `index.html` in any modern web browser
2. **Navigate Sections**: Click on the sidebar navigation buttons to switch between Dashboard, Attendance, and Assignments
3. **Filter Assignments**: Use the filter buttons in the Assignments section to view specific assignment types
4. **View Data**: All data is dynamically populated and updates automatically

## Customization

### Adding/Editing Subjects
Edit the `attendanceData` array in `js/dashboard.js` to add, remove, or modify subjects.

### Adding/Editing Assignments
Edit the `assignmentsData` array in `js/dashboard.js` to add new assignments with the following structure:
```javascript
{
    id: unique_id,
    title: "Assignment Title",
    subject: "Subject Name",
    dueDate: "YYYY-MM-DD",
    status: "pending" // or "submitted"
}
```

### Modifying Colors
Update the Tailwind configuration or custom CSS in `css/tailwind-custom.css` to change the color scheme.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Dependencies

- **Tailwind CSS**: Loaded via CDN for styling
- **No additional dependencies required**

## Future Enhancements

- Database integration for persistent data
- User authentication system
- Real-time notifications
- File upload for assignments
- Calendar integration
- Grade tracking system
- Communication features

---

**Note**: This is a frontend-only implementation with sample data. For production use, integrate with a backend system for data persistence and user management. 
