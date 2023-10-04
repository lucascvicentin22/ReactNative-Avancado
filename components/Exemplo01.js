const { View, Button, Alert, TouchableHighlight, Text } = require("react-native")

const Exemplo01 = () => {

    const cliquei = () => {
        Alert.alert("Cliquei no botão comun")
    }

    const cliqueiDois = () => {
        console.log("Cliquei no botão Dois")
    }
    return (
        <View>
            <Button 
                title="Clique aqui(Botão comun)"
                onPress={cliquei}
            />

            <View style={{margin : 10}}></View>

            <TouchableHighlight underlayColor="lightgray" onPress={cliqueiDois}>
                <Text>Clique aqui(botão Highlight)</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Exemplo01