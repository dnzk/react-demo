import axios from 'axios';

let model = {};
let temporaryBoxForZoom = {};

export function setBackdropDetails(data) {
  temporaryBoxForZoom = data;
}

export function getBackdropDetails() {
  return temporaryBoxForZoom;
}

export function getResource(resource) {
  let page = 1;
  let cached = model[resource];
  if (cached) {
    let last = cached[cached.length - 1];
    console.log(last);
  }
  return axios.get(`http://swapi.co/api/${resource}/?page=${page}`)
}

export function setModel(newModel) {
  Object.assign(model, newModel);
}

export function getModel(key) {
  if (key) {
    return model[key];
  }
  return model;
}
