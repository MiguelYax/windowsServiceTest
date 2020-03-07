/*!
 * @author Miguel Yax <mig_dj@hotmail.com>
 * date 03/07/2020
 * Implementa el modulo de assembly-version. 
 */
const assemblyVersion = require('assembly-version');
const gulp = require('gulp')

assemblyVersion.setAssemblyInformationFilePath(`${__dirname}/wsTest/Properties/AssemblyInfo.cs`)
assemblyVersion.init(gulp);


