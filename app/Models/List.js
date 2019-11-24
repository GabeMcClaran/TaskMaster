import { generateId } from "../utils.js";

export default class List {
  constructor(listName) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    // list: [new List({ listype: "chores", listitem: [] })]; //NOTE trying to hardcode a input
    this.id = generateId();
    this.name = listName;
    this.items = [];
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get template() {
    // for (let i = 0; i < this.items.length; i++) {
    //   result += this.items[i].template;
    // }

    let result = `
    <div class="col-6 border-2px">
    <dl>
    <h2>${this.name}</h2>
      ${this.drawList()}
    </dl>
    <form 
      class="form-inline my-3"
      onsubmit="app.ListController.addListItem(event, '${this.id}')">
      <label for="addlistitem"></label>
      <input 
        type="text" 
        name="listItem"
        id="inlineListItemFormInput"
        class="form-control" 
        placeholder="add list item..."
        required>
      <button type="submit" class="btn btn-dark">Submit</button>
      <button class="btn btn-danger" type="button" onclick="app.ListController.deleteList('${
        this.id
      }')">X</button>
    </form>
    </div>
    `;
    return result;
  }
  drawList() {
    //debugger;
    let template = ``;
    this.items.forEach(list => (template += list.template(this.id)));
    return template;
  }
}
