/**
 * Immutable
 * 
 * A bare-bones immutable linked list module.
 * 
 * @author Sam Olaogun
 */
'use strict';

/**
 * Constructor function — transforms the primitive array.
 * 
 * @param {Object[]} store - Array that stores the transformed data.
 * @param {number} [position=0] - Position property, zero by default.
 */
function Immutable(store, position) {
    this.store = [];
    this.position = position || 0;

    store.forEach(value => {
        if (!this.includes(value)) {
            const node = {
                value: value,
                next: null
            }

            let p;
            if (p = this.peek()) p.next = node;
            this.store.push(node);
        }
    });

    Object.freeze(this.store);
}

Immutable.prototype = {
    includes: function(val) { return !this.store.every(i => i != val); },
    peek: function() { return this.store[this.store.length - 1]; },
    next: function() { return this.store[++this.position].value || -1; },
    front: function() { this.position = 0; },
    back: function() { this.position = this.store.length - 1; },
    getElement: function() { return this.store[this.position]; },
    moveTo: function(pos) { this.position = pos; },
    length: function() { return this.length; }
}

module.exports = Immutable;