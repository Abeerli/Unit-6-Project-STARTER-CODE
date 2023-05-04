// Declare your genre arrays here
let adventure = ["https://www.animenewsnetwork.com/images/encyc/A439-1843022055.1511158816.jpg", "https://cdn.oneesports.gg/cdn-data/2022/06/Anime_HunterxHunter_HunterExamArc.jpg", "https://m.media-amazon.com/images/M/MV5BNTkzNjJhYjQtNjU0Yy00Y2M3LWI2ZDgtNDRhZmNlNDFjMjQ5XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_FMjpg_UX1000_.jpg"];
console.log(adventure);
let comedy = ["https://upload.wikimedia.org/wikipedia/en/3/3a/Heidi_DVD_1.jpg", "https://m.media-amazon.com/images/M/MV5BM2EwOTJiNzItNmVlZC00ZmU5LTk4YmYtM2Q3ZTgwOWZhNTNlXkEyXkFqcGdeQXVyMTE2MDU0NzAw._V1_.jpg", "https://statres.cdn.mgmlcdn.com/analytics/uploads/173/at_60d9d2512a.jpg"];
console.log(comedy);
let drama = ["https://m.media-amazon.com/images/M/MV5BMDBjY2NjNGYtNTE1MC00ODk0LWI1ZmEtMmRlMDQzMjQwOWU5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg", "https://www.albawaba.com/sites/default/files/im/English_Slideshows_/SS_Arab_kids_cartoons/Cartoon-arab-kids-ss-4.jpg", "https://assets-a1.kompasiana.com/statics/files/14197569901063038068.jpg?t=o&v=410"];
console.log(drama);
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
    let genreInput = document.querySelector(".input1").value;
    if (genreInput === "adventure") {
        for (let adventureMovie of adventure) {
            let img = "<img src=" + adventureMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }

    } else if (genreInput === "comedy") {
        for (let comedyMovie of comedy) {
            let img = "<img src=" + comedyMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "drama") {
        for (let dramaMovie of drama) {
            let img = "<img src=" + dramaMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }

};
let suggestButton = document.querySelector(".Suggest");
suggestButton.onclick = function() {
let photoInput = document.querySelector(".input2").value;
adventure.push(photoInput);
adventure.push(photoInput);
drama.push(photoInput);
let img = "<img src =" + photoInput + ">";
result.insertAdjacentHTML("beforeend", "<p>" + "Thank you for your suggestions!" + "</p>");
};