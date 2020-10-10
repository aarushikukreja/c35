class Form{
constructor(){

}
display(){
    var title=createElement("h2")
    title.html("car Racing Game")
    title.position(400,100)
    var input=createInput("")
    input.position(400,300)
    var button=createButton("Login")
    button.position(400, 400)
    var greeting=createElement("h3")

    button.mousePressed(function(){
     input.hide();
     button.hide();
     var name= input.value()
     playercount=playercount+1
     player.update(name)
     player.updateCount(playercount)
     greeting.html("Welcome " + name)
     greeting.position(400, 300)
    })

}
}