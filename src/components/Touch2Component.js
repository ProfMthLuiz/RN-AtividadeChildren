import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Touch2Component({children}) {
  return (
      <TouchableOpacity style={styles.btn} onPress={() => alert("Sign In!")}>
        {children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn:{
    // Estilo geral do TouchableOpacity
    backgroundColor: 'white',    // Cor de fundo do TouchableOpacity
    padding: 10,                 // Preenchimento interno
    width: 700,                 // Largura do TouchableOpacity
    height: 150,                  // Altura do TouchableOpacity
    alignItems: 'center',        // Alinhamento dos itens no eixo transversal
    justifyContent: 'center',    // Alinhamento dos itens no eixo principal
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomColor: '#390879',
    borderRightColor: '#390879',
    borderTopColor: '#b8df10',
    borderLeftColor: '#b8df10',
    marginBottom: 20,
  }
});
