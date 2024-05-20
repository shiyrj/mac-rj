const searchInput = document.getElementById('searchInput');
const dropdownMenu = document.getElementById('dropdown');
const options = [
    { text: 'Photoshop（ps）2024', url: 'https://pan.xunlei.com/s/VNtV4537bKFO6WXQ0riFUqqMA1?pwd=36fd#' },

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