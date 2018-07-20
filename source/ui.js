'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://yamanoku.net'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/yamanoku'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/yamanoku'
	},
	{
		label: 'Scrapbox',
		url: 'https://scrapbox.io/yamanoku'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>FrontEnd Designer, UI Design Proposer, Writter, Document Translater, Internet Watcher</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
