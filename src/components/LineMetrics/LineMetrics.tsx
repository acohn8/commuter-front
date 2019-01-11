import React from 'react';
import FlexWrapContainer from '../../blocks/FlexWrapContainer/FlexWrapContainer';
import H5 from '../../elements/H5';
import P from '../../elements/P';
import LineMetricItem from './LineMetricItem';
import LineMetricHeader from './LineMetricHeader';

const lines = {
  red: 'RD',
  green: 'GR',
  yellow: 'YL',
  orange: 'OR',
  blue: 'BL',
  silver: 'SV'
};

const LineMetrics = () => (
  <LineMetrics.Wrapper style={{ width: '100%' }}>
    <H5 style={{ width: '100%' }}>Red Line</H5>
    <LineMetrics.Items>
      <LineMetrics.Item>
        <LineMetrics.Header>Status</LineMetrics.Header>
        <P>OK</P>
      </LineMetrics.Item>
      <LineMetrics.Item>
        <LineMetrics.Header>Average wait</LineMetrics.Header>
        <P>3 minutes</P>
      </LineMetrics.Item>
      <LineMetrics.Item>
        <LineMetrics.Header>Average delay</LineMetrics.Header>
        <P>2.3 minutes</P>
      </LineMetrics.Item>
    </LineMetrics.Items>
  </LineMetrics.Wrapper>
);

LineMetrics.Wrapper = FlexWrapContainer;
LineMetrics.Items = FlexWrapContainer;
LineMetrics.Item = LineMetricItem;
LineMetrics.Header = LineMetricHeader;

export default LineMetrics;
