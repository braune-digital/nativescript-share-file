# ⚠️ DEPRECATD⚠️

Due to a lack of time, it's not possible to maintain this repository any longer.
Please refer to the guys from finanzritter's repository who cloned it and still maintaining it:

[https://github.com/FinanzRitter/nativescript-share-file](https://github.com/FinanzRitter/nativescript-share-file)

## Nativescript Share File

Send/Share files to other apps.

Android Intent, IOS InteractionController:

<img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-android.png?raw=true" width="250"> . <img src="https://github.com/braune-digital/nativescript-share-file/blob/master/preview/preview-ios.png?raw=true" width="250">

## Installation

Install the plugin in your app.

```
npm install nativescript-share-file
```

### Android FileProvider Setup

On Android, you must add a FileProvider definition and specify available files, which is documented [here](https://developer.android.com/reference/androidx/core/content/FileProvider#ProviderDefinition)

## Usage

Info: Shared files should be in the `documents` path.

```TypeScript
    import { ShareFile } from 'nativescript-share-file';
    import * as fs from 'tns-core-modules/file-system';

    export class TestClass{

        shareFile;
        fileName;
        documents;
        path;
        file;

        constructor() {

            this.fileName = 'text.txt';
            this.documents = fs.knownFolders.documents();
            this.path = fs.path.join(this.documents.path, this.fileName);
            this.file = fs.File.fromPath(this.path);
            this.shareFile = new ShareFile();

            this.shareFile.open( {
                path: this.path,
                intentTitle: 'Open text file with:', // optional Android
                rect: { // optional iPad
                    x: 110,
                    y: 110,
                    width: 0,
                    height: 0
                },
                options: true, // optional iOS
                animated: true // optional iOS
            });
        }
    }

```

### Arguments

| prop          | Description                                                                 | Type: Default                                | required   |
| ------------- | --------------------------------------------------------------------------- | -------------------------------------------- | ---------- |
| `path`        | Path to the file which will be shared.                                      | String                                       | yes        |
| `intentTitle` | Title for the intent on Android.                                            | String: `Open file:`                         | (Optional) |
| `rect`        | Positioning the view for iPads. On iPhones it's always shown on the bottom. | Object: `{x: 0, y: 0, width: 0, height: 0 }` | (Optional) |
| `options`     | Show additional opening options for `iOS` devices.                          | Boolean: `false`                             | (Optional) |
| `animated`    | Opening animation for `iOS` devices.                                        | Boolean: `false`                             | (Optional) |
