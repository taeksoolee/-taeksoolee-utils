import Event from '../enums/Event';
import localStorageSetItem from './localstorage/setItem';

const setCustomEvent = (event) => {
	switch(event) {
		case Event.LOCALSTORAGE_CHANGE:
			return localStorageSetItem();
		default:
			console.warn('invalidate event');
			return null;
	}
}

/** 
 * @example
		window.addEventListener(setCustomEvent(Event.EVENT_NAME), () => {
		console.log('call event!');
*/

export default setCustomEvent;