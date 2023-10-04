const { useState } = require("react")
const { StyleSheet, View, PanResponder } = require("react-native")

const Exemplo05 = () => {

    const [posicao, setPosicao] = useState({x : 100, y: 100})

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true, // Habilita recurso de gestos
        onMoveShouldSetPanResponder : () => true, // Habilita atualização de gestos
        onPanResponderMove : (event, gestureState) => {
            setPosicao({
                x : gestureState.moveX - 250,
                y : gestureState.moveY - 20
            })
        }
    })
    return(
        <View style={styles.container}>
            <View 
                {...panResponder.panHandlers}
                style={[styles.caixa, {top : posicao.y, left : posicao.x}] }/>
        </View>
    )
}
    
    const styles = StyleSheet.create({
        container : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',

        },
        caixa : {
            width : 50,
            height : 50,
            backgroundColor : 'blue',
            position : 'absolute'
        }
    })

    export default Exemplo05