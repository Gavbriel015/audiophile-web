import data from '@/../../public/data.json';

export default function getFilteredProducts(category) {

    const products = data.slice(1);
    const filteredProducts = products.filter(product => product.category.name === category)

    return filteredProducts
}