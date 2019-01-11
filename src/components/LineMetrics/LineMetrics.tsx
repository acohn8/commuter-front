import React from 'react';
import FlexWrapContainer from '../../blocks/FlexWrapContainer/FlexWrapContainer';
import H5 from '../../elements/H5';

const LineMetrics = () => (
  <LineMetrics.Wrapper>
    <div>
      <H5>LINE</H5>
    </div>
    <div>
      <H5>LINE</H5>
    </div>
  </LineMetrics.Wrapper>
);

LineMetrics.Wrapper = FlexWrapContainer;

export default LineMetrics;
