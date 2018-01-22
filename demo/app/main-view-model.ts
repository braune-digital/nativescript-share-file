import { Observable } from 'tns-core-modules/data/observable';
import { ShareFile } from 'nativescript-share-file';
import * as fs from 'tns-core-modules/file-system';

export class HelloWorldModel extends Observable {
  private shareFile: ShareFile;
  fileName;
  documents;
  path;
  file;

  constructor() {
    super();
    this.fileName = 'report.txt';
    this.documents = fs.knownFolders.documents();
    this.path = fs.path.join(this.documents.path, this.fileName);
    this.file = fs.File.fromPath(this.path);

    this.shareFile = new ShareFile();

    try {
      this.file.writeText('Send this txt to other apps').then( () => {
        setTimeout(() => {
          this.shareFile.open({
            path: this.path,
            intentTitle: 'Open text file with:',
            rect: {
                x: 110,
                y: 110,
                width: 0,
                height: 0
            },
            options: true,
            animated: true
          });
        }, 3000);

      } ).catch( (e) => {
          console.log('Creating text file failed');
          alert(JSON.stringify(e));
      });
    } catch (e) {
      alert(e);
      console.log('Error while creating text file');
    }


  }
}
