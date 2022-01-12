# Cloning the Hobert lab strain collection for your own lab

The strain collection uses Google Apps Script which is Javascript if you ever need some programming help

It is organized in functions, that you map a button icon on the spreadsheet. "Create blank strain" for example.
We have hardcoded the positions of spreadsheet cells that hold contents like the next allele number to be attributed. Don't move columns or those around.
The typical function will read one of those cells, prompt you for details and increment the cell contents.

## How to proceed

1. Go to the strain collection with the Google account you will be using, click on `File / Make a copy`
2. Go to your own Google drive (same as you are using above) and create a folder for your strain collection backups. Navigate to it, your URL will be something like `https://drive.google.com/drive/folders/LotsOfLettersAndDigits/`. The `LotsOfLettersAndDigits` is a folder ID, copy it somewhere.
3. Open your copy of the spreadsheet, click on `Extension / Apps Script`. You navigate via tabs on the left, notably there is a code editor with symbol `< >`. Go to the editor and make sure the `Code.gs` file is present.
4.  The code starts with `function createBackup()` that will save your collection from time to time. The first line is `var backupsFolderId =` plus a folder ID, replace it with your own folder ID.
5.  Below the editor is a clock symbol / `Triggers` pane. Go it and use the `+ Add trigger`button on bottom right. There are dropdowns, you want to select the `createBackup` function, we use the default deployment `HEAD`, change the event source to `Time-driven` and choose what interval you want to use. 

## TODO: edit the code a bit to make it easier to sub in other lab codes....
