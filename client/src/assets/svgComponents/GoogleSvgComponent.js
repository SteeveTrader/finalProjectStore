/* eslint-disable react/no-unknown-property */
import React from 'react';
import useBreakpoint from '../../customHooks/useBreakpoint';

const GoogleSvgComponent = () => {
  const breakPoint = useBreakpoint();
  const breakPointMap = {
    mobile: {
      width: 28,
      height: 27,
    },
    tablet: {
      width: 31,
      height: 30,
    },
    lgTablet: {
      width: 33,
      height: 32,
    },
    desktop: {
      width: 37,
      height: 36,
    },
  };
  return (
    <svg width={breakPointMap[breakPoint].width} height={breakPointMap[breakPoint].height} viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect x="0.568359" y="0.672852" width="35.9253" height="35.2219" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_6368_847" transform="matrix(0.000357143 0 0 0.000364275 0 -0.00998536)" />
        </pattern>
      </defs>
    </svg>
  );
};

export default GoogleSvgComponent;