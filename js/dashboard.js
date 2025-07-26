// dashboard.js: Handles all dynamic logic for the student dashboard

// Sample data
const attendanceData = [
    { subject: 'Statistics', total: 45, attended: 42, percentage: 93 },
    { subject: 'Operating Systems', total: 40, attended: 35, percentage: 88 },
    { subject: 'Java', total: 38, attended: 32, percentage: 84 },
    { subject: 'Software Engineering', total: 42, attended: 38, percentage: 90 },
    { subject: 'Lab on Oracle', total: 35, attended: 28, percentage: 80 },
    { subject: 'Yoga and Meditation', total: 30, attended: 28, percentage: 93 }
];

const assignmentsData = [
    { id: 1, title: 'Calculus Integration Problems', subject: 'Statistics', dueDate: '2024-01-15', status: 'submitted' },
    { id: 2, title: 'Physics Lab Report', subject: 'Operating Systems', dueDate: '2024-01-20', status: 'pending' },
    { id: 3, title: 'Chemistry Experiment Analysis', subject: 'Java', dueDate: '2024-01-18', status: 'submitted' },
    { id: 4, title: 'Essay on Shakespeare', subject: 'Software Engineering', dueDate: '2024-01-25', status: 'pending' },
    { id: 5, title: 'World War II Research Paper', subject: 'Lab on Oracle', dueDate: '2024-01-22', status: 'pending' },
    { id: 6, title: 'Python Programming Project', subject: 'Yoga and Meditation', dueDate: '2024-01-30', status: 'submitted' },
    { id: 7, title: 'Algebra Quiz Preparation', subject: 'Statistics', dueDate: '2024-02-05', status: 'submitted' },
    { id: 8, title: 'Physics Quiz', subject: 'Operating Systems', dueDate: '2024-02-08', status: 'submitted' },
    { id: 9, title: 'Chemistry Quiz', subject: 'Java', dueDate: '2024-02-10', status: 'submitted' },
    { id: 10, title: 'Literature Analysis', subject: 'Software Engineering', dueDate: '2024-02-12', status: 'submitted' },
    { id: 11, title: 'Historical Timeline Project', subject: 'Lab on Oracle', dueDate: '2024-02-15', status: 'submitted' },
    { id: 12, title: 'Web Development Assignment', subject: 'Yoga and Meditation', dueDate: '2024-02-20', status: 'submitted' }
];

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    // Show selected section
    document.getElementById(sectionName).classList.remove('hidden');
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    event.target.classList.remove('text-gray-600', 'hover:bg-gray-100');
    event.target.classList.add('bg-primary', 'text-white');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logged out successfully!');
    }
}

// Filter assignments
function filterAssignments(status) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active', 'bg-primary', 'text-white'));
    buttons.forEach(btn => btn.classList.add('text-gray-600', 'hover:bg-gray-100'));
    event.target.classList.remove('text-gray-600', 'hover:bg-gray-100');
    event.target.classList.add('active', 'bg-primary', 'text-white');
    populateAssignmentsTable(status);
}

// Populate attendance table
function populateAttendanceTable() {
    const tableBody = document.getElementById('attendance-table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    attendanceData.forEach(item => {
        const row = document.createElement('tr');
        const statusClass = item.percentage >= 90 ? 'text-success' : item.percentage >= 80 ? 'text-warning' : 'text-danger';
        const statusText = item.percentage >= 90 ? 'Excellent' : item.percentage >= 80 ? 'Good' : 'Needs Improvement';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-white">${item.subject}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white">${item.total}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white">${item.attended}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium ${statusClass}">${item.percentage}%</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusClass} bg-opacity-10">
                    ${statusText}
                </span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate attendance cards
function populateAttendanceCards() {
    const cardsContainer = document.getElementById('attendance-cards');
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';
    attendanceData.forEach(item => {
        const card = document.createElement('div');
        const statusClass = item.percentage >= 90 ? 'text-success' : item.percentage >= 80 ? 'text-warning' : 'text-danger';
        const bgClass = item.percentage >= 90 ? 'bg-green-50' : item.percentage >= 80 ? 'bg-yellow-50' : 'bg-red-50';
        card.className = `bg-card p-6 rounded-lg shadow-sm border ${bgClass}`;
        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-white">${item.subject}</h4>
                <span class="text-2xl font-bold ${statusClass}">${item.percentage}%</span>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-gray-300">Attended:</span>
                    <span class="font-medium text-white">${item.attended}/${item.total}</span>
                </div>
                <div class="w-full bg-gray-600 rounded-full h-2">
                    <div class="h-2 rounded-full ${item.percentage >= 90 ? 'bg-green-500' : item.percentage >= 80 ? 'bg-yellow-500' : 'bg-red-500'}" style="width: ${item.percentage}%"></div>
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

// Populate assignments table
function populateAssignmentsTable(filter = 'all') {
    const tableBody = document.getElementById('assignments-table');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    let filteredData = assignmentsData;
    if (filter !== 'all') {
        filteredData = assignmentsData.filter(item => item.status === filter);
    }
    filteredData.forEach(item => {
        const row = document.createElement('tr');
        const statusClass = item.status === 'submitted' ? 'text-success' : 'text-warning';
        const statusText = item.status === 'submitted' ? 'Submitted' : 'Pending';
        const dueDate = new Date(item.dueDate);
        const isOverdue = dueDate < new Date() && item.status === 'pending';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-white">${item.title}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white">${item.subject}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white ${isOverdue ? 'text-red-400 font-medium' : ''}">${dueDate.toLocaleDateString()}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusClass} bg-opacity-10">
                    ${statusText}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-primary hover:text-blue-400 mr-3">View</button>
                ${item.status === 'pending' ? '<button class="text-success hover:text-green-400">Submit</button>' : ''}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Populate recent assignments
function populateRecentAssignments() {
    const tableBody = document.getElementById('recent-assignments');
    if (!tableBody) return;
    tableBody.innerHTML = '';
    const recentAssignments = assignmentsData.slice(0, 5);
    recentAssignments.forEach(item => {
        const row = document.createElement('tr');
        const statusClass = item.status === 'submitted' ? 'text-success' : 'text-warning';
        const statusText = item.status === 'submitted' ? 'Submitted' : 'Pending';
        const dueDate = new Date(item.dueDate);
        const isOverdue = dueDate < new Date() && item.status === 'pending';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-white">${item.title}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white">${item.subject}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white ${isOverdue ? 'text-red-400 font-medium' : ''}">${dueDate.toLocaleDateString()}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusClass} bg-opacity-10">
                    ${statusText}
                </span>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Update dashboard stats
function updateDashboardStats() {
    const overallAttendance = Math.round(attendanceData.reduce((sum, item) => sum + item.percentage, 0) / attendanceData.length);
    const pendingAssignments = assignmentsData.filter(item => item.status === 'pending').length;
    const overallAttendanceElem = document.getElementById('overall-attendance');
    const totalAssignmentsElem = document.getElementById('total-assignments');
    const pendingAssignmentsElem = document.getElementById('pending-assignments');
    if (overallAttendanceElem) overallAttendanceElem.textContent = overallAttendance + '%';
    if (totalAssignmentsElem) totalAssignmentsElem.textContent = assignmentsData.length;
    if (pendingAssignmentsElem) pendingAssignmentsElem.textContent = pendingAssignments;
}

// Initialize the dashboard
function initDashboard() {
    populateAttendanceTable();
    populateAttendanceCards();
    populateAssignmentsTable();
    populateRecentAssignments();
    updateDashboardStats();
}

document.addEventListener('DOMContentLoaded', initDashboard); 