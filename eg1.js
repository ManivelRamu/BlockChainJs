class car{
    constructor (nam,model,year)
    {
       
        this.nam=nam;
        this.model=model;
        this.year=year
    }

}
class specs extends car{
       constructor(nam,model,year,price,seating,top)
       {
           super(nam,model,year);
           this.price=price;
           this.seating=seating;
           this.top=top;
       
        }
        lambo(){
            console.log(this.nam);
            console.log(this.model);
            console.log(this.year);
            console.log(this.price);
            console.log(this.seating);
            console.log(this.top);
        }
}
let car1=new specs("lambo","Hurri","2022","10000000","2","300")
car1.lambo();