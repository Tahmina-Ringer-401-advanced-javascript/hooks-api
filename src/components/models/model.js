import React from 'react';

class Model {
  constructor(name){
    this.id = 0;
    this.name = name;
    this.db = [];
  }

  get(id){
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update(id, obj) {
    if (!id || id > this.db.length) {
      return null;
    } else {
      obj.id = id;
      this.db[id-1].name = obj.name;
      return obj;
    }
  }

  delete(id) {
    if(!id) { return null; }
    this.db = this.db.filter(function deleteDBitems(record) {
      return parseInt(record.id) !== parseInt(id);
    });
    return null;
  }  
  
}

export default Model;