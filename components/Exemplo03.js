import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Exemplo03 = () => {
    const botaoClique = () => {
        console.log("Cliquei")
    }
    return (
        <View style={styles.container}> 
            <TouchableOpacity
                style={styles.botao}
                onPress={botaoClique}
                activeOpacity={0.4}
            >
                <Text style={styles.botaoTexto}>
                    Clique aqui!
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    botao : {
        backgroundColor : 'blue',
        padding : 10,
        borderRadius : 5,

    },
    botaoTexto : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold',
    }
})

export default Exemplo03