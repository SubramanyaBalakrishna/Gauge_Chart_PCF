/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { GaugeCharts, IGaugeCharts } from "./GaugeCharts";
import * as React from "react";
import { Stack, StackItem } from '@fluentui/react';
import { Toggle } from '@fluentui/react/lib/Toggle';
import {
    DataVizPalette,
    GaugeChart,
    GaugeValueFormat,
    GaugeChartVariant,
    getGradientFromToken,
    DataVizGradientPalette,
  } from '@fluentui/react-charting';
 
  
export class chart implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;    
    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;              
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const _chartValue: number = context.parameters.ChartValue?.raw ?? 0;
        const _chartWidth: number = context.parameters.ChartWidth?.raw ?? 0;
        const _chartHeight: number = context.parameters.ChartHeight?.raw ?? 0;
        const _chartTitle: string = context.parameters.ChartTitle?.raw ?? "";
        const _chartLabel: string = context.parameters.ChartLabel?.raw ?? "";
        const _chartSubLabel: string = context.parameters.ChartSubLabel?.raw ?? "";
        const props: IGaugeCharts = { 
            chartValue: _chartValue,
            width: _chartWidth,
            height: _chartHeight,
            enableGradient: true,
            roundedCorners: true,
            chartLabel: _chartLabel,
            chartSubLabel: _chartSubLabel,
            chartTitle: _chartTitle           
        };
        return React.createElement(GaugeCharts, props);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return { };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }  
}
