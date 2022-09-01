// //divided by 3 or 5
// for(let i=1;i<=1000;i++)
// {
//     if(i%3==0||i%5==0)
//     {
//         console.log(i);
//     }
     
// }
//---------------------------------------------------


//Equilateral Triangle

// function checkTriangle(x, y, z)
// {
     
//     // Check for equilateral triangle
//     if (x == y && y == z)
//       console.log("Equilateral Triangle")
 
//     // Check for isosceles triangle
//     else if (x == y || y == z || z == x)
//     console.log("isosceles triangle")
 
//     // Otherwise scalene triangle
//     else
//     console.log("Scalene Triangle")
// }
 
// checkTriangle(1,5,3);

//----------------------------------


//Switch 
// function marks(x)
// {
//     if (x >=90&&x<=100)
//     {
//         console.log("S");
//     }
//     else if(x>=90&&x<90)
//     {
//        console.log("A");
//     }
//     else if(x>=70&&x<80)
//     {
//         console.log("B");
//     }
//     else if(x>=70&&x<80)
//     {
//         console.log("C");
//     }
//    else if(x>=60&&x<70)
//    {
//         console.log("D");
//     }
//     else if(x>=60&&x<70)
//     {
//         console.log("E");
//     }
//    else{
//        console.log("F");
//    }

// }
// marks(72);
//--------------------------------------------------


//prime number
function prime(x,y)
{
    for (var counter = x; counter <= y; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }
}
prime(1,100);