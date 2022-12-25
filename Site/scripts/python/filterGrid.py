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
    for line in csvreader:
        writeToFile('<div class="card">')
        writeToFile('<img src="../imgs/filler.png" alt="'+ line[3]+ ' ' + line[4] +' '+ line[1] + ' ' + line[2]+'">')
        writeToFile('<div class="cardInfo">')
        writeToFile('<a href = "example.com">'+line[3]+' | '+line[1] +' '+line[2]+'</a>')
        writeToFile('</div>')
        writeToFile('</div>')
