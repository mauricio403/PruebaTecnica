import React from 'react';
import { FlatList } from 'react-native';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useProducts } from './src/hooks';
import ProductCard from './src/components/ProductCard';



const App = () => {

  const { isLoading, products } = useProducts();


  return (
    <View>
      {
        isLoading ?
          (
            <View style={styles.loadingContainer}>
              <Text style={{ fontSize: 20 }}>Cargando...</Text>
              <ActivityIndicator size={65} animating={true} />
            </View>
          )
          : (
            <View style={styles.containerFlatList}>
              <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard producto={item}></ProductCard>}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                numColumns={2}
                ListHeaderComponent={() => <Text style={styles.titleText}>Productos ({products.length})</Text>}
                showsVerticalScrollIndicator={false}
                ListFooterComponent= {() => <Text style={styles.titleFooter}>Fin de la lista</Text>}
              />
            </View>
          )
      }
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
    paddingVertical: 10
  },
  titleFooter: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
    paddingVertical: 10
  },
  loadingContainer: {
    marginTop: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFlatList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

})


export default App;
