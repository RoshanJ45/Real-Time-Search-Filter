const searchInput = document.getElementById('searchInput');
        const itemList = document.getElementById('itemList');
        const items = itemList.getElementsByTagName('li');


        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase();
            Array.from(items).forEach(function(item) {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });