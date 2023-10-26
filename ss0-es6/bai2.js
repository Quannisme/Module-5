let courses=[
    {
        id:1,
        title:"ReactJS Tutorial",
        rating:4.2,
    },
    {
        id:2,
        title:"Angular Tutorial",
        rating:2.5,
    },
    {
        id:3,
        title:"VueJS Tutorial",
        rating:3.8,
    },
    {
        id:4,
        title:"java Tutorial",
        rating:4,
    },
];

let a = courses.filter(temp => temp.rating<4);
let result=a.map((temp1)=>{
    return temp1.id +"-"+temp1.title+"-"+temp1.rating;
});

// let result=courses.filter((temp )=>{
//     if(temp.rating<4){
//    console.log(temp.id +"-"+temp.title+"-"+temp.rating);
//     }
// });
console.log(result);