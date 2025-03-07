import * as React from 'react';
import {
  DataVizPalette,
  GaugeChart,
  GaugeValueFormat,
  GaugeChartVariant,
  getGradientFromToken,
  DataVizGradientPalette,
} from '@fluentui/react-charting';
import { Stack, StackItem } from '@fluentui/react';
import { Toggle } from '@fluentui/react/lib/Toggle';

export interface IGaugeCharts {
  width: number;
  height: number;
  chartValue: number;
  enableGradient: boolean;
  roundedCorners: boolean;   
  chartTitle: string;
  chartLabel: string;  
  chartSubLabel: string;    
}

export class GaugeCharts extends React.Component<IGaugeCharts> {
  public render(): React.ReactNode {
    return (
      <GaugeChart
          width={this.props.width}
          height={this.props.height}
          segments={[
            { size: this.props.chartValue, legend: this.props.chartLabel },
            {
              size: 100 - this.props.chartValue,
              color: DataVizPalette.disabled,
              gradient: getGradientFromToken(DataVizGradientPalette.disabled),
              legend:  this.props.chartSubLabel,
            },
          ]}
          chartValue={this.props.chartValue}
          chartTitle={this.props.chartTitle}
          sublabel=""
          chartValueFormat={GaugeValueFormat.Fraction}
          variant={GaugeChartVariant.SingleSegment}
          enableGradient={this.props.enableGradient}
          roundCorners={this.props.roundedCorners}
      />
    )
  }
}
