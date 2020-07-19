'use strict'
const path = require('path') // eslint-disable-line
const React = require('react') // eslint-disable-line
const { Box, Text } = require('ink') // eslint-disable-line
const SelectInput = require('ink-select-input').default // eslint-disable-line
const opn = require('opn')

const open = (url) => opn(url, { wait: false })

const handleSelect = (item) => {
    if (item.url) {
        open(item.url)
    }

    if (item.action) {
        item.action()
    }
}

const createItems = (items) => {
    for (const item of items) {
        item.key = item.url || item.label
    }
    return items
}

const items = createItems([
    {
        label: 'Website',
        url: 'https://yamanoku.net',
    },
    {
        label: 'Curriculum Vitae',
        url: 'https://github.com/yamanoku/Curriculum-Vitae',
    },
    {
        label: 'Reading...',
        url: 'https://reading.yamanoku.net',
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
        label: '🎁  Wishlist 🎁',
        url: 'http://amzn.asia/2XjSlyy',
    },
    {
        label: 'Exit',
        action() {
            process.exit() // eslint-disable-line
        },
    },
])

module.exports = () => (
    <Box flexDirection="column">
        <Box marginBottom={1}>
            <Text>Okuto Oyama a.k.a. Oyama Michinoku, yamanoku</Text>
        </Box>
        <Box>
            <Text>CrowdWorks, Inc.</Text>
        </Box>
        <Box marginBottom={1}>
            <Text>FrontEnd Designer, Accessibility Advocator</Text>
        </Box>
        <SelectInput items={items} onSelect={handleSelect} />
    </Box>
)
