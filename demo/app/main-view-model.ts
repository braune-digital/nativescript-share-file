import { Observable } from 'tns-core-modules/data/observable';
import { ShareFile } from 'nativescript-share-file';
import * as fs from 'tns-core-modules/file-system';

export class HelloWorldModel extends Observable {
  private shareFile: ShareFile;
  public documents: any;
  public fileName = '/test.txt'; // for testing use '/test.pdf' or '/test.txt'

  constructor() {
    super();
    this.documents = fs.knownFolders.currentApp();
    this.shareFile = new ShareFile();
    setTimeout(() => {
      this.shareFile.open({ path: this.documents.path + this.fileName, intentTitle: 'Open text file with:'});
    }, 3000);
  }
}
