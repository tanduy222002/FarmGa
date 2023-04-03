import { View, Text , StyleSheet } from 'react-native'
import { default as MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as AntDesignIcon }  from 'react-native-vector-icons/AntDesign'
import Button from './Button'

const DeviceInfo = ({mode, name, duration, level, onPress}) => {
    return (
        <View style={device.container}>
            <View style={device.title}>
                <MaterialCommunityIcon style={device.title.bold} name="water-pump" size={25}/>
                <Text style={device.title.bold}>{name}</Text>
            </View>
            <Text style={device.item}>Duration: {duration} minute</Text>
            <Text style={device.item}>Level: {level}</Text>
            <Text style={device.item}>Mode: {mode}</Text>
            <Button 
                icon={<AntDesignIcon name="edit" size={15} color="#ffffff"/>}
                textContent="Chỉnh sửa"
                bg="#fde047"
                borderColor="#facc15"
                onPressFunction={onPress}
            />
        </View>
    )
}

const device = StyleSheet.create({
    container: {
        borderColor: "#94a3b8",
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        width: 150,
        borderRadius: 5,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        bold: {
            color: "#0284c7",
            fontWeight: 600
        }
    },
    item: {
        color: "#64748b"
    }
})

export default DeviceInfo

