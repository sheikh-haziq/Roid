## Welcome to Roid

## Installation

Download our [Roid.zip](https://github.com/webyte-group/Roid/tags), put it in **DroidScript/plugins** folder and restart *DroidScript*.

## Usage

```javascript
app.LoadPlugin('Roid');
function OnStart(){
    var Home = app.CreateLayout('Linear','VCenter,FILLXY');
    Home.SetBackColor('#ffffff');
    var text1 = app.CreateText('Home Page');
    Home.AddChild(text1);
    var Login = app.CreateLayout('Linear','VCenter,FILLXY');
    Login.SetBackColor('#ffffff');
    var text2 = app.CreateText('Login Page');
    var btn = app.CreateButton('Next');
    btn.SetOnTouch(()=>{
        app.Roid.navigate('login');
    });
    Login.AddChild(text2);
    Home.AddChild(btn);
    
    app.Roid = new Roid(
    {
        "home":Home,
        "login":Login
     }
    );
    app.Roid.navigate('home');
}

function OnBack(){
    app.Roid.back();
    return false
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/sheikh-haziq/Roid/blob/master/LICENSE)
