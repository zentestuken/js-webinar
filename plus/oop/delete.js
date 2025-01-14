/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
module.exports = function del(o, key) {
    if (Object.prototype.toString.call(o) === '[object Object]') {
        let newO = Object.assign({}, o);
        delete newO[key];
        return newO;
    } else throw new Error('Argument is not an object!');
}