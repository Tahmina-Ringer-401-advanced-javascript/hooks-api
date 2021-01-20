import React from 'react';
import Model from '../models/model';

const model = new Model();
const express = require('express');

const router = express.Router();

//RESTful routes
router.get('/todo', _getTodoItems);
router.post('/todo', _addItem);
router.put('/todo/:id', _toggleComplete);
router.delete('/todo/:id', _deleteItem);


function _getTodoItems(req, res) {
  const allItem = model.get();
  res.status(200).json(allItem);
}

function _addItem(req, res) {
  const obj = req.body;
  const newItem = model.create(obj);
  res.status(200).json(newItem);
}

function _toggleComplete(req, res) {
  const item = req.params.id;
  model.update(req.params.id, req.body);
  res.status(200).json(item);
}

function _deleteItem(req, res) {
  model.delete(req.params.id);
  res.status(200).json('deleting list item');
}


export default {_getTodoItems, _addItem, _toggleComplete, _deleteItem};