export class Operation {

  static Fn_number (array, number) {
    const start = array.length /number

    return Math.trunc(start)
  }

  static onInitScreen (...functions) {
    if (window.innerWidth > 1230) {
      functions[0]();
    }  else if(window.innerWidth < 745){
      functions[1]();
    } else if (window.innerWidth < 1230) {
      functions[2]();
    }
  }

  static addListeners (element, eventName, listeners) {
    listeners.forEach(el =>  element.addEventListener(eventName, el))
  }
}
