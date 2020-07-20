import {Dimensions,Platform} from 'react-native'  // dimention allows us to height like things
// platform is allowed us to android or ios

let headerHeight=Platform.OS==='ios'?66:46
let footerHeight=55

const Constants={
    headerHeight:headerHeight,
    footerHeight:footerHeight,
    viewHeight:Dimensions.get('window').height - headerHeight,
    screenHeight:Dimensions.get('window').height,
    screenwidth:Dimensions.get('window').width

}

export default Constants  // c can be capital
