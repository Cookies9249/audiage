# =====================================================================================

# Date Started: August 25th, 2023
# Contributors: Vincent Zhen, Carson Wang, Andrew Tian

# Importing libraries
from tkinter import *
from tkinter import filedialog as fd
from tkinter import messagebox
from tkinter import PhotoImage
import numpy as np
import matplotlib.pyplot as plt
from scipy.fft import fft, fftfreq, rfft, rfftfreq, irfft
from scipy.io import wavfile
from scipy.io.wavfile import write
import librosa
import math
import audioread
import sounddevice as sd
import time
import wavio as wv
import os

# =====================================================================================

# Creating the window
userWindow = Tk()
userWindow.title('Audiage')
userWindow.resizable(0,0)
userWindow.geometry('705x465')

# =====================================================================================

# Initializing Global Variables
filedir = StringVar()
filename = StringVar()
outputname = StringVar()
audiofile = []
freqfloor = IntVar()
freqceiling = IntVar()
groupOne = IntVar() #this is for the radio buttons' variable property

# =====================================================================================

# BACKEND FUNCTIONS:
# Filter audio files
# Credit to: Cameron Macleod for demonstrating this algorithm
# https://realpython.com/python-scipy-fft/#avoiding-filtering-pitfalls
def FilterAudio(filedir, freqfloor = 20, freqceiling = 20000):
    # Extracting sample data from the audio file
    audiodata, samplerate = librosa.load(filedir, sr = 44100)
    audiodata = np.int16(audiodata / audiodata.max() * 32767)
    duration = audioread.audio_open(filedir).duration
    numsamples = math.ceil(samplerate * duration)

    # Applying real fast fourier transform
    yf = rfft(audiodata)
    xf = rfftfreq(numsamples, 1/samplerate)

    # Filtering out unwanted frequencies
    pointsperfreq = len(xf) / (samplerate / 2)
    maxfreq = int(pointsperfreq * float(freqceiling))
    minfreq = int(pointsperfreq * float(freqfloor))
    yf[0:minfreq] = 0
    yf[maxfreq:] = 0

    # Creating new audio file
    newdata = irfft(yf)/32767
    newsound = np.int16(newdata * (32767/newdata.max()))
    return samplerate, newsound

#def intCheck(input):
    #if str(input).isdigit == True:
        #return True
    #else:
        #return False

# =====================================================================================

# Button Functions

def showFileTypeError():
    messagebox.showerror("Error", "Error: incorrect file format! Must end in .wav")

def showInputError():
    messagebox.showerror("Error", "Error: invalid minimum and/or maximum! Frequency range must be between 20-20000")

def noFileSelectedError():
    messagebox.showerror("Error", "Error: You have not selected a file.")

def fileNotConvertedError():
    messagebox.showerror("Error", "Error: You have not converted the file.")

def buttonPlayFunction():
    global audiofile
    duration = int(audioread.audio_open(filedir.get()).duration)
    sd.play(audiofile[1], audiofile[0])
    time.sleep(duration)
    sd.stop()

def buttonDownloadFunction():
    global audiofile
    if filedir.get() == "":
        noFileSelectedError()
    elif audiofile == []:
        fileNotConvertedError()
    else:
        filepath = fd.askdirectory()
        freq = 44100
        wv.write(os.path.join(filepath, "download.wav"), audiofile[1], freq)

def buttonRadioCalled():
    textboxMin.delete("1.0",END)
    textboxMax.delete("1.0",END)
    textboxMin.config(state="disabled",bg="grey")
    textboxMax.config(state="disabled",bg="grey")
    freqfloor.set(20)

    if groupOne == 2:
        freqceiling.set(16000)
    elif groupOne == 3:
        freqceiling.set(12000)
    else:
        freqceiling.set(20000)

def buttonRadioCustom():
    textboxMin.config(state="normal",bg="white")
    textboxMax.config(state="normal",bg="white")

def buttonImportFunction():
    filepath = str(fd.askopenfilename())
    if filepath.endswith(".wav") == False:
        showFileTypeError()
    else: 
        filedir.set(str(filepath))
        printText(filepath, textboxImport)

def buttonConvertFunction():
    global audiofile
    if filedir.get() == "":
        noFileSelectedError()
    else:
        if groupOne.get() == 4:
            minFreq = str(textboxMin.get("1.0", END).strip())
            maxFreq = str(textboxMax.get("1.0", END).strip())

            if minFreq.isdigit() and maxFreq.isdigit() and (int(minFreq) < int(maxFreq)) and int(minFreq) >= 20 and int(maxFreq) <= 20000:
                audiofile = FilterAudio(filedir.get(), minFreq, maxFreq)
                print("Audio Converted")
            else:
                showInputError()
        else:
            audiofile = FilterAudio(filedir.get(), freqfloor.get(), freqceiling.get())

# Generalized function to print text for any given textbox:
def printText(strOutput, textBox):
    textBox.configure(state='normal')
    textBox.delete(1.0, END)
    textBox.insert(INSERT, strOutput + "\n")
    textBox.configure(state='disabled')

# =====================================================================================

# Initializing Widgets
#labelTitle = Label(userWindow, text="Audiage - Frequency Balancer") delete
textboxLogo = Text(userWindow, height = 6, width = 50)
image = PhotoImage(file="audiagelogo.png")
textboxLogo.image_create(END, image=image)

productGroup = LabelFrame(userWindow, text = "View Product")
buttonPlay = Button(productGroup, text="Play", width=43, height=1,command = lambda:buttonPlayFunction())
buttonDownload = Button(productGroup, text="Download", width=43, height=1,command= lambda:buttonDownloadFunction())

processGroup = LabelFrame(userWindow, text = "Process Files")
textboxImport= Text(processGroup, height=1,width=38)
labelImport = Label(processGroup, text="Import File")
labelConvert = Label(processGroup, text="Convert File")
buttonImport = Button(processGroup, text="Import",command = lambda:buttonImportFunction())
buttonConvert = Button(processGroup, text="Convert", command = lambda:buttonConvertFunction())

basicGroup = LabelFrame(userWindow, text = "Basic Modes")
buttonRadioAdolescent = Radiobutton(basicGroup, text="Adolescent: 20 - 20,000 Hz", command=buttonRadioCalled, variable=groupOne, value = 1)
buttonRadioAdult = Radiobutton(basicGroup, text="Adult: 20 - 16,000 Hz", command=buttonRadioCalled, variable=groupOne, value = 2)
buttonRadioSenior =Radiobutton(basicGroup, text="Senior: 20 - 12,000 Hz", command=buttonRadioCalled, variable=groupOne, value = 3)
buttonRadioCustom = Radiobutton(basicGroup, text="Custom", command=buttonRadioCustom,variable=groupOne,value=4)

customGroup = LabelFrame(userWindow, text = "Custom Mode")
labelMax = Label(customGroup,text="Maximum Frequency (Hz):")
labelMin = Label(customGroup, text= "Minimum Frequency (Hz):")
textboxMin = Text(customGroup, height=1,width=5)
textboxMax = Text(customGroup, height=1,width=5)
# =====================================================================================

# Configurations

labelImport.config(font=("",12))
labelConvert.config(font=("",12))

textboxMin.config(state="disabled",bg="grey")
textboxMax.config(state="disabled",bg="grey")
textboxImport.config(state="disabled") 
textboxLogo.config(state="disabled")

groupOne.set(1)

# Icon
icon = PhotoImage(file="icon.png")
userWindow.iconphoto(True,icon)

# =====================================================================================

# Placing Widgets
# Basic
textboxLogo.grid(row=0,column=0, columnspan=5, sticky="", pady=20)

basicGroup.grid(row = 1, column = 0, columnspan = 2, pady = 5, padx = 25)
buttonRadioAdolescent.grid(row=2,column=0, sticky=W, ipadx=25, pady=10, padx=25)
buttonRadioAdult.grid(row=3,column=0, sticky=W, ipadx=25, pady=5, padx=25)
buttonRadioSenior.grid(row=4,column=0, sticky=W, ipadx=25, pady=10, padx=25)
buttonRadioCustom.grid(row=5,column=0,sticky=W, ipadx=25, pady=10, padx=25)

customGroup.grid(row = 6, column = 0, sticky=N, columnspan = 2, pady = 15, ipadx =16 )
labelMin.grid(row=6, column=0,sticky="",pady=10,ipadx=25)
labelMax.grid(row=7, column=0,sticky="",pady=10,ipadx=25)
textboxMin.grid(row=6, column=1,sticky=W,pady=10)
textboxMax.grid(row=7,column=1,sticky=W,pady=10)

processGroup.grid(row=1, column=2, columnspan = 2, pady = 5, padx = 5,ipady=8,ipadx=5)
labelImport.grid(row=1, column=3, sticky=S,pady=10)
buttonImport.grid(row=1,column=5, sticky=S,padx=10,pady=10)
textboxImport.grid(row=2, column=3, columnspan=3,sticky=NW,pady=8,padx=35)
labelConvert.grid(row=4, column=3, sticky=N, pady=25)
buttonConvert.grid(row=4,column=5, sticky="",padx=5)

productGroup.grid(row = 6, column = 2, columnspan = 2, sticky=W,padx=4, pady=13,ipady = 5, ipadx = 1)
buttonDownload.grid(row=6,column=2,columnspan=3,sticky="", pady=5,padx=20)
buttonPlay.grid(row=7,column = 2, columnspan=3,sticky="", pady=5,padx=20)

# =====================================================================================

# Front end
mainloop()
