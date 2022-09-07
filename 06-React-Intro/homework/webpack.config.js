module.exports = {
	entry: 'App.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env']
				}
			}
		}
		]
	}
}