/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    ChartValue: ComponentFramework.PropertyTypes.WholeNumberProperty;
    ChartWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
    ChartHeight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    ChartTitle: ComponentFramework.PropertyTypes.StringProperty;
    ChartLabel: ComponentFramework.PropertyTypes.StringProperty;
    ChartSubLabel: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    ChartValue?: number;
}
