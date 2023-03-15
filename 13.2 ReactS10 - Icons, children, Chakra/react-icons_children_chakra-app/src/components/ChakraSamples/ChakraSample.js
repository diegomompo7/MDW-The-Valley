import { Button, Stack } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaTwitter } from "react-icons/fa";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const ChakraSamples = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>Buttons</Tab>
          <Tab>Modals</Tab>
          <Tab>Alerts</Tab>
        </TabList>

        <TabPanels>

          <TabPanel>
            <Stack spacing={4} direction='row' align='center'>
              <Button colorScheme='blue' size="xs" rightIcon={<FaTwitter></FaTwitter>}>
                Ir a twitter
              </Button>
              <Button colorScheme='red' size="sm">Button</Button>
              <Button colorScheme="blackAlpha" size="md">Button</Button>
              <Button bg=  'yellow.100' size="lg">Button</Button>
            </Stack>
          </TabPanel>

          <TabPanel>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal del ejemplo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <p>Bla bla bla</p>
                  <p>Bla bla bla</p>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </TabPanel>

          <TabPanel>
            <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon /> There was an error processing your request
              </Alert>

              <Alert status='success'>
                <AlertIcon /> Data uploaded to the server. Fire on!
              </Alert>

              <Alert status='warning'>
                <AlertIcon /> Seems your account is about expire, upgrade now
              </Alert>

              <Alert status='info'>
                <AlertIcon /> Chakra is going live on August 30th. Get ready!
              </Alert>
            </Stack>
          </TabPanel>

        </TabPanels>
      </Tabs>

    </>
  );
}

export default ChakraSamples;