// Cyril adding back-up function, to be associated with a time trigger
function createBackup() {
  var backupsFolderId ="0B8lwoSRqgVIUZHdmcVk4SVN0UG8"; // opened the folder in drive and copied the id from the URL
  var iso8601Date = Utilities.formatDate(new Date(), "UTC", "yyyy-MM-dd");
  var saveName = SpreadsheetApp.getActiveSpreadsheet().getName() + "_backup_" + iso8601Date;
  DriveApp.getFileById(SpreadsheetApp.getActiveSpreadsheet().getId()).makeCopy(saveName,DriveApp.getFolderById(backupsFolderId));
}


function createotExNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var otExStr = String(sheet.getRange(3, 3).getValue());
  var otExNum = parseInt(otExStr.substring(4, otExStr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue("otEx" + otExNum);
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 11).setValue(Browser.inputBox("Line Number:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.getRange(3, 3).setValue("otEx" + (otExNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}


function createotIsNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var otIsStr = String(sheet.getRange(3, 4).getValue());
  var otIsNum = parseInt(otIsStr.substring(4, otIsStr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue("otIs" + otIsNum);;
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 11).setValue(Browser.inputBox("Line Number:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.getRange(3, 4).setValue("otIs" + (otIsNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}


function createotTiNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var otTiStr = String(sheet.getRange(3, 5).getValue());
  var otTiNum = parseInt(otTiStr.substring(4, otTiStr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue("otTi" + otTiNum);;
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 11).setValue(Browser.inputBox("Line Number:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.getRange(3, 5).setValue("otTi" + (otTiNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}

function createotSiNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var otSiStr = String(sheet.getRange(3, 7).getValue());
  var otSiNum = parseInt(otSiStr.substring(4, otSiStr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue("otSi" + otSiNum);;
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 11).setValue(Browser.inputBox("Line Number:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.getRange(3, 7).setValue("otSi" + (otSiNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}

function createotNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var otStr = String(sheet.getRange(3, 6).getValue());
  var otNum = parseInt(otStr.substring(2, otStr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue("ot" + otNum);;
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.getRange(3, 6).setValue("ot" + (otNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}


function createBlankRecord() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());;
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue(Browser.inputBox("Strain Name: "));
  sheet.getRange(sheet.getLastRow(), 2).setValue(Browser.inputBox("Alleles/Transgenes: "));
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By:"));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow() + 1, 1, 1, sheet.getLastColumn()));
}


function createOHNumber() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OHstr = String(sheet.getRange(3, 10).getValue());
  var OHNum = parseInt(OHstr.substring(2, OHstr.length));
  var date = new Date;
  sheet.insertRowAfter(sheet.getLastRow());
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue("OH" + OHNum);
  sheet.getRange(sheet.getLastRow(), 2).setValue(Browser.inputBox("Alleles/Transgenes: "));
  sheet.getRange(sheet.getLastRow(), 3).setValue(Browser.inputBox("Genotype: "));
  sheet.getRange(sheet.getLastRow(), 4).setValue(Browser.inputBox("Strain Background: "));
  sheet.getRange(sheet.getLastRow(), 5).setValue(Browser.inputBox("DNA On Array: "));
  sheet.getRange(sheet.getLastRow(), 6).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
  sheet.getRange(sheet.getLastRow(), 8).setValue(Browser.inputBox("This Strain Was Created By: "));
  sheet.getRange(sheet.getLastRow(), 12).setValue(Browser.inputBox("Notes:"));
  sheet.getRange(3, 10).setValue("OH" + (OHNum + 1));
  sheet.setActiveRange(sheet.getRange(sheet.getLastRow(), 1, 1, sheet.getLastColumn()));
}


function test() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastR = sheet.getLastRow();
  var input = Browser.msgBox("Are you sure you'd like to erace the last the entry?:\\n"
                             + "-----------------------------------------------------"
                             + "\\nStrain Name: " + sheet.getRange(lastR, 1).getValue()
                             + "\\nGenotype: " + sheet.getRange(lastR, 2).getValue()
                             + "\\nRecord Creation Date: " + sheet.getRange(lastR, 6).getValue()
                             + "\\nCreated By: " + sheet.getRange(lastR, 7).getValue()
                             , Browser.Buttons.YES_NO);
  if (input == "yes")
    undo();
}


function undo() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var OH = sheet.getRange(sheet.getLastRow(), 1).getValue();
  var geno = sheet.getRange(sheet.getLastRow(), 2).getValue();

  if (OH.search("OH") != -1) {
    var OHStr = String(sheet.getRange(3, 10).getValue());
    sheet.getRange(3, 10).setValue("OH" + (parseInt(OHStr.substring(2, OHStr.length)) - 1));
  }
  
  if (geno.search("otEx") != -1) {
    var otExStr = String(sheet.getRange(3, 3).getValue());
    sheet.getRange(3, 3).setValue("otEx" + (parseInt(otExStr.substring(4, otExStr.length)) - 1)); 
  }
  else if (geno.search("otIs") != -1) {
    var otIsStr = String(sheet.getRange(3, 4).getValue());
    sheet.getRange(3, 4).setValue("otIs" + (parseInt(otIsStr.substring(4, otIsStr.length)) - 1));
  }
  else if (geno.search("otTi") != -1) {
    var otTiStr = String(sheet.getRange(3, 5).getValue());
    sheet.getRange(3, 5).setValue("otTi" + (parseInt(otTiStr.substring(4, otTiStr.length)) - 1));
  }
  else if (geno.search("ot") != -1) {
    var otStr = String(sheet.getRange(3, 6).getValue());
    sheet.getRange(3, 6).setValue("ot" + (parseInt(otStr.substring(2, otStr.length)) - 1));
  }
  
  sheet.deleteRow(sheet.getLastRow());
}


function exportAndEmail() {
  DocsList.createFolder('Folder1').createFolder('Subfolder1').createFile('File1', 'Empty'); 
}


  // https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  // will only look at the first values!
function arraysEqualFirstVals(a, b) {
  var stopComparingAfterThisManyVals = 5;
  if (a === b) return true;
  if (a == null || b == null) return false;
  for (var i = 0; i < Math.min(a.length, stopComparingAfterThisManyVals); ++i) {
    if (a[i] !== b[i]) {
      return false; 
    }
  }
  return true;
}


function isBoxNbMissing(strainDataArray) {
  for (var idx = 0; idx < strainDataArray.length; idx++) {
    if (strainDataArray[idx].toLowerCase().indexOf('box') != -1) {
      return false;
    }
  }
  return true;
}


// Was a strain previously requested? Was it returned? When?
function findLastTimeRequested(requestSheet, cellsToSearchOn, leftOffset){
    var nbLinesToSkipAtStart = 3; // not really needed I guess?
    var requestSheetContents = requestSheet.getRange(1 + nbLinesToSkipAtStart,1,requestSheet.getLastRow()-nbLinesToSkipAtStart, cellsToSearchOn.length + leftOffset).getDisplayValues();
    for (idx=(requestSheetContents.length-1); idx >=0; idx--){
      if ( arraysEqualFirstVals(cellsToSearchOn, requestSheetContents[idx].slice(leftOffset))) {
        var lastRequest = new Object();
        lastRequest.contents = "Strain "+ requestSheetContents[idx][3] + " [" +  requestSheetContents[idx][4]  +"] was last requested by " + requestSheetContents[idx][0];
        lastRequest.return_status = requestSheetContents[idx][2];
        lastRequest.date =  requestSheetContents[idx][1];
        return lastRequest
      }
    }
  return null;
}


// Cyril changed this
function request2() {
  // Cross references the collection and request sheets to see if the strain is already out.
  // altered behavior to compare nbColsToSearch and to make less requests to the servers
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var selectedRow = sheet.getRange(sheet.getActiveCell().getRow(), 1, 1, sheet.getLastColumn());
  var nbColsToSearch=8; // have to hardcode the number of columns over which to compare the collection and request records. Cols start at 1!
  var boxCols=[9,10];
  // col 1-7 should not change but 8-9 (location might change)
  var cellsToSearchOn = selectedRow.getDisplayValues()[0].slice(0, nbColsToSearch-1) 
  var cellsLocation = selectedRow.getDisplayValues()[0].slice(boxCols[0]-1,boxCols[1]) 
  // Check if the strain is really in the collection
  if (isBoxNbMissing(cellsLocation)){
      Browser.msgBox("This strain has no box number, it is not available from the collection");
      return;
  }
  // Search the request sheet
  var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Requests");
  var leftOffset = 3; // nb of columns to the left with request data; strain data goes to the right
  var lastRequest = (findLastTimeRequested(targetSheet, cellsToSearchOn, leftOffset));
  if ((lastRequest != null) && (lastRequest.return_status.toLowerCase().search('no') != -1)){
    Browser.msgBox(lastRequest.contents + "\\nReturn status -> " + lastRequest.return_status);
    return;
  }
  // Prompt for the username and inform of last request
  var yourName = Browser.inputBox( ( (lastRequest==null) ? "" : ("This strain has been requested before and somebody might still have it out.\\n\\n" + 
                                     lastRequest.contents + "\\nRequest date -> "+ lastRequest.date +"\\nReturn status -> " + lastRequest.return_status +"\\n\\n")) 
                                  + "What is your name" + ((lastRequest==null) ? "" : ", assuming you still want it from the collection" ) + "?");
  if (yourName == "cancel" || yourName == "") {   // User closed the dialog / did not put his name
   return ;
  }
  // Update the request sheet
  targetSheet.insertRowAfter(targetSheet.getLastRow());
  var date = new Date;
  var dateString = (date.getMonth() + 1) + " " + date.getDate() + " " + date.getYear();
  targetSheet.getRange(targetSheet.getLastRow() + 1, 1,1,leftOffset).setValues([[yourName, dateString, "no"]]);  // request info
  selectedRow.copyTo(targetSheet.getRange(targetSheet.getLastRow(), leftOffset+1));           // strain info
}


function returned() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(sheet.getActiveRange().getRow(), 3).setValue("yes");
}


function remove() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var activeR = sheet.getActiveCell().getRow();
  if (activeR < 4 ) 
  {
    Browser.msgBox("Can not remove from this range."); 
  }
  else
  {
    var input = Browser.msgBox("Are you sure you'd like to erase the last the entry?:\\n"
                               + "-----------------------------------------------------"
                               + "\\nStrain Name: " + sheet.getRange(activeR, 3).getValue()
                               + "\\nTaken Out By: " + sheet.getRange(activeR, 1).getValue()
                               + "\\nTaken Out On: " + sheet.getRange(activeR, 2).getValue()
                               , Browser.Buttons.YES_NO);
    if (input == "yes")
      sheet.deleteRow(activeR);
  }
}


function searchTheDatabase() {
  var list = [];
  var str = Browser.inputBox("What Are You Looking For?");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  for (r = 1; r <= sheet.getLastRow(); r++) {
    //for (c = 1; c <= sheet.getLastColumn(); c++) {  
      //var range = sheet.getRange(r, c).getValue();
      var range = sheet.getRange(r, 1, 1, sheet.getLastColumn()).getValue();
      try {
        if (range.search(str) != -1 ) {
          list[list.length] = r;
          sheet.getRange(r, 1).setBackground("gray");
          //sheet.getRange(r, c).setBackground("gray");
          r++;
          //c = 1;
        }
      } catch(e) {
        Browser.msgBox("error");
        //c++;
      }
    //}
  } 
  ss.insertSheet("Edit");
  var s = ss.getActiveSheet();
  var numColumns = s.getLastColumn();
  if (list.length > 0) {
    for (i = 1; i <= list.length; i++) {
      var targetSheet = ss.getSheetByName("Sheet1");
      var target = targetSheet.getRange(list[i - 1], 1, 1, targetSheet.getLastColumn());
      target.copyTo(ss.getActiveSheet().getRange(i, 1));
    }
  }
} 


function addToAppendix() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var cell = sheet.getRange(sheet.getActiveCell().getRow(), 1, 2, 3);
  var cellSearched = sheet.getRange(sheet.getActiveCell().getRow(), 1).getValue();
  var targetSheet = ss.getSheetByName("Requests");
  
    targetSheet.insertRowAfter(targetSheet.getLastRow());
    var targetRange = targetSheet.getRange(targetSheet.getLastRow() + 1, 1);
    var date = new Date;
    targetSheet.getRange(targetSheet.getLastRow(), 2).setValue(date.getMonth() + 1 + " " + date.getDate() + " " + date.getYear());
    targetSheet.getRange(targetSheet.getLastRow(), 3).setValue("no");
    cell.copyTo(targetRange);
}


function searchTest() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rng = sheet.getRange(28, 2, 11, 1);
  var data = rng.getValues();
  var search = "What to search for"
  
  for (var i=0; i < data.length; i++) {
    if (data[i][0] == search) {
      data[i][0].valueOf() = "Set found cell to this";
      rng.setValues(data);
    } 
  }
}
