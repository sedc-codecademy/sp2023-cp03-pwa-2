export function renderCalendar(){
    const calendarContainer = document.querySelector('.calendar');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const currentMonthDisplay = document.getElementById('currentMonth');
    const daysContainer = document.querySelector('.days');

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Set initial date
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // Render calendar for the current month
    renderCalendar();

    // Event listeners for navigation
    prevMonthBtn.addEventListener('click', goToPreviousMonth);
    nextMonthBtn.addEventListener('click', goToNextMonth);

    function renderCalendar() {
      // Clear existing days
      daysContainer.innerHTML = '';

      // Set the current month display
      currentMonthDisplay.textContent = months[currentMonth] + ' ' + currentYear;

      // Get the first day and last day of the month
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Generate days for the month
      for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        daysContainer.appendChild(emptyDay);
      }

      for (let day = 1; day <= lastDay; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        dayElement.addEventListener('click', function() {
          console.log(`Event listener for Day ${day} of Month ${months[currentMonth]}`);
          // Add your desired functionality for each day here
        });

        daysContainer.appendChild(dayElement);
      }
    }

    function goToPreviousMonth() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    }

    function goToNextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    }
}