import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { default as IonIcon } from 'react-native-vector-icons/Ionicons'
import { default as FontAwesomeIcon } from 'react-native-vector-icons/FontAwesome'
import Swipeable from 'react-native-gesture-handler/Swipeable'


const NotifyItem = ({_id, time, message, onDelete}) => {
    return (
        <Swipeable
            renderRightActions={() => rightSwipeAction(onDelete, _id)}
        >
            <View style={item}>
                <View>
                    <IonIcon size={35} name={"time-outline"} color="#0284c7"/>
                </View>
                <View style={item.message.container}>
                    <Text style={item.message.text}>
                        {message}
                    </Text>
                    <Text style={item.time}>
                        {time}
                    </Text>
                </View>
            </View>
        </Swipeable>
  )
}

const rightSwipeAction = (onDelete, id) => {
    return (
        <TouchableOpacity style={item.right.containter} onPress={() => onDelete(id)}>
            <FontAwesomeIcon name="trash-o" size={35} color="#dc2626"/>
        </TouchableOpacity>
    )
}

const item = StyleSheet.create({
    flexDirection: "row",
    gap: 15,
    borderRadius: 5,
    width: 320,
    height: 100,
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    message: {
        container: {
            flex: 1
        },
        text: {
            fontSize: 16,
        }
    },
    time: {
        marginTop: 5,
        fontSize: 13,
        color: "#cbd5e1"
    },
    right: {
        containter: {
            alignItems: "center",
            justifyContent: "center",
        }
    }
})

export default NotifyItem