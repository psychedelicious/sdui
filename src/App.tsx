import { Grid, GridItem, Progress } from '@chakra-ui/react';
import SiteHeader from './components/SiteHeader';
import DreamMenu from './features/dream-menu/DreamMenu';
import PromptInput from './features/dream-menu/PromptInput';
import ImageRoll from './features/gallery/ImageRoll';
import CurrentImage from './features/gallery/CurrentImage';

const App = () => {
    return (
        <Grid
            width='100vw'
            height='100vh'
            templateAreas={`"header header header"
                  "menu prompt prompt"
                  "menu currentImage imageRoll"
                  "progressBar progressBar progressBar"`}
            gridTemplateRows={'32px 80px 1fr'}
            gridTemplateColumns={'250px 1fr 150px'}
            gap='2'
        >
            <GridItem pl='2' pr='2' pt='2' area={'header'}>
                <SiteHeader />
            </GridItem>
            <GridItem pl='2' area={'menu'} overflowY='scroll'>
                <DreamMenu />
            </GridItem>
            <GridItem pr='2' area={'prompt'}>
                <PromptInput />
            </GridItem>
            <GridItem area={'currentImage'}>
                <CurrentImage />
            </GridItem>
            <GridItem pr='2' area={'imageRoll'} overflowY='scroll'>
                <ImageRoll />
            </GridItem>
            <GridItem area={'progressBar'}>
                <Progress size='xs' value={50} />
            </GridItem>
        </Grid>
    );
};

export default App;
