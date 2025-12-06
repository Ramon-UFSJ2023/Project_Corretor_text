import { Box, VStack, Button, Text, Image } from "@chakra-ui/react";
import checkIcon from "../assets/check.png";
import refIcon from "../assets/iconReferencia.png";

export default function NavBar() {
  const bgDark = "#1F2412";
  const accentGreen = "#E5FAA8";
  const textLight = "#EFF2EB";

  const NavItem = ({ icon, label, isActive }) => (
    <Button
      variant="ghost"
      w="full"
      justifyContent="flex-start"
      h="50px"
      padding={"5px"}
      _hover={{ bg: "#3C4426", color: accentGreen }}
      color={isActive ? accentGreen : textLight}
      bg={isActive ? "#323820" : "transparent"}
      gap={3}
      borderRadius="10px"
    >
      <Image src={icon} boxSize="24px" />
      <Text fontSize="md" fontWeight="normal">
        {label}
      </Text>
    </Button>
  );

  return (
    <Box
      as="nav"
      w="250px"
      h="calc(100vh)"
      bg={bgDark}
      p="4"
      borderRight="1px solid"
      borderColor="#3c4426"
    >
      <VStack spacing={4} align="stretch">
        <NavItem icon={checkIcon} label="Tradutor" />
        <NavItem icon={checkIcon} label="Corretor" isActive={true} />
        <NavItem icon={refIcon} label="Referencias" />
      </VStack>
    </Box>
  );
}
