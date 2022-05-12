//creacion de la clase libro
class libro{
    constructor(nombre,autor,editorial,genero){
        this.nombre=nombre;
        this.autor=autor;
        this.editorial=editorial;
        this.genero=genero;
    }
    mostrarLibro=function(){
        var mensaje="El titulo del libro es:"+this.nombre+", el autor :"+this.autor+"la editorial: "+this.editorial+" y el genero:"+this.genero;
        return mensaje;
    }
}