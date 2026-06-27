const counters = document.querySelectorAll(".counter");

function formatNumber(value) {

    if (value >= 1000000) {
        return "₹" + (value / 1000000) + "M+";
    }

    if (value >= 1000) {
        return (value / 1000) + "K+";
    }

    return value;
}

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        const updateCounter = () => {

            const current = Number(counter.innerText.replace(/\D/g, ""));

            const increment = Math.max(1, Math.ceil(target / 200));

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = formatNumber(target);

            }

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {

    threshold: 0.2

});

counters.forEach(counter => observer.observe(counter));