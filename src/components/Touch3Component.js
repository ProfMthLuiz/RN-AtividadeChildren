import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Touch3Component({children}) {
  return (
      <TouchableOpacity style={styles.btn} onPress={() => alert("Log In!")}>
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
    // Configuração da sombra para iOS
    shadowColor: 'pink',         // Cor da sombra
    shadowOffset: { width: -2, height: 2 },  // Deslocamento da sombra (largura e altura)
    shadowOpacity: 0.90,         // Opacidade da sombra
    shadowRadius: 3.84,          // Raio da sombra (largura do borrão)

    // Configuração da elevação para Android
    elevation: 5,                // Elevação da vista, que cria uma sombra no Android

    // Estilo geral do TouchableOpacity
    backgroundColor: 'white',    // Cor de fundo do TouchableOpacity
    padding: 10,                 // Preenchimento interno
    width: 700,                 // Largura do TouchableOpacity
    height: 150,                  // Altura do TouchableOpacity
    alignItems: 'center',        // Alinhamento dos itens no eixo transversal
    justifyContent: 'center',    // Alinhamento dos itens no eixo principal
    borderWidth: 1,
    borderColor: 'pink'

  }
});
