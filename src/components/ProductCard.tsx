import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../interfaces'

interface Props {
    producto: Product
}

const ProductCard = ({ producto }: Props) => {
    return (
        <TouchableOpacity style={styles.container} >
            <Image
                source={{
                    uri: producto.thumbnail
                }}
                style={{
                    width: 140,
                    height: 100,
                    borderRadius: 10,
                    marginBottom: 10,
                    marginTop: -15,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
            </Image>
            <Text style={styles.titleText}>{producto.title}</Text>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 5,
        height: 160,
        width: 140,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleText: {
        textAlign: 'center',
        justifyContent: 'center',
    }
})