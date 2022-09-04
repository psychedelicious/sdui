import { Box, IconButton, Image, VStack } from '@chakra-ui/react';
import fallbackImgUrl from '../../assets/images/rick.jpeg';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BsUpload } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { deleteImage, setCurrentImage } from '../../app/sdSlice';

const ImageRoll = () => {
    const { images } = useAppSelector((state: RootState) => state.sd);
    const dispatch = useAppDispatch();

    return (
        <VStack>
            {images.map((image) => (
                <Box key={image.id} position={'relative'}>
                    <IconButton
                        position={'absolute'}
                        right={0}
                        top={0}
                        aria-label='Load image'
                        icon={<BsUpload />}
                        onClick={() => dispatch(setCurrentImage(image.id))}
                    />
                    <IconButton
                        position={'absolute'}
                        right={0}
                        top={'32px'}
                        aria-label='Delete image'
                        icon={<MdDeleteForever />}
                        onClick={() => dispatch(deleteImage(image.id))}
                    />
                    <Image
                        fit='contain'
                        fallbackSrc={fallbackImgUrl}
                        src={image.url}
                    />
                </Box>
            ))}
        </VStack>
    );
};

export default ImageRoll;
