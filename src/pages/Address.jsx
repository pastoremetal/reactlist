// @flow
import React, { useState } from 'react';
import ScriptLoader from 'react-script-loader-hoc';
import { Flex } from '../components/FlexBox';
import { InputForm } from '../components/Form';
import SuggestionList from '../components/Suggestion';

const Address = (
  { scriptsLoadedSuccessfully, setAddress }
  : {scriptsLoadedSuccessfully: boolean, setAddress: ({}) => {}},
) => {
  const [suggestions, setSuggestions] = useState();
  const gMaps = global.google ? global.google.maps : null;
  const autoComplete = gMaps ? new gMaps.places.AutocompleteService() : null;
  const geoCoder = gMaps ? new gMaps.Geocoder() : null;
  if (scriptsLoadedSuccessfully) {
    return (
      <Flex alignItems="center">
        <InputForm
          width={[1, 1, 1, 10 / 12]}
          label="Your address"
          name="address"
          suggestion={
            suggestions && (
              <SuggestionList
                suggestions={suggestions}
                // $FlowFixMe
                geocoder={geoCoder.geocode}
                setAddress={setAddress}
              />
            )
          }
          onKeyUp={(e) => {
            // $FlowFixMe
            autoComplete.getPlacePredictions(
              {
                input: e.target.value,
                types: ['address'],
                offset: 3,
                componentRestrictions: { country: 'br' },
              }, (predictions, status) => (
                // $FlowFixMe
                gMaps.places.PlacesServiceStatus.OK === status && setSuggestions(predictions)
              ),
            );
          }}
        />
      </Flex>
    );
  }
  return null;
};

export default ScriptLoader(
  // $FlowFixMe
  `https://maps.googleapis.com/maps/api/js?key=${process.env.GMAPS_TOKEN}&libraries=places`,
)(Address);
