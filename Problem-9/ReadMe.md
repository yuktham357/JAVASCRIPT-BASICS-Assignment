**WHY THIS WORKS**
JavaScript stores numeric keys (like "2", "10") first in ascending numeric order, then the rest in insertion order.
for...in and Object.keys() follow this order in modern engines.