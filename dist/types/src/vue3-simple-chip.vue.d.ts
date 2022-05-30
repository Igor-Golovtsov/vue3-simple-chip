declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    primaryColor: {
        type: StringConstructor;
        default: string;
    };
    secondaryColor: {
        type: StringConstructor;
        default: string;
    };
    dotColor: {
        type: StringConstructor;
        default: null;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    useButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonClickCallbackData: {
        default: undefined;
    };
}, {
    chipStyle: import("vue").ComputedRef<{
        '--chip-padding-right': string;
        '--chip-border-radius': string;
        '--chip-background-color': string;
        '--chip-border-color': string;
        '--chip-color': string;
    }>;
    dotStyle: import("vue").ComputedRef<{
        '--dot-background-color': string;
    } | null>;
    buttonStyle: import("vue").ComputedRef<{
        '--button-border-radius': string;
    }>;
    hasLeftIcon: import("vue").ComputedRef<import("vue").Slot | undefined>;
    hasRightIcon: import("vue").ComputedRef<import("vue").Slot | undefined>;
    onButtonClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-button-click"[], "on-button-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: string;
    };
    primaryColor: {
        type: StringConstructor;
        default: string;
    };
    secondaryColor: {
        type: StringConstructor;
        default: string;
    };
    dotColor: {
        type: StringConstructor;
        default: null;
    };
    outlined: {
        type: BooleanConstructor;
        default: boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    useButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonClickCallbackData: {
        default: undefined;
    };
}>> & {
    "onOn-button-click"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    primaryColor: string;
    secondaryColor: string;
    dotColor: string;
    outlined: boolean;
    rounded: boolean;
    useButton: boolean;
    buttonClickCallbackData: undefined;
}>;
export default _default;
