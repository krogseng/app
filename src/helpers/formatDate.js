export function formatDate(date) {
    const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    const dayNames = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    date = new Date(date);
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return (dayNames[dayOfWeek] + ', ' + monthNames[monthIndex] + ' ' + day + ', ' + year);
}