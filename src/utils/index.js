export const filterProducts = (products, json) => {
    // Проверяем наличие списка продуктов и его тип
    if (!Array.isArray(products)) {
        console.error('Products is not an array');
        return [];
    }

    const productIdsWithCounts = json.products.reduce((acc, item) => {
        acc[item.product_id] = item.count;
        return acc;
    }, {});

    return products
        .filter(product => productIdsWithCounts.hasOwnProperty(product.id) && productIdsWithCounts[product.id] > 0)
        .map(product => ({
            ...product,
            count: productIdsWithCounts[product.id]
        }));
};
