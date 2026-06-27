const timelineItems = document.querySelectorAll(".timeline-item");
const titles = document.querySelectorAll(".section-title");

const timelineObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const delay = entry.target.dataset.delay || 0;

            setTimeout(() => {
                entry.target.classList.add("show");
            }, delay);

        }

    });

}, {
    threshold: 0.25
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

titles.forEach(title => {
    timelineObserver.observe(title);
});