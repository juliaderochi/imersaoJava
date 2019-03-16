var fs = require('fs')
var path =  require('path')

var pastaBase = 'c:/windows'
var regex =/\.log$/i

fs.readdir(pastaBase, function (erro, arquivos) {
    if (erro){
        console.console.log('Não foi possível listar %s', pastaBase);
        return
    }
    arquivos.forEach(function (nomeArquivo) {
        var file = path.join(pastaBase, nomeArquivo)
        if(regex.test(nomeArquivo))
        console.log('%s (%s)', nomeArquivo, file)
    });
})