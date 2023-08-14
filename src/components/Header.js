import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Button, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: gujjarrahul716@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/TRahulT",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rahul-98217b1b4/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  // bd me krta hu aage ka. thodi der me   hard tha kya ?? bol le

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              <a
                href={
                  socials.find((obj) => {
                    return obj.icon === faGithub;
                  }).url
                }
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href={
                  socials.find((obj) => {
                    return obj.icon === faLinkedin;
                  }).url
                }
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href={
                  socials.find((obj) => {
                    return obj.icon === faMedium;
                  }).url
                }
                target="_blank"
              >
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a
                href={
                  socials.find((obj) => {
                    return obj.icon === faEnvelope;
                  }).url
                }
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}

              <a href="#contactme-section" className="smooth">
                <Button colorScheme="linkedin" size="sm">
                  Contact me
                </Button>
              </a>

              <a href="#projects-section" className="smooth">
                {" "}
                <Button colorScheme="linkedin" size="sm">
                  Projects{" "}
                </Button>
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
