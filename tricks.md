### href property for div
```
<div style="cursor: pointer;" onclick="window.location='http://google.com';">
    Hello world
</div>
```


### CSS align one item right with flexbox

To align one flex child to the right set it with `margin-left: auto;`

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
