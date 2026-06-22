function extractFile(string) {

    let path = string.split('\\');
    let getFile = path.pop();
    let lastDotIndex = getFile.lastIndexOf('.');
    let fileName = getFile.substring(0, lastDotIndex);
    let format = getFile.substring(lastDotIndex + 1)
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${format}`);

}
extractFile('C:\\Internal\\training-internal\\Template.dxf.pptx');