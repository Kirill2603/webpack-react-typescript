import postcssPresetEnv from 'postcss-preset-env'
import postcssNested from 'postcss-nested'
// import postcssModules from 'postcss-modules'

const postcssConfig = {
    plugins: [
        [
            postcssPresetEnv(),
            postcssNested()
        ],
    ]
}

export default postcssConfig