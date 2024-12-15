document.getElementById("dl-button").addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = "kewl.apk";
    a.download = "ScaryCatFarm.apk";
    a.click();
});
document.getElementById('lays').addEventListener('click', () => {
    window.open('https://bagoflays.github.io')
})