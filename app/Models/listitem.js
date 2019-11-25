import { generateId } from "../utils.js";

export default class ListItem {
  constructor(name, id) {
    this.id = id || generateId();
    this.name = name;
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
