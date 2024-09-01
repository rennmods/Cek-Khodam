function checkKhodam() {
    const name = document.getElementById('nameInput').value.trim();
    const resultDiv = document.getElementById('result');

    // Cek apakah nama kosong
    if (name === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong!</p>";
        return;
    }

    // Daftar nama Khodam
    const khodamNames = [
        "Khodam Naga Tunduk",
        "Khodam Tuyul Bekicot",
        "Khodam Tempe mendoan",
        "Khodam Kerbau",
        "Khodam Kuda laut",
        "Khodam Kutil kuda",
        "Khodam Zeus999",
        "Khodam Elang petir",
        "Khodam Wewe gombal",
        "Khodam Rawa rontek",
        "Khodam Nyi blorong",
        "Khodam Lele semok",
        "Khodam Lampu sakti",
        "Khodam Kuda kudaan",
        "Khodam Masako ayam",
        "Khodam Ayam silet",
        "Khodam Upin ipin",
        "Khodam Mentega telur",
        "Khodam Mawar melati",
        "Khodam Ambatukam",
        "Khodam Mas rusdi",
        "Khodam el kila te kontole",
    ];
    
    // Tentukan apakah khodam hadir
    const khodamPresent = Math.random() > 0.9;

    if (khodamPresent) {
        // Pilih khodam secara acak
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = `<p style='color: green;'>${name}, Kamu memiliki khodam ${khodamName} yang melindungi kamu!</p>`;
    } else {
        resultDiv.innerHTML = `<p style='color: red;'>${name}, maaf kamu tidak memiliki khodam.</p>`;
    }
}