import csv

import os
def writeToFile(toWrite):
    f = open(outputFile, "a")
    f.write(toWrite + "\n")
    f.close()

filename = 'cars.csv'
outputFile = 'output.txt'
with open(filename, 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    i = 0
    for line in csvreader:
        name = ''
        if '%' in line[2]:
            name = line[2].replace('%',' ')
        else:
            name = line[2]
        writeToFile('<div id = "car'+line[0]+'" class="card ' + line[1] + ' ' + line[2] + ' ' + line[3] + ' ' + line[4] + ' ' + line[5] + ' ' + line[6] + ' ' + line[8] + ' ' + line[9] + ' ' + line[10] + '">')
        writeToFile('<img src="../imgs/cars/car'+str(line[0])+'-1.png" alt="'+ line[3]+ ' ' + line[4] +' '+ line[1] + ' ' + name+'">')
        writeToFile('<div class="cardInfo">')
        writeToFile('<a href = "cars/car'+str(line[0])+'.html">'+line[3]+' | '+line[1] +' '+name+'</a>')
        writeToFile('</div>')
        writeToFile('</div>')
        i+=1
