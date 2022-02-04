import { Box } from '@chakra-ui/react'
import React from 'react'

interface ArtProps {
    w: string;
    h: string;
}

export default function Art({w, h}: ArtProps) {
    return (
        <>
            <Box minW={w} minH={h} bgColor="green.200">

            </Box>
        </>
    )
}
