class Form{
    constructor (){
      this.input = createInput("Name")
      this.greeting = createElement('h2')
      this.title = createElement('h2')
      this.reset = createButton('reset')
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("cannon shooting game")
        this.title.position()

    }
}
