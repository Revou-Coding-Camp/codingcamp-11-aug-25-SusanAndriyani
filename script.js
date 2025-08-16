document.getElementById('welcome-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    document.getElementById('welcome-message').textContent = `Halo ${nama}, Selamat datang di Ngombe Kahve`;
});

document.getElementById('contakform').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('name').value;
    const tanggal = document.getElementById('tanggal-lahir').value;
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked')?.value || '';
    const pesan = document.getElementById('pesan').value;

    document.getElementById('message-result').innerHTML = `
        <strong>Hasil Input:</strong><br>
        Nama: ${nama}<br>
        Tanggal Lahir: ${tanggal}<br>
        Jenis Kelamin: ${jenisKelamin}<br>
        Pesan: ${pesan}
    `;
});
