document.addEventListener('DOMContentLoaded', () => {
    const wargaListContainer = document.getElementById('warga-list-container');
    const apiUrl = 'http://127.0.0.1:8000/api/warga/';

    function renderWarga(warga) {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.padding = '10px';
        div.style.marginBottom = '10px';

        div.innerHTML = `
            <h3>${warga.nama_lengkap}</h3>
            <p>NIK: ${warga.nik}</p>
            <p>Alamat: ${warga.alamat}</p>
        `;

        return div;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            wargaListContainer.innerHTML = '';
            data.results.forEach(warga => {
                wargaListContainer.appendChild(renderWarga(warga));
            });
        })
        .catch(error => {
            wargaListContainer.innerHTML = '<p>Gagal memuat data</p>';
            console.error(error);
        });
});

const form = document.getElementById('warga-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ISI_TOKEN_ADMIN_KAMU'
        },
        body: JSON.stringify({
            nik: document.getElementById('nik').value,
            nama_lengkap: document.getElementById('nama').value,
            alamat: document.getElementById('alamat').value,
            no_telepon: document.getElementById('telepon').value
        })
    })
    .then(res => res.json())
    .then(() => location.reload())
    .catch(err => console.error(err));
});
