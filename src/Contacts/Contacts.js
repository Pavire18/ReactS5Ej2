import './Contacts.css';
import {
    Text,
    Flex,
    IconButton,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure ,
    Button
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import React from 'react';





const Contacts = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)



    return (
        <Flex justifyContent='center' marginTop='70px' >
            <Flex direction='column'>
                <Text fontSize='3xl' >Puedes contactar conmigo a través de las siguientes vías:</Text>
                <Flex justifyContent='center' gap='10px' marginTop='70px'>
                    <Link href="https://es.linkedin.com/in/pablo-villarino-redondo" target='_blank'>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='gray'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<FaLinkedin />}
                        />
                    </Link>
                    <Link href="https://github.com/Pavire18" target='_blank'>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='gray'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<FaGithub />}
                        />
                    </Link>

                    <Popover>
                        <PopoverTrigger>
                            <IconButton
                                isRound={true}
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Done'
                                fontSize='20px'
                                icon={<IoMdMailOpen />}
                            />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Email</PopoverHeader>
                            <PopoverBody>pavire18@gmail.com</PopoverBody>
                        </PopoverContent>
                    </Popover>

                    <Popover>
                        <PopoverTrigger>
                            <IconButton
                                isRound={true}
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Done'
                                fontSize='20px'
                                icon={<FaPhone />}
                            />
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Teléfono</PopoverHeader>
                            <PopoverBody>646135312</PopoverBody>
                        </PopoverContent>
                    </Popover>


                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='gray'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<CiCircleInfo />}
                        onClick={onOpen}
                    />

                    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>PRUEBA MODAL</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p>Esta es una prueba a lanzar una modal</p>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                </Flex>
            </Flex>
        </Flex>
    )

}

export default Contacts;