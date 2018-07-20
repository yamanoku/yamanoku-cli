'use strict'
const { h, Text } = require('ink') // eslint-disable-line
const SelectInput = require('ink-select-input') // eslint-disable-line
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
    if (item.url) {
        open(item.url)
    }

    if (item.action) {
        item.action()
    }
}

const items = [
    {
        label: 'Website',
        url: 'https://yamanoku.net',
    },
    {
        label: 'Twitter',
        url: 'https://twitter.com/yamanoku',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/yamanoku',
    },
    {
        label: 'Scrapbox',
        url: 'https://scrapbox.io/yamanoku',
    },
    {
        label: 'npm',
        url: 'https://www.npmjs.com/~yamanoku',
    },
    {
        label: 'Tumblr',
        url: 'https://yamanoku.tumblr.com/',
    },
    {
        label: '🎁  Wishlist 🎁',
        url: 'http://amzn.asia/2XjSlyy',
    },
    {
        label: 'Exit',
        action() {
            process.exit() // eslint-disable-line
        },
    },
]

module.exports = () => (
    <div>
        <br />
        <div>
            <Text>
                I'm Okuto Oyama a.k.a. Oyama Michinoku, yamanoku. 👨‍👩‍👧 🐈🐈🐈
            </Text>
            <br />
            <br />
            <Text>
                FrontEnd Designer, UI Design Proposer, Writter, Document
                Translater, Internet Watcher
            </Text>
        </div>
        <br />
        <SelectInput items={items} onSelect={handleSelect} />
    </div>
)
