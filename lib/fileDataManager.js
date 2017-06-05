'use strict';

const path = require('path'),
    XLSX = require('xlsx'),
    yaml = require('js-yaml'),
    csv = require('node-csv').createParser(),
    fs = require('fs'),
    properties = require('properties');

class fileDataManager{

    byExtension (fileName) {
        const loadFile = {
            '.json': this.loadJsonFile,
            '.csv': this.loadCsvFile,
            '.yml': this.loadYmlFile,
            '.xlsx': this.loadXlsxFile,
            '.properties': this.loadPropertiesFile
        };
        let ext = path.extname(fileName);
        return loadFile[ext](fileName);
    };

    loadPropertiesFile (fileName){
        return new Promise((resolve, reject) => {
            return properties.parse(fileName, {path: true}, function (error, obj) {
                if (error) reject(error);
                resolve(obj);
            });
        })
    }

    loadCsvFile (fileName){
        return new Promise((resolve, reject) => {
            return csv.parseFile(fileName, function (error, obj) {
                if (error) reject(error);
                resolve(obj);
            });
        });
    }

    loadJsonFile (fileName){
        return require(path.resolve(fileName));
    }

    loadYmlFile (fileName){
        return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
    }

    loadXlsxFile (fileName){
        return XLSX.readFile(fileName);
    }
}

module.exports = new fileDataManager();