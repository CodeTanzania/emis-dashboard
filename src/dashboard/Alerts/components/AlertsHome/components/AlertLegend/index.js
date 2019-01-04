import React from 'react';
import LegendItem from './components/LegendItem';
import { severityColors } from '../../../../helpers';
import './styles.css';

export default function AlertLegend() {
  const renderLegendItems = data =>
    data.map(({ property, value }) => (
      <LegendItem property={property} value={value} />
    ));
  return (
    <div className="AlertLegend">
      <div className="AlertLegendHeader">CAP Severity:</div>
      <div className="AlertLegendContents">
        {renderLegendItems(severityColors)}
      </div>
    </div>
  );
}
