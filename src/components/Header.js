import Image from '../images/troll-face.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={Image} className='header-image' onClick='./' alt='troll-face'/>
            <h2 className='header-title'>Meme Generator</h2>
        </header>
    )
}

export default Header