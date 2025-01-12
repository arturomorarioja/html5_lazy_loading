/**
 * Web performance example: lazy loading of images
 * 
 * @author  Arturo Mora-Rioja (amri@kea.dk)
 * @version 1.0.0, December 2022
 * @version 1.0.1, January 2024. Refactoring
 */
'use strict';

console.log('DOM content fully loaded');

console.log('First image loading status: ' + document.querySelector('img:first-of-type').complete);
console.log('Last image loading status: ' + document.querySelector('img:last-of-type').complete);

setTimeout(() => {
    console.log('Wait for half a second...');
    console.log('First image loading status: ' + document.querySelector('img:first-of-type').complete);
    console.log('Last image loading status: ' + document.querySelector('img:last-of-type').complete);    
}, '500');