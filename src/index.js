import Event from './enums/Event';
import setCustomEvent from './override/setCustomEvent';

window.customEvent = Event;

setCustomEvent(Event.LOCALSTORAGE_CHANGE);
