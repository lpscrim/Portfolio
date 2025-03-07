document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    });

    containers.forEach(container => {
        observer.observe(container);
    });
});