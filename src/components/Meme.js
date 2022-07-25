import {useEffect, useState} from "react";

function Meme() {

    const [meme, setMeme] = useState({
        'topText': '',
        'bottomText': '',
        'name': '',
        'randomImage': 'http://i.imgflip.com/1bij.jpg'
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes)


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const name = allMemes[randomNumber].name
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            name: name,
            randomImage: url
        }))
    }

    function handleClick(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input
                    type='text'
                    placeholder='Top text'
                    className='form-input'
                    name='topText'
                    onChange={handleClick}
                    value={meme.topText}

                />
                <input
                    type='text'
                    placeholder='Bottom text'
                    className='form-input'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleClick}
                />
                <button
                    className='form-btn'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <p className='form-title'>{meme.name}</p>

                <div className='meme'>
                    <img src={meme.randomImage} className='meme-image' alt='Meme'/>
                    <h2 className='meme-text top'>{meme.topText}</h2>
                    <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}

export default Meme