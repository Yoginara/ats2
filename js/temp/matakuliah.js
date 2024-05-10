export function generateMatakuliahTable(matakuliah) {
  return `
        <td>
            <span class="fw-normal">${matakuliah.nama_matakuliah}</span>
        </td>
        <td>
            <span class="fw-normal">${matakuliah.deskripsi}</span>
        </td>
        <td>
            <span class="fw-normal">${matakuliah.jumlah_sks}</span>
        </td>
        <td>
            <span class="fw-normal">${matakuliah.semester}</span>
        </td>
    `;
}
