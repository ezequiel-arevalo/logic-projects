export const createPresenter = () => {
    const el = document.getElementById("count");

    return {
        show: (value) => {
            el.textContent  = value;
        }
    }
}