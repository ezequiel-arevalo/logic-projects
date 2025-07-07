export const registerController = (service) => {
    document.getElementById('btn-up').addEventListener('click', () => {
        service.increment();
    });

    document.getElementById('btn-down').addEventListener('click', () => {
        service.decrement();
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
        service.reset();
    });

    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
    })
}