import {NativeEventEmitter, NativeModules} from "react-native";


export const AliyunVodFileUploadEmitter  = new NativeEventEmitter(NativeModules.AliyunVodFileUpload);





export default {
    AliyunVodFileUploadEmitter,
};
