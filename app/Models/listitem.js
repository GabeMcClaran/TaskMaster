import { generateId } from "../utils.js";

export default class Listitem {
  constructor(Item) {
    this.id = generateId();
    this.name = Item;
  }

  template(listId) {
    return `
    <li>${this.name}
    <button class="btn btn-danger" type="button" onclick="app.ListController.deleteListItem('${listId}','${this.id}')">X</button>
    </li>
    `;
  }

  drawItem(listId) {
    let template = ``;
    this.name.forEach(list => (template += list.template(listId)));
    return template;
  }
}
