# qc-coding-assessment
## Installation
Node must be installed to use this script.

To install dependencies, run `npm install`.

Then use `./most_active_cookie` as described in the assessment. `./most_active_cookie` is a shell script that forwards it's input to the correct compiled js file.  As such, if it is moved outside of it's folder it will not work. 

Alternatively, you can build a version of this script for your specific machine as detailed below in the building section.

## Testing
To run tests, use `npm test`

## Building
The basic built version is included in this repo, but if you would like to rebuild the script,
simple run `npm run build`. This will only build the necessary javascript files for the `./most_active_cookie`
shell script. 

If you would like to generate a byte code exactable for your machine you can run
`node run build:bytecode` to build executables for mac, linux, and windows x64 machines. Only use executables that were built in the same type of machine they will be used in. If you need
an exactable for a different machine you can run `node run build:bytecode:for node16-your machine-your architecture`. The available machines are: alpine, linux, linuxstatic, win, macos. The available architectures are: x64, arm64. Note that macos-arm64 builds may not work as the software used here to build byte code still lists those builds as experimental. 