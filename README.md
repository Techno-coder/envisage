# Envisage
Data structure visualisation tool.

## Usage
Select a data structure from the menu. Paste in the data into the text box on the left. 
The visualisation will update automatically.

### Copy Render Code
This button will copy a C++ function to the clipboard for printing 
out the data structure from a variable.

## Adding a data structure
New data structures can added in the `structures` folder. Each data structure must contain:
- A code string that represents the C++ code that is copied to the clipboard
- A render function for parsing and rendering the input text

Additional files must also be appended to the index file body as a script. 
If Typescript files are modified they must be recompiled.
