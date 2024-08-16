// URL video pertama yang akan ditampilkan saat halaman dimuat
const videoPertama = 'https://canhabsyi.github.io/plyr/?url=https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd&keyId=d84c325f36814f39bbe59080272b10c3&key=550727de4c96ef1ecff874905493580f';

// Atur video pertama saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    gantiVideo(videoPertama);
});

// Fungsi untuk mengganti video di iframe
function gantiVideo(url) {
    var frame = document.getElementById("vidio");
    if (frame) {
        frame.src = url;
    }
}

// Fungsi untuk mengganti video ke sumber SSC1
function ssc1() {
    var frame = document.getElementById("vidio");
    frame.src = "https://canhabsyi.github.io/plyr/?url=https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd&keyId=d84c325f36814f39bbe59080272b10c3&key=550727de4c96ef1ecff874905493580f";
}

// Fungsi untuk mengganti video ke sumber SSC2
function ssc2() {
    var frame = document.getElementById("vidio");
    frame.src = "https://ambontv.my.id/plyr/jw.html?url=https://op-group1-swiftservehd-1.dens.tv/h/h10/index.m3u8?app_type=web&userid=lite&chname=RTV";
}

// Fungsi untuk mengganti video ke sumber SSC3
function ssc3() {
    var frame = document.getElementById("vidio");
    frame.src = "https://ambontv.my.id/plyr/jw.html?url=https://op-group1-swiftservehd-1.dens.tv/h/h10/index.m3u8?app_type=web&userid=lite&chname=RTV";
}
