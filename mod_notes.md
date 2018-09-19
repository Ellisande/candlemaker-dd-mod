Exporting "sample_project.xml

Make a copy of this project file and fill out the following parameters.

ModDataPath - Absolute path to your mod's data directory. This should not be
the same data folder as the game's data. It should be its own
folder with your set of mod files that are to override or add to
the game's files.

Title - The name of your mod.

ItemDescriptionShort (Optional) - A short description, under 512 chars, to be seen in game
when hovered on in the mod selection UI.

ItemDescription (Optional) - A description of your mod in under 8000 characters.
(for the Steam store)

Tags (Optional) - An array of keywords that will be linked to your mod.

Visibility - Pre-defined values of - "private" For yourself only - "friends" For friends only - "public" For everyone

UploadMode - How to handle the upload process... - "direct_upload" Uploads mod data folder directly - "copy_and_upload" Copies (if necessary) files to an separate directory
and uploads. - "strip_and_upload" Strips out vanilla files and uploads the data folder
and directly uploads directory - "dont_submit" Only for the creation of loc files and modfiles.txt

ModVersionMajor (Optional) - Your mod version major number to be printed
next to your mod name in game .(ie. Foo (3.2))

ModVersionMinor (Optional) - Your mod version minor number to be printed
next to your mod name in game. (ie. Foo (3.2))

TargetBuild (Optional) - The build version the mod was designed to be played on.

Once you have made your changes, drag your project file onto the
steam_workshop_upload.exe tool to automatically upload your mod.
Your project file will be modified (PublishedFileId) to include your
mod's reference number for future updates so keep using this project file.

To include the preview icon, place your preview_icon.png (under 1MB)
into your mod's data folder (ModDataPath).

Press any key to continue . . .
