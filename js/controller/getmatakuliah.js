import { matakuliahhero } from '../config/url.js';
import { generateMatakuliahTable } from '../temp/matakuliah.js';

function displayMatkul(matkulData) {
  const tableBody = document.getElementById('tabelmatkul');
  tableBody.innerHTML = '';

  matkulData.forEach((matkul) => {
    const row = document.createElement('tr');
    row.className = 'bg-white border-b dark:bg-zinc-800 dark:border-zinc-700';
    row.innerHTML = generateMatakuliahTable(matkul);
    tableBody.appendChild(row);
  });
}

export function getMatakuliah() {
  console.log('Fetching Mahasiswa Data...');
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(matakuliahhero, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log('Fetched Mahasiswa Data:', data.data);
      displayMatkul(data.data);
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
    });
}
