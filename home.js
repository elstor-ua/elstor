// Функция для загрузки товаров
async function loadProducts() {
    try {
        // 1. Получаем данные из нашего JSON файла
        const response = await fetch('./products.json');
        const products = await response.json();

        // 2. Находим контейнер в HTML, куда будем вставлять товары
        const container = document.getElementById('products-container');
        
        // Очищаем надпись "Загрузка..."
        container.innerHTML = '';

        // 3. Проходимся циклом по каждому товару
        products.forEach(product => {
            // Создаем HTML-разметку для карточки
            const productHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <div class="price">${product.price} ₽</div>
                        <a href="${product.link}" class="buy-button">Купить</a>
                    </div>
                </div>
            `;

            // Добавляем готовую карточку в контейнер
            container.insertAdjacentHTML('beforeend', productHTML);
        });

    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        document.getElementById('products-container').innerHTML = 'Не удалось загрузить товары.';
    }
}

// Запускаем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', loadProducts);
