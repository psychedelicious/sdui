import { Flex, IconButton, HStack, Box, ButtonGroup } from '@chakra-ui/react';

import { RootState } from '../../app/store';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { BsArrowCounterclockwise } from 'react-icons/bs';

import {
    resetForm,
    resetSeed,
    setCfgScale,
    setGpfganStrength,
    setHeight,
    setImagesToGenerate,
    setImg2imgStrength,
    setSampler,
    setSeed,
    setShouldDisplayInProgress,
    setShouldFitToWidthHeight,
    setSteps,
    setUpscalingLevel,
    setUpscalingStrength,
    setWidth,
} from '../../app/sdSlice';

import SDNumberInput from './SDNumberInput';
import SDSelect from './SDSelect';
import SDSwitch from './SDSwitch';
import SDButton from './SDButton';
import SDFileUpload from './SDFileUpload';

import { HEIGHTS, SAMPLERS, UPSCALING_LEVELS, WIDTHS } from './constants';

const SDMenu = () => {
    const {
        imagesToGenerate,
        steps,
        cfgScale,
        height,
        width,
        sampler,
        seed,
        shouldDisplayInProgress,
        img2imgStrength,
        shouldFitToWidthHeight,
        gpfganStrength,
        upscalingLevel,
        upscalingStrength,
    } = useAppSelector((state: RootState) => state.sd);

    const dispatch = useAppDispatch();

    return (
        <Box>
            <Flex wrap='wrap' gap={1}>
                <SDNumberInput
                    label='Image Count'
                    step={1}
                    min={1}
                    precision={0}
                    onChange={(v) => dispatch(setImagesToGenerate(Number(v)))}
                    value={imagesToGenerate}
                />

                <SDNumberInput
                    label='Steps'
                    min={1}
                    step={1}
                    precision={0}
                    onChange={(v) => dispatch(setSteps(Number(v)))}
                    value={steps}
                />

                <SDNumberInput
                    label='CFG Scale'
                    step={0.5}
                    onChange={(v) => dispatch(setCfgScale(Number(v)))}
                    value={cfgScale}
                />

                <HStack>
                    <SDNumberInput
                        label='Seed'
                        step={1}
                        precision={0}
                        onChange={(v) => dispatch(setSeed(Number(v)))}
                        value={seed}
                    />

                    <IconButton
                        aria-label='Reset seed to default'
                        size={'xs'}
                        icon={<BsArrowCounterclockwise />}
                        onClick={() => dispatch(resetSeed())}
                    />
                </HStack>

                <SDSelect
                    label='Sampler'
                    value={sampler}
                    onChange={(e) => dispatch(setSampler(e.target.value))}
                    validValues={SAMPLERS}
                />

                <SDSelect
                    label='Width'
                    value={width}
                    onChange={(e) => dispatch(setWidth(Number(e.target.value)))}
                    validValues={WIDTHS}
                />

                <SDSelect
                    label='Height'
                    value={height}
                    onChange={(e) =>
                        dispatch(setHeight(Number(e.target.value)))
                    }
                    validValues={HEIGHTS}
                />

                <SDSwitch
                    label='Display in-progress images'
                    isChecked={shouldDisplayInProgress}
                    onChange={(e) =>
                        dispatch(setShouldDisplayInProgress(e.target.checked))
                    }
                />

                <SDFileUpload />

                <SDNumberInput
                    label='img2img Strength'
                    step={0.01}
                    min={0}
                    max={1}
                    onChange={(v) => dispatch(setImg2imgStrength(Number(v)))}
                    value={img2imgStrength}
                />

                <SDSwitch
                    label='Fit to Width/Height'
                    isChecked={shouldFitToWidthHeight}
                    onChange={(e) =>
                        dispatch(setShouldFitToWidthHeight(e.target.checked))
                    }
                />

                <SDNumberInput
                    label='GPFGAN Strength'
                    step={0.05}
                    min={0}
                    max={1}
                    onChange={(v) => dispatch(setGpfganStrength(Number(v)))}
                    value={gpfganStrength}
                />

                <SDSelect
                    label='Upscaling Level'
                    value={upscalingLevel}
                    onChange={(e) =>
                        dispatch(setUpscalingLevel(e.target.value))
                    }
                    validValues={UPSCALING_LEVELS}
                />

                <SDNumberInput
                    label='Upscaling Strength'
                    step={0.05}
                    min={0}
                    max={1}
                    onChange={(v) => dispatch(setUpscalingStrength(Number(v)))}
                    value={upscalingStrength}
                />
                <ButtonGroup>
                    <SDButton
                        label='Generate'
                        type='submit'
                        colorScheme='green'
                    />

                    <SDButton label='Cancel' colorScheme='red' />

                    <SDButton
                        label='Reset'
                        colorScheme='blue'
                        onClick={() => dispatch(resetForm())}
                    />
                </ButtonGroup>
            </Flex>
        </Box>
    );
};

export default SDMenu;
