import ListController from "./Controllers/ListController.js";

//NOTE This should be good to go
class App {
  ListController = new ListController();
}

window["app"] = new App();
