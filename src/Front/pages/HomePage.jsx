import HeaderBar from "../components/HeaderBar";
import NavBar from "../components/NavBar";
import { Flex, Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Flex direction="column" h="100vh">
      <Box>
        <HeaderBar />
      </Box>
      <Flex flex="1" overflow="hidden">
        <NavBar />
        <Box flex="1" p={8} bg="#EFF2EB" overflowY="auto">
          <h1>Area de trabalho</h1>
        </Box>
      </Flex>
    </Flex>
  );
}
