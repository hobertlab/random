#!/usr/bin/env python2.7

import os, datetime
from shutil import copyfile
from random import sample
from  Tkinter import *
import Tkinter, Tkconstants, tkFileDialog

#
# options
#
dstFolderName = 'scrambled'
dstFilePrefix = 's_'
maximumFiles = 9999
zeroPadding = len(str(maximumFiles))
#
#
#

def do_scramble():
	#
	# get the source folder from user
	root = Tk()
	root.directory = tkFileDialog.askdirectory(title='Please select a directory with your source files to scramble')
	srcFolder = root.directory

	#
	# make the output directory
	dstFolder = os.path.join(srcFolder,dstFolderName)
	if not os.path.exists(dstFolder):
		os.makedirs(dstFolder)
	
	print '=== Start ======================================================================'
	print 'scramble.py was run on', datetime.datetime.now()
	print '   srcFolder:', srcFolder
	print '   dstFolder:', dstFolder

	#
	# make a list of files we will scramble, skipping directories and files that start with '.'
	files = []
	for file in os.listdir(srcFolder):
		filepath = os.path.join(srcFolder,file)
		if not os.path.isfile(filepath) or file.startswith('.'):
			continue
		files.append(file)
	numfiles = len(files)

	#
	if numfiles > maximumFiles:
		print "=== ERROR: This script only works with a maximum of", maximumFiles, "files. Please modify 'maximumFiles' and try again."
		return 0
	#
	# generate a list of numfiles random numbers [0..myRange] without repeats
	scramblednumbers = sample(range(maximumFiles), numfiles)

	#
	# make a string of length zeroPadding from scrambled numbers
	scrambledstrings = [str(scramblednumber).zfill(zeroPadding) for scramblednumber in scramblednumbers]

	outLines = []
	
	#
	# copy each file in srcFolder to a new scrambled name in dstFolder
	for i, file in enumerate(files):
	
		# source file we will copy
		src = srcFolder + '/' + file
	
		# make the random str length zeroPAdding
		#randomStr = str(scramblednumbers[i])
		#randomStr = randomStr.zfill(zeroPadding)
	
		# get the base file name and file extension of file
		basefilename, file_extension = os.path.splitext(file)
	
		# destination file (has scrambled name)
		dstFile = dstFilePrefix + scrambledstrings[i] + file_extension
		dst = os.path.join(dstFolder, dstFile)
	
		outLine = 'file ' + str(i+1) + ' of ' + str(numfiles) + ', src:' + src + ', dst:' + dst
		print outLine
		outLines.append(outLine)
		
		#
		# do the copy
		copyfile(src, dst)
	
	#
	# save results in a file in srcFolder
	outfilelog = os.path.join(srcFolder, 'scrambled_' + datetime.datetime.now().strftime('%Y%m%d_%H%M%S') + '.txt')
	print 'Saving output log file to:', outfilelog
	with open(outfilelog, "w") as outputFile:
		for line in outLines:
			outputFile.write(line + '\n')
    
	print '=== Done ======================================================================'

if __name__ == '__main__':
	do_scramble()
