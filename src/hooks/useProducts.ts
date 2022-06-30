import { useEffect, useState } from 'react';
import { productsApi } from '../api/productsApi';
import { ProductsInterface, Product } from '../interfaces';

export const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const [isLoading, setisLoading] = useState(true);


    const loadProducts = async () => {
        try {
            const resp = await productsApi.get<ProductsInterface>(`/products`);
            setProducts(resp.data.products);
            setisLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        isLoading,
        loadProducts
    }

}