import { Box, Image } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import fallbackImgUrl from '../../assets/images/rick.jpeg';

const CurrentImage = () => {
    const { currentImageId, images } = useAppSelector(
        (state: RootState) => state.sd
    );
    const imageToDisplay = images.find((image) => image.id === currentImageId);

    return (
        <Image
            boxSize='sm'
            src={imageToDisplay?.url}
            fallbackSrc={fallbackImgUrl}
        />
    );
};

export default CurrentImage;
