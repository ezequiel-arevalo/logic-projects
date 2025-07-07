export const createCounterService = (counter, presenter) => {
    return {
        increment: () => {
            counter.increment();
            presenter.show(counter.getValue());
        },
        decrement: () => {
            counter.decrement();
            presenter.show(counter.getValue());
        },
        reset: () => {
            counter.reset();
            presenter.show(counter.getValue());
        },
        init: () => {
            presenter.show(counter.getValue());
        },
    };
}