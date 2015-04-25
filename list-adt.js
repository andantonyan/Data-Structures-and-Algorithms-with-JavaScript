// listSize (property)      Number of elements in list
// pos (property)           Current position in list
// length (property)        Returns the number of elements in list
// 
// clear (function)         Clears all elements from list
// toString (function)      Returns string representation of list
// getElement (function)    Returns element at current position
// insert (function)        Inserts new element after existing element
// append (function)        Adds new element to end of list
// remove (function)        Removes element from list
// front (function)         Sets current position to first element of list
// end (function)           Sets current position to last element of list
// prev (function)          Moves current position back one element
// next (function)          Moves current position forward one element
// currPos (function)       Returns the current position in list
// moveTo (function)        Moves the current position to specified position

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
};

List.prototype.append = function(element) {
    this.dataStore[this.listSize++] = element;
};

List.prototype.find = function(element) {
    for (var i=this.dataStore.length; i--;) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
};

List.prototype.remove = function(element) {
    var foundAt = this.find(element);

    if (foundAt !== -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
};

List.prototype.length = function() {
    return this.listSize;
};

List.prototype.toString = function() {
    return this.dataStore;
};

List.prototype.insert = function(element, after) {
    var insertPos = this.find(element);
    
    if (insertPos !== -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};

List.prototype.clear = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
};

List.prototype.contains = function(element) {
    for (var i=this.dataStore.length; i--;) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
};

List.prototype.front = function() {
    this.pos = 0;
};

List.prototype.end = function() {
    this.pos = this.listSize -1;
};

List.prototype.prev = function() {
    if (this.pos > 0) {
        --this.pos;
    }
};

List.prototype.next = function() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
};

List.prototype.currPos = function() {
    return this.pos;
};

List.prototype.moveTo = function(position) {
    this.pos = position;
};

List.prototype.getElement = function() {
    return this.dataStore[this.pos];
};