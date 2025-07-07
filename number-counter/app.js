import { createCounter } from "./domain/Counter.js";
import { createPresenter } from "./infrastructure/presenter.js";
import { createCounterService } from "./application/CounterService.js";
import { registerController } from "./infrastructure/controller.js";

const counter = createCounter();
const presenter = createPresenter();
const service = createCounterService(counter, presenter);

registerController(service);
service.init();