/*
 * 2017-07-23
 *
 * This util is to assist in the finding of notes based off of search criteria
 * getNotesBasedOnSearchTags function takes in the string to search and tags returns notes
 * 
 * TODO: simplify this and make it more testable. Combine all the maps into one object. 
 *
 */

import { checkDateRange } from './checkDateRange'

const getNotesBasedOnSearchTags = function(stringToSearch, tagMap, tagNoteMap, tagMap, startDate, endDate) {
  let stringArr = stringToSearch.split("+");
    console.log('searching this many: ' + stringArr.length);
    let tagIds = [];
    let noteSearch = [];
		
    //get tags ids of searched words
    for (let str of stringArr) {
      let x = str.toString().trim();
      let tag = tagMap.get(x);
      if (tag != undefined ) {
      	tagIds.push(tag.id);
      } else {
      	tagIds = false;
        noteSearch = false;
      }
    }

    if (tagIds.length != 0) {
      for (i = 0; i < tagIds.length; i++) {
          let x = tagIds[i];
          const noteIds = tagNoteMap.get(x);
          let noteArr = [];
          
          if (typeof noteIds === "undefined" || noteIds.length === 0) {
              noteSearch = false;
              return noteSearch;
          }
          
          for (let id of noteIds) {
              let fnote = noteMap.get(id);
              if (checkDateRange(fnote.date, startDate, endDate)) {
                noteArr.push(fnote);
              }
          }
        
          if (i === 0) {
        	noteSearch = noteArr;
          } else {
            //if there are more than one search terms and at least one has hits..
            newNoteSearch = [];
        
        	for (let xnote of noteArr) {
          	  for (let ynote of noteSearch) {
            	if(xnote === ynote) {                      
              	  newNoteSearch.push(xnote);
                }
              }
            }
          
            if (newNoteSearch.length != 0) {
              noteSearch = newNoteSearch;
            } else {
          	  noteSearch = false;
            }
        }
      }
   }
   
   return noteSearch;
}