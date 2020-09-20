class Roid{
    constructor(routes){
        var self=this;
        app.EnableBackKey(false);
        this.routes=routes;
        this.history=[];
        var view = app.CreateLayout('Frame','FILLXY');
        view.SetBackColor('#ffffff');
        for(var [key,value] of Object.entries(routes)){
            value.SetVisibility('Gone');
            view.AddChild(value);
        }
        app.AddLayout(view);
    }
    navigate(page,duration,callback){
        var self=this;
        duration = duration || 250;
        if(this._curRoute){
            self.routes[page].SetVisibility('Hide');
            self.routes[page].Animate('SlideFromRight',()=>{
                self.routes[page].SetVisibility('Show');
            },duration);
        }else{
            this._curRoute = this.routes[page];
            this.routes[page].Show();
        }
        this._curRoute = this.routes[page];
        this.history.push(page);
        if(callback) callback();
   }
   back(){
       var self = this;
       if(self.history.length>1){
           var length = self.history.length - 2;
           var page = self.history[length]
           self._curRoute.Animate('SlideToRight',()=>{
               self._curRoute.Gone();
               self.routes[page].Show();
               self._curRoute = self.routes[page];
           },200);
           self.history.pop();
       }else{
           app.Exit();
       }
   }
}