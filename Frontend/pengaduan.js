document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('pengaduan-list');
    const apiUrl = 'http://127.0.0.1:8000/api/pengaduan/';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = '';

            // ✅ WAJIB pakai data.results karena pagination
            if (data.results.length === 0) {
                container.innerHTML = '<p>Belum ada pengaduan.</p>';
                return;
            }

            data.results.forEach(pengaduan => {
                const div = document.createElement('div');
                div.style.border = '1px solid #ccc';
                div.style.padding = '10px';
                div.style.marginBottom = '10px';

                div.innerHTML = `
                    <h3>${pengaduan.judul}</h3>
                    <p>${pengaduan.deskripsi}</p>
                    <p><strong>Status:</strong> ${pengaduan.status}</p>
                `;

                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error(error);
            container.innerHTML = '<p>Gagal memuat data pengaduan</p>';
        });
});
