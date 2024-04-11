class Form{
    constructor(){
        this.input=createInput("");
        this.button=createButton("jugar");
    }
    posicionElementos(){     
    this.input.position(width/2-110,height/2-80);
    this.button.position(width/2-90,height/2-20);

        this.input.class("customInput");
        this.button.class("customButton");
    }
    buttonPresionado(){
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            gameState = 1;
        })
    }
    displey(){
        this.posicionElementos();
        this. buttonPresionado();
    }
}