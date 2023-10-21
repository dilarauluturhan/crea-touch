import { Link } from 'react-router-dom';

function Empty() {
    return (
        <div className="h-screen bg-firstColor pt-20 font-nunito flex flex-col items-center">
            <iframe src="https://giphy.com/embed/DZgUVLxzMoAwg" className="w-96 md:w-[480px] h-[310px] rounded-lg" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/shopping-DZgUVLxzMoAwg"></a></p>
            <p className="text-2xl md:text-4xl mt-5">You don&acute;t have any items.</p>
            <Link to="/" className="text-xl md:text-3xl text-thirdColor hover:text-fourthColor mt-5">Explore CreaTouch</Link>
        </div>
    )
}

export default Empty;