import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";


render(){
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                        ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                </View>
            </View>
    );
}

export default PostCard;



