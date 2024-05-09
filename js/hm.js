const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdown');
const options = [
    { text: 'Photoshop（ps）mac版本', url: 'https://pan.xunlei.com/s/VNv2sS24NyQ75WfhSX8Ic53aA1?pwd=fer7#' },
    { text: 'Photoshop（ps）插件一键安装板', url: 'https://pan.xunlei.com/s/VNvrIytOp-_r1h9Ud5e6LjSFA1?pwd=4r5f#' },
    { text: 'Photoshop（ps）2024最新自取版', url: 'https://pan.xunlei.com/s/VNt1XhnDdHhD2rDdBM1ibv3OA1?pwd=wpbt#' },
    { text: 'Photoshop（ps）2024 25.9', url: 'https://pan.xunlei.com/s/VNx3vsv55jaF-jBO8qfJrpFBA1?pwd=2uhe#' },
    { text: 'Photoshop（ps）2024 25.8', url: 'https://pan.xunlei.com/s/VNvgvx1y6108qG8w-hL3gl2pA1?pwd=629g#' },
    { text: 'Photoshop（ps）2024 25.7星空幻想版', url: 'https://pan.xunlei.com/s/VNudomfRgPwovOLJmAkKmZPaA1?pwd=sadh#' },
    { text: 'Photoshop（ps）2024 25.6金龙版', url: 'https://pan.xunlei.com/s/VNt1XsKB6-b6S75iVBIX4TraA1?pwd=3kur#' },
    { text: 'Photoshop（ps）2024 25.6金龙版（免安装版）', url: 'https://pan.xunlei.com/s/VNt1XvFnuKawNMFsbSl19XTsA1?pwd=zhqt#' },
    { text: 'Photoshop（ps）神经滤镜', url: 'https://pan.xunlei.com/s/VNt1XxtmFOY8y3G5Q25ZwmZgA1?pwd=295u#' },
    { text: 'Photoshop（ps）2024', url: 'https://pan.xunlei.com/s/VNtV4537bKFO6WXQ0riFUqqMA1?pwd=36fd#' },
    { text: 'Photoshop（ps）2023', url: 'https://pan.quark.cn/s/f4599a1c6626' },
    { text: 'Photoshop（ps）2022', url: 'https://pan.quark.cn/s/124f058f60c6' },
    { text: 'Photoshop（ps）2021', url: 'https://pan.quark.cn/s/539d9acbf1f9' },
    { text: 'Photoshop（ps）2020', url: 'https://pan.quark.cn/s/adc7be63eea8' },
    { text: 'Photoshop（ps）2019', url: 'https://pan.quark.cn/s/542319b7fd62' },
    { text: 'Photoshop（ps）2018', url: 'https://pan.quark.cn/s/23d9b1c2a207' },
    { text: 'Photoshop（ps）2017', url: 'https://pan.quark.cn/s/5a8dca8af95f' },
    { text: 'Photoshop（ps）CS6', url: 'https://pan.quark.cn/s/d6c76fbf8c17' }
    // ... 其他选项
];

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query.trim() === '') {
        dropdownMenu.innerHTML = '';
        dropdownMenu.style.display = 'none';
        return;
    }
    const filteredOptions = options.filter(option => option.text.toLowerCase().includes(query)).slice(0, 50); // 最多显示5条
    showDropdown(filteredOptions);
});

function showDropdown(options) {
    dropdownMenu.innerHTML = '';
    if (options.length > 0) {
        dropdownMenu.style.display = 'block';
        options.forEach(option => {
            const a = document.createElement('a');
            a.textContent = option.text;
            a.href = '#';
            a.dataset.url = option.url; // 使用data-url属性存储URL
            a.addEventListener('click', function(e) {
                e.preventDefault(); // 阻止默认的链接跳转行为
                const url = this.dataset.url;
                window.location.href = url; // 跳转到对应的URL
                dropdownMenu.innerHTML = '';
                dropdownMenu.style.display = 'none';
            });
            dropdownMenu.appendChild(a);
        });
    } else {
        dropdownMenu.style.display = 'none';
    }
}