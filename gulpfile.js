const assemblyVersion = require('assembly-version');
const gulp = require('gulp')

let versionManager = new assemblyVersion(`${__dirname}/wsTest/Properties/AssemblyInfo.cs`)

versionManager.init(gulp);