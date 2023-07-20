function tampilBMI(){
    document.getElementById("hide").style.display = "block";

    let beratBadan = document.getElementById("berat").value ;
    let tinggiBadan = document.getElementById("tinggi").value ;
    let tinggiBadanMeter = tinggiBadan/100
    let bmi = (beratBadan/(tinggiBadanMeter*tinggiBadanMeter));

    var rounded = (Math.round(bmi * 100)/100).toFixed(2);
    console.log(rounded)
    if (rounded<18.5){
        document.getElementById("keterangan-beratbadan").value="Kekurangan Berat Badan";
        document.getElementById("angka-bmi").value=rounded;
        document.getElementById("keterangan-bmi").value="Anda kekurangan berat badan";
        document.getElementById("penjelasan1").value="Hasil BMI anda berada dibawah 18,5"
        document.getElementById("penjelasan2").value="Anda berada dalam kategori kekurangan berat badan"
        document.getElementById("penjelasan3").value="Cara terbaik untuk menaikkan berat badan adalah dengan cara menambah kalori makanan yang dikonsumsi dan berolahraga"
        document.getElementById("penjelasan4").value="Jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menaikkan berat badan anda hingga batas normal"

    }
    else if (18.5<rounded<24.9){
        document.getElementById("keterangan-beratbadan").value="Normal (Ideal)";
        document.getElementById("angka-bmi").value=rounded;
        document.getElementById("keterangan-bmi").value="Berat badan anda normal";
        document.getElementById("penjelasan1").value="Hasil BMI anda berada diantara 18,5 dan 24,9"
        document.getElementById("penjelasan2").value="Anda berada dalam kategori berat badan normal"
        document.getElementById("penjelasan3").value="Anda sudah memiliki berat badan yang sesuai dengan tinggi anda, jagalah kalori makanan yang anda konsumsi dan berolahraga secara rutin agar tetap fit"
        document.getElementById("penjelasan4").value="Jika BMI anda berada dalam kategori ini, anda telah memiliki berat badan yang ideal"
    }
    else if (25.0<rounded<29.9){
        document.getElementById("keterangan-beratbadan").value="Berat Badan Berlebih";
        document.getElementById("angka-bmi").value=rounded;
        document.getElementById("keterangan-bmi").value="Anda memiliki berat badan berlebih";
        document.getElementById("penjelasan1").value="Hasil BMI anda berada diantara 25 dan 29,9"
        document.getElementById("penjelasan2").value="Anda berada dalam kategori berat badan berlebih"
        document.getElementById("penjelasan3").value="Cara terbaik untuk menaikkan berat badan adalah dengan cara mengurangi dan mengatur kalori makanan yang dikonsumsi dan berolahraga"
        document.getElementById("penjelasan4").value="Jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menurunkan berat badan anda hingga batas normal"
    }
    else if (rounded >= 30.0){
        document.getElementById("keterangan-beratbadan").value="Kegemukan (Obesitas)";
        document.getElementById("angka-bmi").value=rounded;
        document.getElementById("keterangan-bmi").value="Anda termasuk kedalam penderita obesitas";
        document.getElementById("penjelasan1").value="Hasil BMI anda berada diatas 30"
        document.getElementById("penjelasan2").value="Anda berada dalam kategori obesitas"
        document.getElementById("penjelasan3").value="Kunjungi tenaga medis terdekat untuk pertolongan pertama, cara terbaik untuk menaikkan berat badan adalah dengan cara mengurangi dan mengatur kalori makanan yang dikonsumsi dan berolahraga"
        document.getElementById("penjelasan4").value="Jika BMI anda berada dalam kategori ini, maka anda dianjurkan untuk menurunkan berat badan anda hingga batas normal dan mengunjungi tenaga medis untuk perawatan lebih lanjut"
    }
}

function reset(){
    window.location.reload();
}