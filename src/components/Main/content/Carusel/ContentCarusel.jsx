import React, {useEffect, useState} from 'react'
import {Carousel} from "antd";
import {fetchSlider} from "../../../../api/Slides";

const ContentCarusel = () => {

    const [slides, setSlides] = useState([]);
    const apiUrl = process.env.REACT_APP_URL;
    const fetchSLiders = async () => {
        const data = await fetchSlider('uz')
        setSlides(data)
        console.log(data[0].cover)
    }
    useEffect(() => {
        fetchSLiders()

    }, [])
    return (
        <Carousel className={'w-full h-[200px]'} autoplay>
            {slides.map(value =>
                <div>
                    <div className={'w-[95%] h-[180px]  rounded-lg m-2'}>
                        <div style={{
                            backgroundImage: `url('${apiUrl}${value.cover.substring(1, value.cover.length)}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            cursor: 'pointer'
                        }} className={'w-full h-[180px] rounded-lg relative overflow-hidden'}>
                            <div className={'z-10 absolute bottom-0 bg-gray-800/50 w-full text-white pl-2'}>  {value.description.substring(0,12)}</div>
                        </div>
                    </div>
                </div>
            )}


        </Carousel>
    )
}
export default ContentCarusel
