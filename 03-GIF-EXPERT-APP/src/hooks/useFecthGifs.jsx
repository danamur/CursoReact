import { useEffect, useState } from "react";
import { getGifs } from "../helpers";

export const useFecthGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}