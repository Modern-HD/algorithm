function solution(new_id) {
    let newId = new_id.toLowerCase();
    newId = newId.replaceAll(/[^a-z|0-9|\-|_|.]/g, '');
    newId = newId.replaceAll(/\.+/g, '.');
    if (newId.charAt(0) === '.') newId = newId.substring(1);
    if (newId.charAt(newId.length - 1) === '.') newId = newId.substring(0, newId.length - 1);
    if (newId === '') newId = 'a';
    if (newId.length >= 16) newId = newId.substring(0, 15);
    if (newId.charAt(newId.length - 1) === '.') newId = newId.substring(0, newId.length - 1);
    if (newId.length <= 2) newId += newId.charAt(newId.length - 1).repeat(3 - newId.length);
    return newId;
}
