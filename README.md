# Bundles entire Three.js into a single bundle file with webpack

## Instructions:

Here's the instruction formatted in Markdown:

# Instructions to Set Up and Build the Custom Three.js Bundler

### 1. Clone the Git Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/rondevs/threejs-custom-bundler.git
```

Navigate into the cloned directory:

```bash
cd threejs-custom-bundler
```

### 2. Install Dependencies

Make sure your package.json file includes the following dependencies:

```json
"dependencies": {
    "three": "^0.168.0"
},
"devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.4",
    "babel-loader": "^9.2.1",
    "webpack": "^5.94.0",
    "webpack-bundle-analyzer": "^4.10.2",
    "webpack-cli": "^5.1.4"
}

```

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Build the Bundle

After the dependencies are installed, run the following command to create the bundle file:

```bash
npm run build
```

This command will generate the minified bundle in the `dist` folder.

### 4. Verify the Bundle (Optional)

To ensure the integrity of the generated bundle, you can verify it with the SHA-256 checksum:

```bash
sha256sum dist/threewp.bundle.min.js
```

The output should match the expected hash:

```
e1d5ce8cf48ae833e89943590b49d096a9b484dab39af3fb6afd6e8c17fec99b
```

Now your custom Three.js bundle is ready for use!


