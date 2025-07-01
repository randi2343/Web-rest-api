
// Simulasi fetch dari REST API (static)
const apiData = {
  nama: "Randi Suci",
  umur: 19,
  warnaMusim: "Deep Autumn",
  email: "randi@example.com"
};

window.onload = function () {
  const container = document.getElementById("profile-data");
  container.innerHTML = `
    <h2>Data Profil</h2>
    <p><strong>Nama:</strong> ${apiData.nama}</p>
    <p><strong>Umur:</strong> ${apiData.umur}</p>
    <p><strong>Warna Musim:</strong> ${apiData.warnaMusim}</p>
    <p><strong>Email:</strong> ${apiData.email}</p>
  `;
};


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
