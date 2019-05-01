import {Component} from "react";
import {SafeAreaView, TouchableHighlight, View,Text, Image} from "react-native";
import ImageSlider from 'react-native-image-slider';
import * as React from "react";
import {styles} from "./shSlider";

export class Slider extends Component<{}> {
    render() {
        const images = [
            require("../../assets/images/catalogs/slideImg1.jpg"),
            require("../../assets/images/catalogs/slideImg2.jpg"),
            require("../../assets/images/catalogs/slideImg3.jpg"),
            require("../../assets/images/catalogs/slideImg4.jpg"),
        ];

        return (
            <SafeAreaView>
                <ImageSlider
                    // autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View key={index} style={[style, styles.imageContainer]}>
                            <Image style={{width: 360, height: 120}} source={item}/>
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.buttonContainer}>
                            {images.map((image, index) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        underlayColor="#ccc"
                                        onPress={() => move(index)}
                                    >
                                        <Text >
                                            {index + 1}
                                        </Text>
                                    </TouchableHighlight>
                                );
                            })}
                        </View>
                    )}
                />
            </SafeAreaView>
        );
    }
}
