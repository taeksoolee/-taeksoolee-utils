import Event from '../../enums/Event';

const setItem = () => {
  const _setItem = localStorage.setItem;

  localStorage.setItem = function(k, v) {
    const e = new CustomEvent(Event.LOCALSTORAGE_CHANGE);
    e.key = k;
    e.oldValue = localStorage.getItem(k);
    e.newValue = v;

    _setItem.call(localStorage, k, v);
    window.dispatchEvent(e);
  }

  return Event.LOCALSTORAGE_CHANGE;
}

export default setItem;