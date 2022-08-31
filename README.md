

<h1 align="center">
  🔛 React Native Custom Toggle Input
</h1>

<div align="center">

🟢 Customizable React Native Toggle Switch with easy to use props"

</div>




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


For Live `Demo` [(Expo Snack)](https://snack.expo.dev/@mmusaib/react-native-toggle-input)



