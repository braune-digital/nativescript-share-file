# Nativescript Share File

Send/Share files to other apps.

Android Intent, IOS InteractionController:

<img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-android.png?raw=true" width="250"> .   <img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-ios.png?raw=true" width="250">



## Installation

Install the plugin in your app.

~~~
npm install nativescript-share-file
~~~

## Usage 

Info: Shared files should be in the `documents` path. Android is not stable yet. 
	
```TypeScript
    import { ShareFile } from 'nativescript-share-file';
    import * as fs from 'tns-core-modules/file-system';

    export class TestClass{

        shareFile: ShareFile;
        fileName;
        documents;
        path;
        file;

        constructor() {

            this.fileName = 'test.txt';
            this.documents = fs.knownFolders.documents();
            this.path = fs.path.join(this.documents.path, this.fileName);
            this.file = fs.File.fromPath(this.path);

            this.shareFile = new ShareFile();
            this.shareFile.open(
                { 
                    path: this.documents.path + this.fileName, 
                    intentTitle: 'Open text file with:', // optional Android
                    rect: { // optional iPad
                        x: 110,
                        y: 110,
                        width: 0,
                        height: 0
                    },
                    options: false, // optional iOS
                    animated: true // optional iOS
                });
        }
    }

```

### Arguments

`path`: Path to the file which should be shared.

`intentTitle`: (Optional) Title for the intent on Android. Default: `Open file:`.

`rect`: (Optional) Positioning the view fpr iPads. On iPhones its always shown on the bottom. Default: `{x: 0, y: 0, width: 0, height: 0 }`.

`options`: (Optional) Show additional opening options for iOS devices. Default: `false`.

`animated`: (Optional) Opening animation fpr iOS devices. Default: `false`.