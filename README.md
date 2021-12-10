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
simply run `npm run build`. This will only build the necessary javascript files for the `./most_active_cookie`
shell script. 

If you would like to generate a byte code exactable for your machine you can run
`node run build:bytecode` to build executables for mac, linux, and windows x64 machines. Only use executables that were built in the same type of machine they will be used in. If you need
an executable for a different machine you can run `node run build:bytecode:for node16-your machine-your architecture`. The available machines are: alpine, linux, linuxstatic, win, macos. The available architectures are: x64, arm64. Note that macos-arm64 builds may not work as the software used here to build byte code still lists those builds as experimental. 

## Error handling
The use case I imagined for this tool was as a command line tool for data analysts. As such, I opted to prefer correctness over robustness and made my program fail hard on errors in the input (incorrect headers, invalid dates, invalid command line arguments, etc) while giving useful error messages. This way analysis would know right away if they had done something wrong. If the use case was less tool oriented and more infrastructure oriented (for example: automatic data pipelines) I would have opted for robustness and logged errors while continuing functionality as best as possible. 