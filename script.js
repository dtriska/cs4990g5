document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.getElementById('timeline');
  
    // Example employment data
    const employmentHistory = [
      { year: 2005, position: 'CEO', company: 'Wayne Enterprises' },
      { year: 2010, position: 'Vigilante', company: 'Batman Incorporated' },
      { year: 2015, position: 'Justice League Member', company: 'Justice League' },
    ];
  
    // Populate the timeline
    employmentHistory.forEach(job => {
      const timelineItem = document.createElement('div');
      timelineItem.classList.add('timeline-item');
      timelineItem.innerHTML = `<p>${job.year}</p><p>${job.position} at ${job.company}</p>`;
      timeline.appendChild(timelineItem);
    });
  });
  