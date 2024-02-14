import './CustomHeader.css';
import { Text,Stack,Flex,Image } from '@chakra-ui/react'


const CustomHeader = () => {

    return (
        <Flex justify='center' direction='row' marginTop='70px'>
        <Stack spacing={3}>
            <Text  fontSize='6xl' >¡Hola! Me llamo</Text>
            <Text fontSize='5xl' bgGradient='linear(to-l, #7928CA, #FF0080)'  bgClip='text' fontWeight='extrabold' >Pablo Villarino</Text>
         </Stack>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='lg' boxSize='250px' />
        </Flex>
    )

}

export default CustomHeader;