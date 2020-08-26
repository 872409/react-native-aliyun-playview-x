require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']

  s.authors      = { 'xx' => 'xx@qq.com' }
  s.homepage     = package['homepage']
  s.license      = package['license']
  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/872409/react-native-aliyun-playview-x" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React'
  s.dependency 'VODUpload'
  s.dependency 'AliyunPlayer_iOS/AliyunVodPlayerSDK'
end
