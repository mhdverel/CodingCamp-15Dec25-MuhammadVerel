// ==========================================
// FILE JAVASCRIPT UTAMA
// ==========================================

// 1. FUNGSI UNTUK MENAMPILKAN NAMA PENGUNJUNG
// Dijalankan saat halaman selesai dimuat
window.addEventListener('dominited', function () {
    // Cek apakah halaman ini adalah index.html (Home)
    // Kita cek apakah ada element dengan id 'userName'
    var userNameElement = document.getElementById('userName');

    if (userNameElement) {
        // Minta input nama dari user
        var nama = prompt("Halo! Siapa namamu?", "Tamu");

        // Jika user tidak mengisi (Cancel/Empty), beri nama default
        if (nama === null || nama === "") {
            nama = "Teman";
        }

        // Tampilkan nama di HTML
        userNameElement.textContent = nama;
    }
});
// (Koreksi: 'DOMContentLoaded' biasanya lebih baik daripada 'load', tapi 'dominited' itu typo? Tidak, standarnya memang DOMContentLoaded)
// Dengar, mari kita tulis ulang event listener yang benar di bawah ini.

// Event Listener yang benar:
document.addEventListener('DOMContentLoaded', function () {

    // --- BAGIAN 1: WELCOME MESSAGE (HOME) ---
    var userNameElement = document.getElementById('userName');

    // Hanya jalankan jika element ada (artinya kita di halaman Home)
    if (userNameElement) {
        var namaVisitor = prompt("Halo! Boleh tau siapa namamu?", "Pengunjung");

        // Logika sederhana: kalau kosong, jadi 'Pengunjung'
        if (!namaVisitor) {
            namaVisitor = "Pengunjung";
        }

        userNameElement.textContent = namaVisitor;
    }


    // --- BAGIAN 2: VALIDASI FORM MESSAGE US ---
    var messageForm = document.getElementById('messageForm');

    if (messageForm) {
        messageForm.addEventListener('submit', function (event) {
            // Cegah form mengirim data (refresh halaman) secara default
            event.preventDefault();

            // Ambil nilai dari input
            var inputName = document.getElementById('inputName').value;
            var inputEmail = document.getElementById('inputEmail').value;
            var inputMessage = document.getElementById('inputMessage').value;

            // VALIDASI SEDERHANA

            // 1. Cek apakah ada yang kosong
            if (inputName == "" || inputEmail == "" || inputMessage == "") {
                alert("Waduh, semua data harus diisi ya!");
                return; // Stop di sini
            }

            // 2. Cek apakah email valid (harus ada @)
            if (!inputEmail.includes("@")) {
                alert("Hmm, sepertinya format email salah. Harus ada '@' nya.");
                return;
            }

            // JIKA LOLOS VALIDASI
            // Tampilkan data di bawah form
            var resultArea = document.getElementById('formResult');

            // Buat HTML sederhana untuk hasil
            resultArea.innerHTML = `
                <div class="p-4 mt-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    <p><strong>Terima kasih, data berhasil diterima!</strong></p>
                    <p>Nama: ${inputName}</p>
                    <p>Email: ${inputEmail}</p>
                    <p>Pesan: ${inputMessage}</p>
                </div>
            `;

            // Reset form biar bersih lagi
            messageForm.reset();

            alert("Pesan berhasil dikirim! (Ceritanya)");
        });
    }

    // --- BAGIAN 3: MOBILE MENU TOGGLE ---
    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            // Toggle class 'hidden' untuk menampilkan/menyembunyikan menu
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});
