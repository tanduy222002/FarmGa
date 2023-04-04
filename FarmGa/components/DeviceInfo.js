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
            {duration > 0 
                ? <Text style={device.item}>Duration: <Text style={device.set}>{`${duration} minute`}</Text></Text> 
                : <Text style={device.item}>Duration: <Text style={device.notset}>Not set</Text></Text>
            }
            {level != -1 
                ? <Text style={device.item}>Level: <Text style={device.set}>{`${level}`}</Text></Text> 
                : <Text style={device.item}>Level: <Text style={device.notset}>Not set</Text></Text>
            }
            {mode != -1 
                ? <Text style={device.item}>Mode: <Text style={device.set}>{`${mode}`}</Text></Text> 
                : <Text style={device.item}>Mode: <Text style={device.notset}>Not set</Text></Text>
            }

            <Button 
                icon={<AntDesignIcon name="edit" size={15} color="#ffffff"/>}
                textContent="Edit"
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
        color: "#000000",
        fontWeight: 600,
    },
    set: {
        color: "#64748b",
        fontWeight: 600,
        fontStyle: "italic"

    },
    notset: {
        color: "#dc2626",
        fontSize: 14,
        fontWeight: 500,
        fontStyle: "italic"
    }
})

export default DeviceInfo

