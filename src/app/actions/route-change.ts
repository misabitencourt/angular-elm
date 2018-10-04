
const accept = [
    'home'
];

export default (storage, {route}) => {
    if (accept.indexOf(route) === -1) {
        route = accept.slice().pop();
    }
    
    storage.navigation.route = route;

    return Object.assign({}, storage);
}