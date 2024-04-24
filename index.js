const Sunday = [
    {   
        time: 'Sunday',
        roomNumber: 'Holiday',
        subject: 'No class Available',
        type: ''
    }
]
const Monday = [
    {   
        time: '09-10 AM',
        roomNumber: '38-718',
        subject: 'CSE316',
        type: 'Lecture'
    },
    {   
        time: '10-11 AM',
        roomNumber: '38-718',
        subject: 'CSE310',
        type: 'Tutorial'
    },
    {   
        time: '12-01 PM',
        roomNumber: '38-718',
        subject: 'INT222',
        type: 'Lecture'
    }
]
const Tuesday = [
    {   
        time: '09-10 AM',
        roomNumber: '27-304Y',
        subject: 'INT219',
        type: 'Tutorial'
    },
    {   
        time: '11-12 AM',
        roomNumber: '28-107',
        subject: 'INT212',
        type: 'Lecture'
    },
    {   
        time: '12-01 PM',
        roomNumber: '28-107',
        subject: 'INT211',
        type: 'Lecture'
    },
    {   
        time: '02-03 PM',
        roomNumber: '38-718',
        subject: 'CSE316',
        type: 'Lecture'
    }
]

const Wednesday = [
    {   
        time: '10-11 AM',
        roomNumber: '33-309',
        subject: 'INT219',
        type: 'Lecture'
    },
    {   
        time: '11-12 AM',
        roomNumber: '38-719',
        subject: 'INT219',
        type: 'Lecture'
    }
]

const Thursday = [
    {   
        time: '11-12 AM',
        roomNumber: '33-309',
        subject: 'INT212',
        type: 'Lecture'
    },
    {   
        time: '01-02 PM',
        roomNumber: '38-719',
        subject: 'INT212',
        type: 'Lecture'
    },
    {   
        time: '02-03 PM',
        roomNumber: '38-718',
        subject: 'PEA305',
        type: 'Lecture'
    }
]

const Friday = [
    {   
        time: '10-11 AM',
        roomNumber: '33-309',
        subject: 'CSE306',
        type: 'Lecture'
    },
    {   
        time: '11-12 AM',
        roomNumber: '33-309',
        subject: 'INT211',
        type: 'Lecture'
    },
    {   
        time: '02-03 PM',
        roomNumber: '33-601',
        subject: 'CSE316',
        type: 'Tutorial'
    },
    
]

const Saturday = [
    {   
        time: '09-10 AM',
        roomNumber: '34-604',
        subject: 'INT219',
        type: 'Makeup'
    },
    {   
        time: '10-11 AM',
        roomNumber: '34-604',
        subject: 'INT219',
        type: 'Makeup'
    }
]


const examSchedule = [
    {
        date: '13 May 2024',
        time: '09-11 AM',
        roomNumber: '38-718',
        subject: 'CSE310',
    },
    {
        date: '16 May 2024',
        time: '08-10 AM',
        roomNumber: '38-718',
        subject: 'INT219',
    },
    {
        date: '18 May 2024',
        time: '09-12 AM',
        roomNumber: '38-718',
        subject: 'INT211',
    },
    {
        date: '20 May 2024',
        time: '10-12 AM',
        roomNumber: '38-718',
        subject: 'PEA305',
    },
    {
        date: '23 May 2024',
        time: '09-12 AM',
        roomNumber: '38-718',
        subject: 'CSE306',
    }
];

const arr = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var head = document.getElementById('heading');
var next = document.getElementById('nextDay');
var pre = document.getElementById('prevDay');

var now = new Date();
var today = now.getDay();
var day = today;

document.addEventListener('DOMContentLoaded', function() {
    showExamSchedule();
    set(day);
});

function set(day) {
    const tableBody = document.getElementById('timeTableBody');
    tableBody.innerHTML = '';

    arr[day].forEach(ele => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${ele.time}</td>
            <td>${ele.roomNumber}</td>
            <td>${ele.subject}</td>
            <td>${ele.type}</td>
        `;
        tableBody.appendChild(tr);
    });

    if (day !== today) {
        head.innerText = `${days[day]}`;
    } else {
        head.innerText = "Today's Time Table";
    }
}

function showExamSchedule() {
    const examTable = document.querySelector('#tab tbody');
    examTable.innerHTML = '';
    
    examSchedule.forEach(exam => {
        let tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${exam.date}</td>
        <td>${exam.time}</td>
        <td>${exam.roomNumber}</td>
        <td>${exam.subject}</td>
        `;
        examTable.appendChild(tr);
    });
}


next.onclick = function() {
    day = (day + 1) % 7;  
    set(day);
}

pre.onclick = function() {
    day = (day - 1 + 7) % 7;
    set(day);
}

// Function to initially set the timetable for today
function showTodayTimeTable() {
    set(today);
}

showTodayTimeTable();
