# nativescript-share-file

Send/Share files to other apps. 

Android Intent, IOS InteractionController:

<img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-android.png?raw=true" width="250"> .   <img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-ios.png?raw=true" width="250">



## Installation

- soon on npm

## Usage 

	
```javascript
    import { ShareFile } from 'nativescript-share-file';
    import * as fs from 'tns-core-modules/file-system';

    export class TestClass{

    private shareFile: ShareFile;
    public documents: any;
    public fileName = '/test.pdf';

        constructor() {

            this.documents = fs.knownFolders.currentApp();
            this.shareFile = new ShareFile();
            setTimeout(() => {
                this.shareFile.open(this.documents.path + this.fileName);
            }, 3000);
        }
    }

```
