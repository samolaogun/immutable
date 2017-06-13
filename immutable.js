/**
 * Immutable
 * 
 * @author  Sam Olaogun
 * @license MIT
 */
'use strict';

/**
 * @param {Object[]} store          Array that stores the transformed data.
 * @param {number}   [position=0]   Position property, zero by default.
 */
function Immutable (store, position) {
    this.store = [];
    this.position = position >>>= 0;
    
    store.forEach(value => {
        if (!this.includes(value))
            this.store.push({
                value: value,
                next: ~this.next() ? null : this.next()
            });
        
        this.position++;
    });
  
    this.position = position;
    Object.freeze(this.store);
};

Immutable.prototype = {
    includes: val => !this.store.every(i => i !== val),
    peek: () => this.store[this.store.length - 1],
    next: () => this.store[++this.position].value || -1,
    front: () => this.position = 0,
    back: () => this.position = this.store.length - 1,
    getElement: () => this.store[this.position],
    moveTo: pos => this.position = pos,
    length: () => this.length
};

module.exports = Immutable;
