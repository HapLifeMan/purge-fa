let fs    = require('fs')
let write = require('write')
let glob  = require('glob')
let path  = require('path')
let cwd   = require('cwd');

let purge = function(scanContentInFolder, fontAwesomeSrcFolder, fontAwesomeDistFolder, whitelist) {

    // Global array of FA JS files
    const faFiles = {
        'fa': {
            input: fontAwesomeSrcFolder + 'fa-solid.js',
            output: fontAwesomeDistFolder + 'solid.js'
        },
        'fal': {
            input: fontAwesomeSrcFolder + 'fa-light.js',
            output: fontAwesomeDistFolder + 'light.js'
        },
        'far': {
            input: fontAwesomeSrcFolder + 'fa-regular.js',
            output: fontAwesomeDistFolder + 'regular.js'
        },
        'fab': {
            input: fontAwesomeSrcFolder + 'fa-brands.js',
            output: fontAwesomeDistFolder + 'brands.js',
        }
    }

    // Global array of all used icons
    const bigData = {
        'fa' : [],
        'fal': [],
        'far': [],
        'fab': []
    }

    // Add whitelisted icons to bigData
    for(let index in whitelist) {

        bigData[index].push(whitelist[index])

    }

    // Convert path to glob path to find every files recursively in folder
    glob(path.join(cwd(), scanContentInFolder), {}, function (er, files) {

        // Declaration of all regex
        const rgxClasses    = new RegExp(/class="([^"]*?)(fa-[a-z\-]+)+([^"]*?)"+/g)
        const rgxIconType   = new RegExp(/(\s|")(far|fal|fa|fab)\s/)
        const rgxIconName   = new RegExp(/(fa-[a-z-]+)/)
        const rgxIconInJS   = new RegExp(/(\s*?"([\w-]+)":\W*\[.+?(?="])"],?)/g)
        const rgxIconNameJS = new RegExp(/("[A-Za-z0-9-]+":)/)

        // For each content file
        for(let file in files) {

            // Read file content
            let fileContent = fs.readFileSync(files[file], 'utf8')

            // Get all classes which starts with 'fa-'
            let classes = fileContent.match(rgxClasses)

            // For each class
            for(let clss in classes) {

                // Get class name
                let cls = classes[clss]

                // Get icon type ('fa', 'far', 'fal', 'fab') and name ('fa-shopping-cart'...)
                let iconType = cls.match(rgxIconType)
                let iconName = cls.match(rgxIconName)

                // If icon isn't null (bug) and isn't already in array
                if(iconType!==null && iconName!==null && !~bigData[iconType[2]].indexOf(iconName[0])) {

                    // Add real icon name (without 'fa-') to the array
                    bigData[iconType[2]].push(iconName[0].substr(3))

                }

            }

        }

        // For each FA JS file
        for(let file in faFiles) {

            // If respective array isn't empty
            if(bigData[file].length > 0) {

                // Read the FA JS file
                let fixture = fs.readFileSync(faFiles[file].input, 'utf8')

                let oldSize = fixture.length

                // Get all icons in file
                let iconMatches = fixture.match(rgxIconInJS)

                // For each icon
                for(let iconMatch in iconMatches) {

                    // Get name and real name (without 'fa-')
                    let iconName     = iconMatches[iconMatch].match(rgxIconNameJS)
                    let realIconName = iconName[0].substr(1, iconName[0].length-3)

                    // If icon isn't present in corresponding array (then it's not used)
                    if(!~bigData[file].indexOf(realIconName)) {

                        // Remove the icon from FA JS file
                        fixture = fixture.replace(iconMatches[iconMatch], '')

                    }

                }

                let newSize = fixture.length

                // Write new file with updated used icons
                write(faFiles[file].output, fixture)
                    .then(function() {
                        console.log(faFiles[file].input + ' changed! File reduced by ' + Math.round(10000-(newSize/oldSize)*10000)/100 + '%')
                    })

            }

        }

    })

}

module.exports = purge;