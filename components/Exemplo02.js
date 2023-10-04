import { useState } from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const Exemplo02 = () => {
    const [botaoPressionado, setBotaoPressionado] = useState(false)

    const botaoCor = botaoPressionado ?'red' : 'blue'

    const aoPressionarBotao = () => {
        setBotaoPressionado(true)
    }
    const aoSoltarBotao = () => {
        setBotaoPressionado(false)
    }
    return (
        <View style={styles.container}>

        <TouchableHighlight 
            style={[styles.botao,{backgroundColor : botaoCor}]}
            onPressIn={aoPressionarBotao}
            onPressOut={aoSoltarBotao}
            underlayColor="red"
            >

            <Text style={styles.botaoTexto}>Clique Aqui</Text>

        </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
    botao : {
        backgroundColor : "blue",
        padding : 10,
        borderRadius : 5
    },
    botaoTexto : {
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold',
        fontStyle : 'italic'
    }
})

export default Exemplo02