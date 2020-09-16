import { NativeModules, NativeEventEmitter } from 'react-native'
import AliyunPlayView from './AliyunPlayView';
import AliyunVod      from './AliyunVod';

const {AliyunVodFileUpload} = NativeModules;

export const AliyunVodFileUploadEmitter = new NativeEventEmitter(AliyunVodFileUpload);

export {
    AliyunPlayView,
    AliyunVod
};
