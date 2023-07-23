module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx'],
        alias: {
          Component: './src/Component',
          Common: './src/Component/Common',
          Assets: './src/Assets',
          src: './src',
        },
      },
      'react-native-reanimated/plugin',
    ],
    'react-native-reanimated/plugin',
  ],
};
