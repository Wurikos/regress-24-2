import React from 'react';
import atomize from "@quarkly/atomize";

const Testcomponent = props => <div {...props}>
	Say hello Testcomponent
</div>;

export default atomize(Testcomponent)({
	name: "Testcomponent",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Testcomponent — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});