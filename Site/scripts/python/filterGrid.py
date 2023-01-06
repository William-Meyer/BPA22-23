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
        writeToFile('<div class="card">')
        writeToFile('<img src="../imgs/filler.png" alt="'+ line[3]+ ' ' + line[4] +' '+ line[1] + ' ' + line[2]+'" class = "' + line[1] + ' ' + line[2] + ' ' + line[3] + ' ' + line[4] + ' ' + line[5] + ' ' + line[6] + ' ' + line[8] + ' ' + line[9] +'">')
        writeToFile('<div class="cardInfo">')
        writeToFile('<a href = "cars/car'+str(i)+'.html">'+line[3]+' | '+line[1] +' '+line[2]+'</a>')
        writeToFile('</div>')
        writeToFile('</div>')
        i+=1
