var line = ['harry', 'karen', 'laquesha', 'vishnu', 'julio'];


//function takeANumber(line, name) {
  //  var lineLength = line.length + 1;
    //line.push(name);
    //return `Welcome, ${name}. You are number ${lineLength} in the line.`;
//}
var ticketLine = 0;
function takeANumber(currentLine){
        ticketLine++
        currentLine.push(ticketLine);
    return `Welcome, you have ticket number ${ticketLine}`;
}

function nowServing(line) {
    person = line.shift();
    return person;
}


function currentLine(line) {

    var sentence = 'The line is currently: ';

    if (line === 0 || line === undefined || line === NaN) {
        return 'The line is currently empty.';
    }

    for (i = 0; i < line.length; i++) {
        name = line[i];
        number = i + 1;
        sentence += (`${number}: ${name}. `);
    }
    return sentence;
}

takeANumber(3, 'ben');