import { registerBlockType } from '@wordpress/blocks';
import { createElement } from '@wordpress/element';
import App from './App';

console.log('Registering Bill Widget...');
registerBlockType('bill-widget/block', {
    title: 'Bill Widget',
    category: 'widgets',
    edit: () => createElement(App),
    save: () => null, // Widgets are dynamic, so no save function is needed
});