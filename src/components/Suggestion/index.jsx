// @flow
/* eslint-disable react/no-array-index-key */
import React, { type Node } from 'react';
import { Flex, Box } from '../FlexBox';
import Typography from '../Typography';
import { StyledUl, StyledLink } from './styles';

const BoxList = ({ children, onClick }: {children: Node, onClick: string => void}) => (
  <li>
    <Typography onClick={onClick} tag={StyledLink}>{children}</Typography>
  </li>
);

const SuggestionList = (
  { suggestions, geocoder, setAddress }
    : {suggestions: [], geocoder: (Object, ({}) => Object) => void, setAddress: ({}) => {}},
) => (
  <Flex mt="-1px">
    <Box tag={StyledUl}>
      {
        suggestions.map((suggestion, i) => (
          <BoxList
            key={i}
            onClick={() => {
              geocoder({ placeId: suggestion.place_id }, (place) => (
                setAddress({
                  lat: place[0].geometry.location.lat().toString(),
                  long: place[0].geometry.location.lng().toString(),
                })
              ));
            }}
          >
            {suggestion.description}
          </BoxList>
        ))
      }
    </Box>
  </Flex>
);

export default SuggestionList;
