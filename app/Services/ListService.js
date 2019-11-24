import List from "../Models/List.js";
// import _store from "../store.js";
import store from "../store.js";
import Listitem from "../Models/listitem.js";

//Public
class ListService {
  constructor() {
    // console.log("hello from listService")
  }

  addList(listName) {
    store.State.list.push(new List(listName));
    store.saveState();
  }

  addToList(listItemName, listId) {
    console.log(`Called addToList(${listItemName},${listId})`);
    let allLists = store.State.list;
    for (let i = 0; i < allLists.length; i++) {
      console.log(allLists[i].id);
      if (allLists[i].id == listId)
        allLists[i].items.push(new Listitem(listItemName));
    }
    console.log("added list item");
    store.saveState();
  }

  deleteListItem(listId, listItemId) {
    let allLists = store.State.list;
    for (let i = 0; i < allLists.length; i++) {
      if (allLists[i].id == listId) {
        for (let z = 0; z < allLists[i].items.length; z++) {
          if (allLists[i].items[z].id == listItemId) {
            allLists[i].items.splice(z, 1);
            console.log("deleted Z");
          }
        }
      }
    }
    store.saveState();
  }

  deleteList(listId) {
    store.State.list = store.State.list.filter(cur => cur.id != listId);
    store.saveState();
  }

  // addListitem(listitemData) {
  //   let listitem = new Listitem(listitemData);
  //   let foundList = _store.State.list.find(list => list.id == listitem.listId);
  //   foundList.listitems.push(listitem);
  //   _store.saveState();
  // }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const LISTSERVICE = new ListService();
export default LISTSERVICE;
