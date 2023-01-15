|                          | |  |   |   |
| --------------------------------------- | -------- | ---------- |---------- |---------- |
| <a href="https://www.npmjs.com/package/react-native-toggle-input">![NPM VERSION](https://img.shields.io/npm/v/react-native-toggle-input?style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react-native-toggle-input">![NPM WEEKLY DOWNLOADS](https://img.shields.io/npm/dw/react-native-toggle-input?color=%232CA215&label=WEEKLY%20DOWNLOADS&style=for-the-badge)</a> | <a href="https://github.com/mmusaib/react-native-toggle-input/stargazers">![GITHUB STAR](https://img.shields.io/github/stars/mmusaib/react-native-toggle-input?label=Give%20Us%20A%20Star&style=for-the-badge)</a> | <a href="https://www.youtube.com/channel/UCSwIR2KBHiqiProH3Me8IZQ">![YOUTUBE VIEWS](https://img.shields.io/youtube/channel/views/UCSwIR2KBHiqiProH3Me8IZQ?label=YOUTUBE%20VIEWS&style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react-native-toggle-input">![NPM LIFETIME DOWNLOADS](https://img.shields.io/npm/dt/react-native-toggle-input?color=%232CA215&style=for-the-badge)</a>

<br>

<h1 align="center">
  🔛 React Native Custom Toggle Input
</h1>

<div align="center">

🟢 Customizable React Native Toggle Switch with easy to use props"

<a href="https://twitter.com/_mmusaib" target="_blank">
<img src="https://i.imgur.com/CAnbdwP.png" width="250" />
</a>
</div>


<p align="center">
  <kbd>
    <img
      src="https://i.imgur.com/TFqRrYs.gif"
      title="Toggle Input Demo"
    >
  </kbd>
  <br>
  <em>Toggle Input Demo</em>
</p>



<h4>Customizable and <b>Easy</b> to use toggle switch.</h4>

-   Use the color of your choice
-   Use bordered or filled toggle switch upon your choice
-   Works on all the platforms Android, Ios and Web in the same way
-   Zero dependencies



# Compatibility


|  iOS  | Android | Web | Expo |
--------|---------|-----|------|
|  ✅  |    ✅    | ✅ |  ✅  |




# 🔌 Installation

```sh
$ npm install react-native-toggle-input

```

OR

```sh
$ yarn add react-native-toggle-input
```


# 😎 Basic Usage
```jsx
import Toggle from 'react-native-toggle-input'

const App = () => {

  const [toggle, setToggle] = React.useState(false);
  

  return(
    <Toggle toggle={toggle} setToggle={setToggle} />
  )

};
```


For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-toggle-input)

# ⭐ Props
| Name | Type | Description |
| ---- | ---- | ----------- |
| color | String | Color of the toggle switch (Optional)
| size | Number | Size of the toggle switch (Optional)
| filled | boolean | If you want to use filled toggle switch set it to true (Optional)
| circleColor | String | Use the color you want to give to the circle inside swith (Required for filled switch)
| toggle | boolean | Default value of the toggle switch (Required)
| setToggle | Function | Pass the function that will be used to set toggle status (Required)
| onTrue | Function | Pass the function that will executed after the switch has been turned on
| onFalse | Function | Pass the function that will executed after the switch has been turned off


# 😎 Advanced Usage
```jsx
import Toggle from 'react-native-toggle-input'

const App = () => {

  const [toggle, setToggle] = React.useState(false);
  

  return(
    <Toggle 
        color={"#4C956C"}
        size={30}
        filled={true}
        circleColor={"white"}
        toggle={toggle}
        setToggle={setToggle}
    />
  )

};
```

<p align="center" >
  <kbd>
    <img
      src="https://i.imgur.com/6lzF8ux.gif"
      title="Toggle Input Filled Demo"
    >
  </kbd>
  <br>
  <em>Toggle Input Filled Demo</em>
</p>


# ▶️ Watch Tutorial Video

[![Watch video](https://i.imgur.com/3ovVT8T.png)](https://youtu.be/_MemajXfkMw&t=15s)


For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-toggle-input)





