import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-side-navigation-item",
	managedSlots: true,
	properties: /** @lends sap.ui.webcomponents.main.SideNavigationItem.prototype */ {
		/**
		 * Defines the text of the item.
		 *
		 * @public
		 * @type {string}
		 * @defaultvalue ""
		 */
		text: {
			type: String,
		},

		/**
		 * Defines the icon of the item.
		 *
		 * @public
		 * @type {string}
		 * @defaultvalue false
		 */
		icon: {
			type: String,
		},

		/**
		 *
		 * Defines whether the item is expandable. In order to use this property you need to pass another <code>ui5-side-navigation-item</code> as a default slot.
		 * @public
		 * @type {boolean}
		 */
		expandable: {
			type: Boolean,
		},

		/**
		 * Defines if the item is expanded
		 * <br><br>
		 * <b>Note:</b>
		 * If <code>expandable</code> property is set to <code>true</code>, you can control via this property whether the current item is expanded or not.
		 *
		 * @public
		 * @type {boolean}
		 * @defaultvalue false
		 */
		expanded: {
			type: Boolean,
		},

		/**
		 * True only for the currently selected item.
		 * @public
		 * @type {boolean}
		 * @defaultvalue false
		 */
		selected: {
			type: Boolean,
		},

		/**
		 * @private
		 */
		level: {
			type: Integer,
			defaultValue: 1,
		},
	},
	slots: /** @lends sap.ui.webcomponents.main.SideNavigationItem.prototype */ {
		/**
		 * If you wish to nest menus, you can pass inner menu items to the default slot.
		 *
 		 * @type {HTMLElement[]}
		 * @public
		 * @slot
		 */
		"default": {
			propertyName: "items",
			type: HTMLElement,
		},
	},
	events: /** @lends sap.ui.webcomponents.main.SideNavigationItem.prototype */ {
		//
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * <code>ui5-side-navigation-item</code> is used within <code>ui5-side-navigation</code> only. Via the <code>ui5-side-navigation-item</code> you control the content of the side navigation.
 * For the <code>ui5-side-navigation-item</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import @ui5/webcomponents/dist/SideNavigationItem.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.SideNavigationItem
 * @extends UI5Element
 * @tagname ui5-side-navigation-item
 * @public
 * @since 1.0.0-rc.8
 */
class SideNavigationItem extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}
}

SideNavigationItem.define();

export default SideNavigationItem;
