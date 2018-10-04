import routeChange from './route-change';
import observer from './observer';
import count from './count';

export default (action, storage, data) => {
    switch (action) {       
        case 'route-change':
            storage = routeChange(storage, data);
            break;
        case 'count':
            storage = count(storage, data);
        default:
            storage = Object.assign({}, storage);
    }

    return observer.emit(storage);
}