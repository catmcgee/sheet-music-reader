import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Swiper from 'react-native-swiper'

const ImageSwiper = (props) => {
    const { images } = props
    return (
        <Swiper removeClippedSubviews={false} dotColor={'white'} showsButtons={true}>
            {images.map((image) => {
                return (
                    <View style={styles.imageContainer}>
                        <Image resizeMode='stretch' style={styles.image} source={{uri: image}} />
                    </View>
                )
            })}
        </Swiper>
    )
}

export default ImageSwiper

const styles = StyleSheet.create({
    swiperContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
