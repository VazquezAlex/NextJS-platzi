/** @type {import('next').NextConfig} */

// Added for sass config.
const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "main.sass"`,
    }
}

module.exports = nextConfig
