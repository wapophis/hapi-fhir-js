import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: './src/fhir-dstu-3-0.js',
		output: {
			name: 'fhir-structures-dstu-3-0',
			file: "./lib/"+"fhir-structures-dstu-3-0"+pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: './src/fhir-dstu-3-0.js',
		//external: ['ms'],
		output: [
			{ file: "./lib/"+'fhir-structures-dstu-3-0'+pkg.main, format: 'cjs' },
			{ file: "./lib/"+'fhir-structures-dstu-3-0'+pkg.module, format: 'es' }
		]
	}
];