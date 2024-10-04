# Unshitify USOS

Simple extension to make USOSweb just a bit less painfull to use.

## Implemented:
- remove hardcoded width (use 90% instead)

## TODO:
- maybe chrome/chromium support

## Installation

### Firefox

1. download `.xpi` file from [releases](https://github.com/pacjo/unshitify-usos/releases)
2. open `about:addons`, select cog -> *Install Add-on From File*
3. select downloaded `.xpi` file

### Technical details

#### Packaging

you're gonna need:
- `web-ext`

##### Tutorial (NixOS)

(basically [this](https://stackoverflow.com/questions/44537589/how-do-i-install-webextension-that-developed-by-myself-to-firefox-nightly))

1. `nix-shell -p web-ext`
2. `web-ext sign --api-key=xxxx:xxxxxxx:xxx --api-secret=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --channel unlisted`
3. wait and you'll find the `.xpi` file in `web-ext-artifacts` directory
