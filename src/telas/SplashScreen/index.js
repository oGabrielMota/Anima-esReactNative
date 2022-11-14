import { View } from 'react-native';
import styles from './styles';

import LottieView from 'lottie-react-native'
import SplashAlura from '../../assets/splash-aluramed.json'

export default function SplashScreen({ navigation}){

    function animacaoFinalizada(){
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding'}]
        });
    }
    return (
        <View style={styles.container}>
            <LottieView source={SplashAlura} loop={false} autoPlay={true} onAnimationFinish={animacaoFinalizada}/>
        </View>
    )
}