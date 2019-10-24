# Pointofsale
react native project displays list of added Items

Deployment Instructions:
1. change andriod sdk path in android/local.properties file
2. run npm install to install node modules
-to run it in android emulator
  3. run npm start in terminal
  4. run cmd (adb devices) in another terminal to know which emulator device is running now
  5. run cmd (react-native run-android --deviceId emulator_id )
- to run it in physical device
  3. connect usb with device 
  4. add apk file from /android/app/build/outputs/apk/debug/app-depug.apk to you phone
  5. run cmd (adb devices) to know device name
  6. run cmd (adb -s device_name reverse tcp:8081 tcp:8081) to connect it to running server
