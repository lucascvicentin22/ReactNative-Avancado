const { useState } = require("react")
const { PanResponder, View, StyleSheet } = require("react-native")

const Exemplo06 = () => {
    const [tamanho, setTamanho] = useState({width : 100, height : 100})
    const [topLeft, setTopLeft] = useState({x : 50, y : 50})

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder : () => true,
        onMoveShouldSetPanResponder : () => true,
        onPanResponderMove : (event, gestureStart) => {
            setTamanho({
                    width : gestureState.dx +  tamanho.width,
                    height : gestureState.dy + tamanho.height
            })

        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.centroContainer}>
                    <View 
                    {...panResponder.panHandlers}
                    style={[styles.caixa, {width : tamanho.width, height : tamanho.height}]}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    centroContainer : {
        width : '100%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',

    },
    caixa : {
        backgroundColor : 'blue',
        borderColor : 'white',
        borderWidth : 2
    }
})
export default Exemplo06