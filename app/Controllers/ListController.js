import ListService from "../Services/ListService.js";
import store from "../store.js";
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = store.State.list;
  lists.forEach(list => (template += list.template));
  document.querySelector("#list").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    // _drawLists();
    console.log("hello from list controller");
  }

  addList(event) {
    event.preventDefault();
    // console.log(event);
    ListService.addList(event.target.listTitle.value);
    _drawLists();
  }

  addListItem(event, listId) {
    event.preventDefault();
    ListService.addToList(event.target.listItem.value, listId);
    _drawLists();
  }

  deleteListItem(listId, listItemId) {
    console.log(`delete list item: ${listId}, ${listItemId}`);
    ListService.deleteListItem(listId, listItemId);
    _drawLists();
  }

  deleteList(listId) {
    ListService.deleteList(listId);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
