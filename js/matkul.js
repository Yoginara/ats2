import { getMatakuliah } from './controller/getmatakuliah.js';

function loadIndex() {
  getMatakuliah();
}

window.onload = loadIndex;
