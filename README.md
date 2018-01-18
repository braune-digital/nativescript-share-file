# nativescript-share-file

Send/Share files to other apps. 

Android Intent:

IOS InteractionController:


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
