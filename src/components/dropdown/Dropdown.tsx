import * as React from 'react';
import Select, { ControlProps, OptionTypeBase, IndicatorProps } from 'react-select';

export type ChangeEvent = {
	value: string;
	label: string;
};

const selectStyles = {
	control: (provided: ControlProps<OptionTypeBase>): any => ({
		...provided,
		minHeight: 20
	}),
	indicatorsContainer: (provided: IndicatorProps<OptionTypeBase>): any => ({
		...provided,
		height: 28
	}),
	indicatorContainer: (provided: IndicatorProps<OptionTypeBase>): any => ({
		...provided,
		padding: 5
	}),
	menuPortal: (base: any): any => ({ ...base, zIndex: 10 })
};

const Dropdown = ({ value, isGrouped, options, ...props }: any): JSX.Element => {
	// react-select has a terrible API. You need to pass the entire selected object as the `value` prop to prefill it.
	// instead, our component use the `value` prop, which is converted here
	let selectedValue;
	if (isGrouped) {
		options.find((group: any) => {
			const found = group.options.find((row: any) => {
				return row.value === value;
			});
			if (found && found !== -1) {
				selectedValue = found;
				return true;
			}
			return false;
		});

	} else {
		selectedValue = options.find((row: any): any => row.value === value);
	}
	return (
		<Select
			{...props}
			options={options}
			value={selectedValue}
			styles={selectStyles}
			menuPlacement="auto"
			menuPortalTarget={document.body}
		/>
	);
};

export default Dropdown;





















