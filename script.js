// State
// Full 68 Members Data
const defaultMembers = [
    { id: 1, name: 'Aalok B. Patel', std: 'T.Y.', mobile: '8128625864', dob: '13/Jul/2004' },
    { id: 2, name: 'Akshat J. Patel', std: '10', mobile: '9825634358', dob: '15/Apr/2010' },
    { id: 3, name: 'Aaryan Gajjar', std: 'College', mobile: '7043156067', dob: '15/Sep/2003' },
    { id: 4, name: 'Akash P. Nayak', std: '12', mobile: '7984410577', dob: '1/Sep/2007' },
    { id: 5, name: 'Akshat P Patel', std: '12', mobile: '9723205242', dob: '28/Mar/2009' },
    { id: 6, name: 'Bhavik S. Patel', std: '9', mobile: '9875213515', dob: '21/May/2011' },
    { id: 7, name: 'Bhavesh Sen', std: 'B.Pham', mobile: '7016218283', dob: '22/Mar/2006' },
    { id: 8, name: 'Dhairya B Patel', std: '12', mobile: '7990664547', dob: '7/Oct/2008' },
    { id: 9, name: 'Dax S Patel', std: '9', mobile: '9924290245', dob: '1/May/2011' },
    { id: 10, name: 'Dax A Patel', std: 'B COM', mobile: '9924693960', dob: '15/Sep/2008' },
    { id: 11, name: 'Dev G Patel', std: '12', mobile: '7874388037', dob: '23/Apr/2009' },
    { id: 12, name: 'Dev J Patel', std: '12', mobile: '9898904499', dob: '20/May/2009' },
    { id: 13, name: 'Dharmik S Barot', std: '12', mobile: '9016757562', dob: '4/Nov/2008' },
    { id: 14, name: 'Dev Patel', std: '—', mobile: '7600183947', dob: '—' },
    { id: 15, name: 'Dev Gajjar', std: '—', mobile: '9726051332', dob: '26-May-03' },
    { id: 16, name: 'Dharmik S Valand', std: '11', mobile: '9510423209', dob: '26/Jun/2009' },
    { id: 17, name: 'Dhruvil Prajapati', std: '10', mobile: '9904016667', dob: '3/Oct/2010' },
    { id: 18, name: 'Dipesh Patel', std: 'Job', mobile: '9712550675', dob: '30/Sep/1993' },
    { id: 19, name: 'Harikrushna Patel', std: 'Job', mobile: '9824058234', dob: '7/Sep/1999' },
    { id: 20, name: 'Harikrushna R Patel', std: 'T.Y.', mobile: '8320240696', dob: '30/Mar/2004' },
    { id: 21, name: 'Harshil Valand', std: 'Deploma', mobile: '9499642919', dob: '8/Mar/2009' },
    { id: 22, name: 'Het H Patel', std: '10', mobile: '9974543136', dob: '3/Jan/2010' },
    { id: 23, name: 'Het M Patel', std: '10', mobile: '9824545982', dob: '20/May/2010' },
    { id: 24, name: 'Jainam B Patel', std: '10', mobile: '9824563452', dob: '14/May/2009' },
    { id: 25, name: 'Jay Patel', std: '11', mobile: '9909339898', dob: '16/Jan/2010' },
    { id: 26, name: 'Jaymin Y Nayi', std: '10', mobile: '9924249583', dob: '1/Jun/2010' },
    { id: 27, name: 'Jayur K Patel', std: '10', mobile: '9316201477', dob: '21/Mar/2009' },
    { id: 28, name: 'Jit B Nayi', std: '12', mobile: '8758815803', dob: '19/Oct/2007' },
    { id: 29, name: 'Ketul D Patel', std: '10', mobile: '9725239090', dob: '10/Oct/2009' },
    { id: 30, name: 'Keyur B Patel', std: 'Job', mobile: '7990458423', dob: '9/May/1988' },
    { id: 31, name: 'Kirtan P Patel', std: '10', mobile: '9909544410', dob: '13/Nov/2009' },
    { id: 32, name: 'Maulik J Patel', std: 'Job', mobile: '9512502048', dob: '22/May/1999' },
    { id: 33, name: 'Meet G Patel', std: '11', mobile: '9033048008', dob: '4/May/2009' },
    { id: 34, name: 'Meet M Prajapati', std: 'Deploma', mobile: '9265231089', dob: '17/Dec/2008' },
    { id: 35, name: 'Meet N Patel', std: '12', mobile: '9924162518', dob: '22/Feb/2008' },
    { id: 36, name: 'Meet Patel', std: 'College', mobile: '9724029119', dob: '7/Oct/2007' },
    { id: 37, name: 'Mihir B Patel', std: 'College', mobile: '7016408403', dob: '3/Sep/2005' },
    { id: 38, name: 'Naman Gajjar', std: 'College', mobile: '9724335883', dob: '29/Sep/2006' },
    { id: 39, name: 'Nayan G Panchal', std: 'T.Y.', mobile: '9898837957', dob: '8/Oct/2005' },
    { id: 40, name: 'Palak N Patel', std: 'Job', mobile: '7878765782', dob: '8/May/1998' },
    { id: 41, name: 'Purvang K Patel', std: 'College', mobile: '9998991677', dob: '3/Nov/2002' },
    { id: 42, name: 'Prayush Prajapati', std: 'College', mobile: '6351691266', dob: '3/Oct/2004' },
    { id: 43, name: 'Purvang M Prajapati', std: 'T.Y.', mobile: '7046630588', dob: '25/Oct/2003' },
    { id: 44, name: 'Rushik Patel', std: 'C.A.', mobile: '8141956002', dob: '23/Aug/2001' },
    { id: 45, name: 'Savan S Modi', std: 'College', mobile: '7265067042', dob: '7/Aug/2003' },
    { id: 46, name: 'Sharad Patel', std: 'College', mobile: '9913124732', dob: '—' },
    { id: 47, name: 'Smit R Patel', std: 'College', mobile: '9737401544', dob: '24/Jan/2004' },
    { id: 48, name: 'Sneh G Patel', std: 'College', mobile: '8320200887', dob: '13/Jan/2005' },
    { id: 49, name: 'Snehansh V Patel', std: '12', mobile: '8733077693', dob: '27/Jan/2009' },
    { id: 50, name: 'Sumit B Prajapati', std: 'College', mobile: '9016958464', dob: '17/Oct/2002' },
    { id: 51, name: 'Tapan A Patel', std: 'F.Y.', mobile: '9106527737', dob: '28/Mar/2005' },
    { id: 52, name: 'Tilak A Patel', std: 'College', mobile: '8200199020', dob: '11/Aug/2005' },
    { id: 53, name: 'Tirth Sanjaybhai P.', std: '10', mobile: '9727165594', dob: '16/Aug/2010' },
    { id: 54, name: 'Tirth S Patel', std: '10', mobile: '9904969480', dob: '19/Jul/2010' },
    { id: 55, name: 'Urvish R Patel', std: 'College', mobile: '8866685864', dob: '17/Dec/2002' },
    { id: 56, name: 'Ved P Patel', std: 'B Pharm', mobile: '7990627282', dob: '1/May/2006' },
    { id: 57, name: 'Vivek R Prajapati', std: 'Diploma', mobile: '9998726021', dob: '8/Aug/2007' },
    { id: 58, name: 'Yannsh', std: '—', mobile: '9265602150', dob: '—' },
    { id: 59, name: 'Yash A. Patel', std: 'Diploma', mobile: '9409997721', dob: '22/Aug/2007' },
    { id: 60, name: 'Yash B. Patel', std: '10', mobile: '9537860957', dob: '26/Feb/2011' },
    { id: 61, name: 'Yug B. Patel', std: '10', mobile: '9537860975', dob: '26/Feb/2011' },
    { id: 62, name: 'Dhruvin Prajapati', std: '11', mobile: '9909287967', dob: '10/03/2010' },
    { id: 63, name: 'Aryan Patel', std: 'B.Pharm', mobile: '9274371391', dob: '28/09/2007' }
];

// Always use defaultMembers as source of truth for structure, 
// to ensure updates are reflected.
let members = defaultMembers;
localStorage.setItem('kym_members', JSON.stringify(members));

let attendanceData = JSON.parse(localStorage.getItem('kym_attendance')) || {};
let currentDate = new Date().toISOString().split('T')[0];
let isAdmin = false;
let activeSubTab = 'pending'; // 'pending' or 'completed'

// Selectors
const dateInput = document.getElementById('attendance-date');
const attendanceList = document.getElementById('attendance-list');
const attendanceSearch = document.getElementById('attendance-search');
const showPendingBtn = document.getElementById('show-pending');
const showCompletedBtn = document.getElementById('show-completed');
const statsPresent = document.querySelector('.present-count');
const statsAbsent = document.querySelector('.absent-count');
const statsTotal = document.querySelector('.total-count');

// Admin Selectors
const adminBtn = document.getElementById('admin-login-btn');
const loginModal = document.getElementById('login-modal');
const adminPasswordInput = document.getElementById('admin-password');
const loginSubmit = document.getElementById('login-submit');
const loginCancel = document.getElementById('login-cancel');
const loginError = document.getElementById('login-error');
const karyakarGrid = document.getElementById('karyakar-grid');
const karyakarSearch = document.getElementById('karyakar-search');
const historyLog = document.getElementById('history-log');
const saveTodayBtn = document.getElementById('save-today');

// Detail Modal Selectors
const detailModal = document.getElementById('member-detail-modal');
const closeDetail = document.getElementById('close-detail');
const detailName = document.getElementById('detail-name');
const detailStd = document.getElementById('detail-std');
const detailMobile = document.getElementById('detail-mobile');
const detailDob = document.getElementById('detail-dob');

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const viewSections = document.querySelectorAll('.view-section');

// Main Auth Selectors
const mainOverlay = document.getElementById('main-login-overlay');
const mainUser = document.getElementById('main-username');
const mainPass = document.getElementById('main-password');
const mainLoginBtn = document.getElementById('main-login-btn');
const mainLoginError = document.getElementById('main-login-error');

// Init
function init() {
    checkMainAuth();

    // Set Date
    dateInput.value = currentDate;

    // Default members are already set in variable declaration and saved to LS
    // just to ensure they stick if user clears cache but not code.

    // Event Listeners
    setupTabs();
    setupDatepicker();
    setupActions();
    setupSubTabs();
    setupAdminActions();
    setupMainAuth();

    // Render
    renderAll();
    renderHistory();
}

function saveMembers() {
    localStorage.setItem('kym_members', JSON.stringify(members));
}

function saveAttendance() {
    localStorage.setItem('kym_attendance', JSON.stringify(attendanceData));
    updateStats();
}

function renderAll() {
    renderAttendanceList();
    updateStats();
    if (isAdmin) renderKaryakarGrid();
}

// ------ UI Rendering ------

function renderAttendanceList(filterText = '') {
    attendanceList.innerHTML = '';

    // Ensure date entry exists
    if (!attendanceData[currentDate]) {
        attendanceData[currentDate] = {};
    }

    // Filter members based on Search AND Sub-tab
    const filteredMembers = members.filter(m => {
        // Search Filter
        if (!m.name.toLowerCase().includes(filterText.toLowerCase())) return false;

        // Sub-tab Filter
        const status = attendanceData[currentDate][m.id];
        if (activeSubTab === 'pending') {
            return !status; // Show if NO status
        } else {
            return status; // Show if HAS status (present or absent)
        }
    });

    if (filteredMembers.length === 0) {
        attendanceList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-users"></i>
                <p>No members in this list.</p>
            </div>`;
        return;
    }

    filteredMembers.forEach(member => {
        // Status: 'present', 'absent', or undefined (default)
        const status = attendanceData[currentDate][member.id];

        const card = document.createElement('div');
        card.className = `member-card ${status || ''}`;
        card.innerHTML = `
            <div class="member-info">
                <div class="m-name">${member.name}</div>
                <div class="m-uid">#${String(member.id).padStart(3, '0')}</div>
            </div>
            <div class="status-action">
                <div class="toggle-status" onclick="toggleAttendance(${member.id})">
                    ${getStatusIcon(status)}
                </div>
            </div>
        `;
        attendanceList.appendChild(card);
    });
}

function getStatusIcon(status) {
    if (status === 'present') return '<i class="fa-solid fa-check"></i>';
    if (status === 'absent') return '<i class="fa-solid fa-xmark"></i>';
    return '<i class="fa-regular fa-circle"></i>'; // Default/Unmarked state
}

function renderKaryakarGrid(filterText = '') {
    karyakarGrid.innerHTML = '';

    const filtered = members.filter(m => m.name.toLowerCase().includes(filterText.toLowerCase()));

    filtered.forEach(member => {
        const card = document.createElement('div');
        card.className = 'k-card';
        card.onclick = () => showMemberDetail(member);
        card.innerHTML = `
            <div class="k-info-row">
                <div class="k-name">${member.name}</div>
                <div class="k-sub">${member.std}</div>
            </div>
            <i class="fa-solid fa-chevron-right arrow-icon"></i>
        `;
        karyakarGrid.appendChild(card);
    });
}

function showMemberDetail(member) {
    detailName.textContent = member.name;
    detailStd.textContent = member.std || '—';
    detailMobile.textContent = member.mobile || '—';
    detailDob.textContent = member.dob || '—';

    detailModal.classList.add('open');
}




function renderHistory() {
    if (!historyLog) return;
    historyLog.innerHTML = '';

    const dates = Object.keys(attendanceData).sort((a, b) => new Date(b) - new Date(a)); // Newest first

    if (dates.length === 0) {
        historyLog.innerHTML = '<li style="text-align:center; padding:1rem; color:var(--text-muted)">No history yet.</li>';
        return;
    }

    dates.forEach(date => {
        const dayRecords = attendanceData[date];
        let p = 0;
        let a = 0;
        let t = members.length;

        Object.values(dayRecords).forEach(val => {
            if (val === 'present') p++;
            if (val === 'absent') a++;
        });

        const li = document.createElement('li');
        li.className = 'history-item';
        li.innerHTML = `
            <div>
                <div class="h-date">${new Date(date).toDateString()}</div>
                <div class="h-stats">${p} Present, ${a} Absent</div>
            </div>
            <div class="h-percent">${Math.round((p / t) * 100)}%</div>
        `;
        historyLog.appendChild(li);
    });
}


function updateStats() {
    if (!members.length) {
        statsPresent.textContent = '0';
        statsAbsent.textContent = '0';
        statsTotal.textContent = '0';
        return;
    }

    const currentRecords = attendanceData[currentDate] || {};
    let present = 0;
    let absent = 0;

    Object.values(currentRecords).forEach(status => {
        if (status === 'present') present++;
        if (status === 'absent') absent++;
    });

    statsPresent.textContent = present;
    statsAbsent.textContent = absent;
    statsTotal.textContent = members.length;
}

// ------ Logic ------

window.toggleAttendance = function (id) {
    if (!attendanceData[currentDate]) attendanceData[currentDate] = {};

    const currentStatus = attendanceData[currentDate][id];
    let newStatus;

    if (!currentStatus) newStatus = 'present';
    else if (currentStatus === 'present') newStatus = 'absent';
    else newStatus = null; // Reset to unmarked

    if (newStatus) {
        attendanceData[currentDate][id] = newStatus;
    } else {
        delete attendanceData[currentDate][id];
    }

    saveAttendance();
    // If we are in 'pending' tab and mark someone, they should disappear
    // If we are in 'completed' tab and unmark someone, they should disappear
    // So re-rendering the list is key.
    // So re-rendering the list is key.
    renderAttendanceList(attendanceSearch ? attendanceSearch.value : '');

    // Also update history if visible, or just wait for tab switch
    if (document.getElementById('reports-view').classList.contains('active')) {
        renderHistory();
    }
};


// ------ Setup & Event Listeners ------

function setupSubTabs() {
    showPendingBtn.addEventListener('click', () => {
        activeSubTab = 'pending';
        showPendingBtn.classList.add('active');
        showCompletedBtn.classList.remove('active');
        renderAttendanceList(attendanceSearch.value);
    });

    showCompletedBtn.addEventListener('click', () => {
        activeSubTab = 'completed';
        showCompletedBtn.classList.add('active');
        showPendingBtn.classList.remove('active');
        renderAttendanceList(attendanceSearch.value);
    });
}

function setupTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            viewSections.forEach(s => s.classList.remove('active'));

            // Show Controls again if they were hidden
            const appControls = document.getElementById('app-controls');
            if (appControls) appControls.style.display = '';

            // Show Tabs again if they were hidden (Safety)
            const appTabs = document.getElementById('app-tabs');
            if (appTabs) appTabs.style.display = '';

            // Add to clicked
            btn.classList.add('active');
            let tabId = btn.dataset.tab;
            document.getElementById(`${tabId}-view`).classList.add('active');

            // Special case for Karyakar tab if we add one later, 
            // but currently it's accessed via admin button.
            if (tabId === 'reports') {
                renderHistory();
            }
        });
    });
}

function setupDatepicker() {
    dateInput.addEventListener('change', (e) => {
        currentDate = e.target.value;
        renderAttendanceList();
        updateStats();
    });
}

function setupActions() {
    // Save Today
    if (saveTodayBtn) {
        saveTodayBtn.addEventListener('click', () => {
            saveAttendance();
            renderHistory();
            syncToGoogleSheet();
        });
    }

    // Mark All Present
    document.getElementById('mark-all-present').addEventListener('click', () => {
        if (!attendanceData[currentDate]) attendanceData[currentDate] = {};
        members.forEach(m => {
            attendanceData[currentDate][m.id] = 'present';
        });
        saveAttendance();
        renderAttendanceList();
    });

    // Attendance Search
    if (attendanceSearch) {
        attendanceSearch.addEventListener('input', (e) => {
            renderAttendanceList(e.target.value);
        });
    }
}

function setupAdminActions() {
    // Open Login
    adminBtn.addEventListener('click', () => {
        if (isAdmin) {
            // Already logged in, just show view
            switchViewToKaryakar();
        } else {
            loginModal.classList.add('open');
            adminPasswordInput.value = '';
            loginError.textContent = '';
            adminPasswordInput.focus();
        }
    });

    // Login Submit
    loginSubmit.addEventListener('click', attemptLogin);
    adminPasswordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });

    // Login Cancel
    loginCancel.addEventListener('click', () => {
        loginModal.classList.remove('open');
    });

    // Search
    karyakarSearch.addEventListener('input', (e) => {
        renderKaryakarGrid(e.target.value);
    });

    // Close Detail
    closeDetail.addEventListener('click', () => {
        detailModal.classList.remove('open');
    });

    // Close Modals on click outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) loginModal.classList.remove('open');
        if (e.target === detailModal) detailModal.classList.remove('open');
    });
}

function attemptLogin() {
    const password = adminPasswordInput.value;
    // Password updated to unique value
    if (password === 'KYMGBHAI@2025') {
        isAdmin = true;
        loginModal.classList.remove('open');
        switchViewToKaryakar();
    } else {
        loginError.textContent = 'Incorrect Password';
    }
}

function switchViewToKaryakar() {
    // Hide other views
    viewSections.forEach(s => s.classList.remove('active'));
    tabBtns.forEach(b => b.classList.remove('active'));

    // Hide Controls
    const appControls = document.getElementById('app-controls');
    if (appControls) appControls.style.display = 'none';

    // Hide Tabs
    const appTabs = document.getElementById('app-tabs');
    if (appTabs) appTabs.style.display = 'none';

    // Hide Admin Button (Self)
    if (adminBtn) adminBtn.style.display = 'none';

    // Show Karyakar
    document.getElementById('karyakar-view').classList.add('active');
    renderKaryakarGrid();
}



const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypIvvdpgR9LuuikmpmAJN007k8EApQx3pfJTdHGJj7_OVlMFtFHA0lXvFZ2vBfYVpP/exec'; // User needs to replace this

function syncToGoogleSheet() {
    // Prepare Data
    // We send data in a format the Google Script expects:
    // { "data": [ [header], [row1], [row2] ... ] }

    // 1. Headers
    const dates = Object.keys(attendanceData).sort();
    const headers = ['No', 'Name', 'STD', 'Mobile', 'DOB', ...dates];

    // 2. Rows
    const rows = members.map(member => {
        const row = [
            member.id,
            member.name,
            member.std,
            member.mobile,
            member.dob
        ];

        dates.forEach(date => {
            const status = attendanceData[date]?.[member.id];
            let cellValue = '-';
            if (status === 'present') cellValue = 'P';
            if (status === 'absent') cellValue = 'A';
            row.push(cellValue);
        });

        return row;
    });

    const payload = {
        data: [headers, ...rows]
    };

    // 3. Send
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Script
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(() => {
            showAlert('Data sent to Google Sheet!', 'success');
        })
        .catch(err => {
            console.error('Error syncing:', err);
            showAlert('Failed to sync. Check console.', 'danger');
        });
}

function showAlert(message, type) {
    const container = document.getElementById('alert-container');
    if (!container) return; // Should exist if we are in reports view

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;

    // Choose icon
    let icon = type === 'success' ? '<i class="fa-solid fa-check-circle"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';

    alertDiv.innerHTML = `${icon} <span>${message}</span>`;

    // Clear previous
    container.innerHTML = '';
    container.appendChild(alertDiv);

    // Auto remove
    setTimeout(() => {
        alertDiv.style.opacity = '0';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// ------ Main Authentication ------

function checkMainAuth() {
    const isAuth = localStorage.getItem('kym_main_auth');
    if (!isAuth) {
        mainOverlay.classList.add('active');
    }
}

function setupMainAuth() {
    // Populate Dropdown
    if (mainUser) {
        // Only show Vivek R Prajapati as requested
        const vivek = members.find(m => m.name === 'Vivek R Prajapati');
        if (vivek) {
            mainUser.innerHTML = `<option value="${vivek.name}">${vivek.name}</option>`;
        }
        // Default Selection
        mainUser.value = 'Vivek R Prajapati';
    }



    if (mainLoginBtn) {
        mainLoginBtn.addEventListener('click', attemptMainLogin);
    }

    // Allow enter key
    if (mainPass) {
        mainPass.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') attemptMainLogin();
        });
    }
}

function attemptMainLogin() {
    const u = mainUser.value.trim();
    const p = mainPass.value.trim();

    // Hardcoded credentials as requested
    // user: "Vivek R Prajapati"
    // pass: "vivek@2026"

    if (u === 'Vivek R Prajapati' && p === 'vivek@2026') {
        localStorage.setItem('kym_main_auth', 'true');
        mainOverlay.classList.remove('active');
        mainLoginError.textContent = '';
    } else {
        mainLoginError.textContent = 'Invalid Username or Password';
    }
}

// Run
init();

// ------ Two-Way Sync Implementation ------

function loadFromGoogleSheet() {
    showAlert('Syncing from Google Sheet...', 'info');

    fetch(GOOGLE_SCRIPT_URL)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                showAlert('No data found on server.', 'info');
                return;
            }

            // Data format: 2D array [[Header1, Header2...], [Row1...], [Row2...]]
            // Headers: ['No', 'Name', 'STD', 'Mobile', 'DOB', '2025-01-01', '2025-01-02'...]

            const headers = data[0];
            const rows = data.slice(1);

            // Identify Date Columns (Indices 5 onwards based on current export logic)
            // But let's be dynamic: Dates start after 'DOB'
            const dobIndex = headers.indexOf('DOB');
            const dateColumns = [];

            if (dobIndex !== -1) {
                for (let i = dobIndex + 1; i < headers.length; i++) {
                    let headerVal = headers[i];
                    // Handle case where Sheet returns Date object
                    if (headerVal instanceof Date) {
                        headerVal = headerVal.toISOString().split('T')[0];
                    }
                    dateColumns.push({ date: headerVal, index: i });
                }
            }

            let newAttendanceData = {};

            rows.forEach(row => {
                const memberId = parseInt(row[0]); // Assuming ID is col 0
                if (!memberId) return;

                dateColumns.forEach(col => {
                    const statusVal = row[col.index];
                    const date = col.date;

                    if (statusVal === 'P' || statusVal === 'A') {
                        if (!newAttendanceData[date]) newAttendanceData[date] = {};

                        if (statusVal === 'P') newAttendanceData[date][memberId] = 'present';
                        if (statusVal === 'A') newAttendanceData[date][memberId] = 'absent';
                    }
                });
            });

            // Merge with local data (Server wins or Local wins? Let's say Server wins for history, but we keep local if server has nothing?)
            // Actually, for a restore, we overwrite local history with server history.
            attendanceData = newAttendanceData;
            saveAttendance(); // Save to local storage

            // Re-render
            renderAll();
            renderHistory();
            showAlert('Data restored from Google Sheet!', 'success');
        })
        .catch(err => {
            console.error('Error loading data:', err);
            // Don't alert error aggressively on load, might be offline
            // showAlert('Could not sync from server.', 'danger'); 
        });
}

// Call on load
loadFromGoogleSheet();
