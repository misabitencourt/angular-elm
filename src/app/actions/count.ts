
export default (storage, {count}) => {        
    storage.home.count += count || 0;

    return Object.assign({}, storage);
}