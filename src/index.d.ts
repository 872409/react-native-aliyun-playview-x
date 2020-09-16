import {DeviceEventEmitterStatic} from 'react-native';


export type OnUploadSucceed = (data: any) => void;
export type OnUploadFailed = (data: any) => void;
export type OnUploadProgress = (data: any) => void;
export type OnUploadTokenExpired = (data: any) => void;
export type OnUploadRerty = (data: any) => void;
export type OnUploadRertyResume = (data: any) => void;
export type OnUploadStarted = (data: any) => void;


interface File {
    path: string
    type: string
    title: string
    desc: string
    cateId: number
    tags: string
}

interface InitParams {
    videoId: string
    uploadAuth: string
    uploadAddress: string
}

interface AliyunVodFileUploadInterface {
    init(init: InitParams, callback: (result: any) => void): void

    addFile(file: File): void

    deleteFile(index: number): void

    clearFiles(): void

    listFiles(callback: (files: File[]) => void): void

    cancelFile(index: number): void

    start(): void

    stop(): void

    pause(): void

    resume(): void
}

export const AliyunVodFileUpload: AliyunVodFileUploadInterface;
export const AliyunVodFileUploadEmitter: DeviceEventEmitterStatic;
export const AliyunVodVideoUploadEmitter: DeviceEventEmitterStatic;
