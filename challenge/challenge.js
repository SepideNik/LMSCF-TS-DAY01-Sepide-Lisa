var lol;
lol = [{
        id: 1,
        name: "Avocado Pizza",
        image: "img/1.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 5,
        price: 12,
        Currency: "€"
    }, {
        id: 2,
        name: "Avocado Pizza2",
        image: "img/2.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 3,
        price: 6,
        Currency: "€"
    }, {
        id: 3,
        name: "Avocado Pizza3",
        image: "img/3.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 4,
        price: 11,
        Currency: "€"
    }, {
        id: 4,
        name: "Avocado Pizza4",
        image: "img/4.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 2,
        price: 5,
        Currency: "€"
    }, {
        id: 5,
        name: "Avocado Pizza5",
        image: "img/5.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 5,
        price: 17,
        Currency: "€"
    }, {
        id: 6,
        name: "Avocado Pizza6",
        image: "img/6.jpg",
        Decs: "tomato sauce , mozzarella , basil",
        star: 3,
        price: 9,
        Currency: "€"
    }];
lol.forEach(function (item) {
    var html = "  <div class=\"card mb-3\" id=\"" + item.id + "\" style=\"width: 18rem;\">\n\t\t\t        <img src=\"" + item.image + "\" class=\"card-img-top\" alt=\"...\">\n\t\t\t        <div class=\"card-body\">\n\t\t\t            <h5 class=\"card-title\">" + item.name + "</h5>\n\t\t\t            <p class=\"card-text\">" + item.Decs + "</p>\n\t\t\t            <div class=\"star-rating\">\n       \t\t\t\t\t<span class=\"fa fa-star-o\" ></span></div>\n\n\t\t\t            <a href=\"#\" class=\"btn btn-light\">Order now: " + item.price + " " + item.Currency + "</a> \n\n\t\t\t            <div class=\"text-center\">\n                   \t\t <button type=\"button\" id=\"like" + item.id + " \" class=\"myButton btn fa fa-thumbs-up\"> " + item.star + " </button>\n                 \t\t <button type=\"button\" id=\"dislike" + item.id + " \" class=\"btn myButton fa fa-thumbs-down\">\n\t\t\t\t\t\t\t\t0 </button>\n      \n                 \t\t </div>\n\t\t\t        </div>\n    \t\t\t</div>";
    document.getElementById("cardsDiv").innerHTML += html;
    console.log(item.id);
});
// var btn = document.getELementsByClassName("myButton");
// for(let index in btn){
// 	// ()=> {}  =====  function(){}
// 	btn[index].addEventListener("click", ()=> {
// 		addCart(lol[i]);
// 	} )
// }
// var P : (name? : string)=> string = (name)=>{console.log("my name is "+name)}
// P("serri");
//var countingLikes : (btn : string, i : number)=> number = 
