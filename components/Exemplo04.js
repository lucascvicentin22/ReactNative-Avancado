const { Alert, View, TouchableOpacity, Text } = require("react-native")

const Exemplo04 = () => {
    const cliqueLongo = () => {
        Alert.alert("Cliquei Longamente")
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.5} onLongPress={cliqueLongo}>
                <Text>
                    Cliqui aqui2!
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Exemplo04