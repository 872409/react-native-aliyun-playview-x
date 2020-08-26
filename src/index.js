import { NativeModules, NativeEventEmitter } from 'react-native'
import AliyunPlayView from './AliyunPlayView'
const { AliyunVodFileUpload, AliyunVodVideoUpload } = NativeModules

export const AliyunVodFileUploadEmitter = new NativeEventEmitter(AliyunVodFileUpload)

export {
  AliyunPlayView,
  AliyunVodFileUpload,
  AliyunVodVideoUpload
}
