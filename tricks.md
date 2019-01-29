### href property for div
```
<div style="cursor: pointer;" onclick="window.location='http://google.com';">
    Hello world
</div>
```


### CSS align one item right with flexbox

To align one flex child to the right set it with `margin-left: auto;`

![flex auto](https://user-images.githubusercontent.com/16288226/51912209-bd397900-23f9-11e9-8965-ca493b373ac5.PNG)

```
nav > ul {
  display: flex;
}
nav > ul > #login {
  margin-left: auto;
}
```

```
<nav>
  <ul>
    <li><a href=/about>About</a>
    <li><a href=/projects>Projects</a>
    <li><a href=/interact>Interact</a>
    <li id="login"><a href=/login>Login</a>
  </ul>
</nav>
```
