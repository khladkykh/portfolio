import React from "react";

function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomeImage: "http://i.imgflip.com/1bij.jpg"
        })

    const [allMemeImages, setAllMemeImages] = React.useState([])
    
     React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])



    function onHandleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomeImage: url
            }
        })
    }

    const[count, setCount] = React.useState(0)

    function increase(){
        setCount(prevCount => prevCount + 1)
    }
    function decrese(){
        setCount(prevCount => prevCount - 1)
    }

    return(
        <main className="container text-center">
            <form className="meme--form my-4">
                <div className="form-row">
                    <div className="col">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={onHandleChange}
                    />
                    </div>
                    <div className="col">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={onHandleChange}
                    />
                    </div>
                </div>
                <button onClick={getMemeImage} type="button" className="btn btn-primary my-3">Get a new meme image  🖼</button>
            </form>
            <div className="meme">
                <img src={meme.randomeImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            

            <div className="d-flex row text-center">
                <button className="btn btn-info mx-2" onClick={decrese}>-</button>
                <h3>{count}</h3>
                <button className="btn btn-info mx-2" onClick={increase}>+</button>
            </div>
        </main>
    )
}

export default Meme;