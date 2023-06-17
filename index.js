const posts = [
    {
        name: "Edward Munch",
        username: "teresa1853",
        location: "Oslo, Norway",
        avatar: "images/avatar-munch.jpg",
        post: "images/theScream.jpg",
        comment: "artist self portrait?",
        likes: 357289
    },

    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 321209
    },

    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4056
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 1521
    }
]

let heartSwitch = document.getElementById('heart');
let insertData = document.getElementById("insertData");
console.log(insertData);

function switchHeart(i) {
    console.log(i);
    console.log(`heart${i}`)
    let heartSwitch = document.getElementById(`heart${i}`);
    let likesSwitch = document.getElementById(`likes${i}`);

    if (heartSwitch.getAttribute('src') === './images/icon-heart.png') {
        heartSwitch.setAttribute('src', './images/icon-red-heart.png');
        posts[i].likes += 1;
        console.log(posts[i].likes);
        likesSwitch.innerHTML = posts[i].likes.toLocaleString();

    } else {
        heartSwitch.setAttribute('src', './images/icon-heart.png')
        posts[i].likes -= 1;
        console.log(posts[i].likes);
        likesSwitch.innerHTML = posts[i].likes.toLocaleString();
    }
    
}

// heartSwitch.addEventListener('click', switchHeart);

function getData(postArray) {
    let lengthArray = postArray.length;
    for (let i = 0; i < lengthArray; i++) {
        let name        = postArray[i].name;
        let username    = postArray[i].username;
        let location    = postArray[i].location;
        let avatar      = postArray[i].avatar;
        let post        = postArray[i].post;
        let comment     = postArray[i].comment;
        let likes       = postArray[i].likes;
        let insertData  = document.getElementById("insertData");

        insertData.innerHTML +=
            `<main class="mainContainer">
            <container class="artistDataContainer"> 
                <img src="${avatar}" class="avatar"/>
                <container class="artistNamePlaceContainer">        
                    <div class="artistName">
                        ${name}
                    </div>
                    <div class="artistCityCountry">
                        ${location}
                    </div>
                </container>
            </container>
            <img class="selfPortrait" src="${post}" alt="${name}" title="${name}">
            </main>

            <footer class="footerContainer">
                <container class="iconsContainer">
                    <img id="heart${i}" onclick=switchHeart(${i}) class="icon" src="./images/icon-heart.png" alt="likes" title="click to like">
                    <img class="icon" src="./images/icon-comment.png" alt="comments" title="click to comment">
                    <img class="icon" src="./images/icon-dm.png" alt="share" title="click to share">
                </container>
                <container class="lastContainer">
                    <div> <span id="likes${i}">${likes.toLocaleString()}</span> likes</div>
                    <div>${username} <span class="textComment">${comment}</span></div>
                </container>
            </footer>
            `
    }
}

getData(posts)











