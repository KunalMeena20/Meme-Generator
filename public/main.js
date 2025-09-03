let btn = document.querySelector(".meme-btn");

btn.addEventListener("click", async () => {
    let h2 = document.querySelector(".meme-heading-2");
    h2.innerText = "Click on the edit button to edit.";
    let link = await genMeme();
    let img = document.querySelector(".temp-inner-cnt");
    img.setAttribute("src", link);
    
});

let url = genMeme();

let img2 = document.querySelector(".edit-img");
img2.setAttribute("src", url);
console.log(url);


async function genMeme() {
    try{
        let memeApi = await axios.get("https://api.imgflip.com/get_memes");
        let memes = memeApi.data.data.memes;
        let randomMemesUrl = memes[Math.floor(Math.random() * memes.length)].url;
        return randomMemesUrl ;
    }
    catch (err) {
        h2.innerText = "Something went Wrong";
        console.log(err);
    }

};

